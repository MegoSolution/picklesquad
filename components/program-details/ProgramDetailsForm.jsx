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
  const scrollRef = useRef(null);
  const [program, setProgram] = useState(null);
  const [programData, setProgramData] = useState([]);
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
  const [currentPage, setCurrentPage] = useState(1); // Page state
  const eventsPerPage = 4; // Number of events per page

  useEffect(() => {
    if (!id) return; 

    fetchPrograms();
    console.log(programData);

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
        console.log(data)
      })
      .catch((error) => {
        console.error("Error fetching program details:", error);
        setError("Failed to load program details.");
        setLoading(false);
      });
  }, [id]);

  const fetchPrograms = () => {
    fetch(`/api/program`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch program data");
        }
        return response.json();
      })
      .then((data) => {
        setProgramData(data.results || []);
      })
      .catch((error) => console.error("Error fetching programs:", error));
  };

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

  // Calculate the paginated events
  const startIndex = (currentPage - 1) * eventsPerPage;
  const paginatedEvents = programData.slice(startIndex, startIndex + eventsPerPage);

  // Handlers for pagination
  const handleNext = () => {
    if (startIndex + eventsPerPage < programData.length) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

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
    <>
      <div className="program-details">
        <div className="image-container-program">
          <img
            src="\images\Picklesquad_image\banner-one.jpg"
            alt="Program"
            className="program-image"
          />
          <div className="text-overlay">
            <h1 className="program-title">{program.name || "Program Title"}</h1>
          </div>
        </div>
  
        <div className="program-details-content">
          <div className="program-info">
            <p>{program.description}</p>
            <p><strong>Start Time:</strong> {adjustedStartTime.toLocaleString()}</p>
            <p><strong>End Time:</strong> {adjustedEndTime.toLocaleString()}</p>
            <p><strong>Court:</strong> {program.court?.name || "N/A"} - {program.court?.location?.name || "N/A"}</p>
          </div>
          <p><strong>*** REMARK: Each registration is valid for one individual.</strong></p>
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
  
        <div className="program-footer">
          <div className="footer-detail">
            <img 
              src="\images\Picklesquad_image\program_listing3.png" 
              alt="Pricing Icon" 
              className="footer-image-icon"
            />
            <span className="footer-text">
              <strong>HOST:</strong> <br /> {program.coach?.name || "N/A"}
            </span>
          </div>
          <div className="footer-detail">
            <img 
              src="\images\Picklesquad_image\program_listing.png" 
              alt="Pricing Icon" 
              className="footer-image-icon"
            />
            <div className="footer-text">
              <strong>PRICING:</strong>
              <div>{program.sessions || "1 Session"}</div>
            </div>
          </div>
          <div className="footer-detail">
            <span className="footer-price">RM {program.price?.toFixed(2) || "0.00"}</span>
          </div>
          <button className="program-button" onClick={handleBooking}>
            Book Now
          </button>
        </div>
      </div>
  
      <div className="event-dates-container">
        <div className="event-header">
          <h2>Event Dates</h2>
          <a href="/program" className="view-all-link">View All</a>
        </div>
        <div className="carousel">
        <button
          className="scroll-btn left-btn"
          onClick={handlePrev}
          disabled={currentPage === 1}
        >
          &#9664;
        </button>
          <div className="carousel-items" ref={scrollRef}>
            {paginatedEvents.map((event, index) => (
              <div key={index} className="event-card">
                <div className="event-icon">
                  <img src="/images/profile/calendar.png" alt="Calendar" />
                </div>
                <div className="event-details">
                  <h4>{event.name}</h4>
                  <p className="event-date">
                    {new Date(event.startTime).toUTCString().slice(0, 16)}{" "}
                    {new Date(event.startTime).toUTCString().slice(17, 22)}-
                    {new Date(event.endTime).toUTCString().slice(17, 22)}
                  </p>
                  <p className="event-coach">coach {event.coach?.name || "N/A"}</p>
                  <p className="event-status open">
                  <img 
                    src="\images\Picklesquad_image\program_listing2.png" 
                    alt="Open Icon" 
                    className="status-icon" 
                  />
                  OPEN
                </p>
                </div>
              </div>
            ))}
          </div>
          <button
          className="scroll-btn right-btn"
          onClick={handleNext}
          disabled={startIndex + eventsPerPage >= programData.length}
          >
            &#9654;
        </button>
        </div>
      </div>
    </>
  );  
};

export default ProgramDetailsForm;
