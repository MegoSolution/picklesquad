import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import {
  RP_APP_ID,
  RP_CURRENCY,
  RP_REQUEST_KEY,
  RP_RETURN_URL,
  RP_URL,
} from '../../utils/constants';
import { calculateChecksum } from '@/utils/checksum';
import { genOrderId } from '@/utils/bookings';
import { flushSync } from 'react-dom';

const ProgramDetailsForm = () => {
  const formRef = useRef();
  const [program, setProgram] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();
  const { id } = router.query; // Fetch the program ID from URL
  const accessToken = useSelector((state) => state.accessToken);
  const currentUser = useSelector(state => state.user);
  const [bookingRes, setBookingRes] = useState(null);
  const [formData, setFormData] = useState({
    amount: null,
    orderId: '',
    ref1: '',
    ref2: '',
    checksum: null,
  });

  useEffect(() => {
    if (!id) return; 

    fetch(`/api/program?id=${id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`, 
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch program details");
        }
        return response.json();
      })
      .then((data) => {
        setProgram(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching program details:", error);
        setError("Failed to load program details.");
        setLoading(false);
      });
  }, [id]);

  
  useEffect(() => {
    if (!bookingRes) {
      return;
    }
    const orderId = genOrderId({ bookingId: bookingRes.id });
    flushSync(() =>
      setFormData((prevFormData) => {
        return {
          ...prevFormData,
          orderId,
          checksum: calculateChecksum({
            appId: RP_APP_ID,
            currency: RP_CURRENCY,
            amount:  Number(prevFormData.amount).toFixed(2) ,
            orderId,
            requestKey: RP_REQUEST_KEY,
          }),
        };
      })
    );
    console.log(formRef.current)
    
  }, [bookingRes]);
  
  useEffect(() => {
    if (formData.checksum) {
      handlePayNow();
    }
  }, [formData.checksum]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!program) return <p>Program not found.</p>;

  const adjustedStartTime = new Date(new Date(program.startTime).getTime() - 8 * 60 * 60 * 1000);
  const adjustedEndTime = new Date(new Date(program.endTime).getTime() - 8 * 60 * 60 * 1000);

  const handleBooking = async () => {
    if (!currentUser?.user?._id) {
      alert('Please login to proceed to checkout');
    }
    setFormData((prevFormData) => ({
      ...prevFormData,
      amount: program.price,
      ref1: new Date(program.startTime).getTime() / 1000,
      ref2: program.court.id,
      ref3: currentUser.user._id,
    }));
    adjustedStartTime.toLocaleString()
    try {
      const bookingRes = await fetch("/api/program", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          programId: id,
          price: program.price, 
          user: currentUser?.user._id,
        }),
      });

      if (bookingRes.ok) {
        const resData = await bookingRes.json();
        flushSync(() => setBookingRes(resData.data));
      } else {
        alert('Failed to create program booking');
      }

    } catch (error) {
      console.error("Error creating booking:", error);
    }
  };

  const handlePayNow = () => {
    if (formRef.current && formData.amount && formData.checksum) {
      formRef.current.submit();
    } else {
      alert('Please fill in all the required fields');
    }
  };

  return (
    <div className="program-details-container">
      <h1 className="program-title">{program.name}</h1>
      <div className="program-details-content">
        <div className="program-info">
          <p><strong>Description:</strong> {program.description}</p>
          <p><strong>Start Time:</strong> {adjustedStartTime.toLocaleString()}</p>
          <p><strong>End Time:</strong> {adjustedEndTime.toLocaleString()}</p>
          <p><strong>Court:</strong> {program.court?.name || "N/A"}</p>
          <p><strong>Coach:</strong> {program.coach?.name || "N/A"}</p>
          <p><strong>Price:</strong> RM {program.price}</p>
        </div>
      </div>

      <form method="post" action={RP_URL} ref={formRef}>
        <input type="hidden" name="appId" value={RP_APP_ID} />
        <input type="hidden" name="currency" value={RP_CURRENCY} />
        <input type="hidden" name="amount" value={formData.amount} />
        <input type="hidden" name="orderId" value={formData.orderId} />
        <input type="hidden" name="ref1" value={bookingRes?.id || ''} />
        <input type="hidden" name="returnURL" value={RP_RETURN_URL} />
        <input type="hidden" name="checkSum" value={formData.checksum} />
      </form>

      <div className="program-actions">
        <button className="cmn-button" onClick={handleBooking}>
          Proceed to Payment
        </button>
        <button 
        className="cmn-button cmn-button--secondary"
        onClick={() => router.back()}
      >
        Back
      </button>
      </div>
    </div>
  );
};

export default ProgramDetailsForm;
