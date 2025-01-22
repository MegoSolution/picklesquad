import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import {
  BASE_URL,
  SP_MERCHANT_ID,
  SP_RECURRING_ID,
  SP_RECURRING_URL,
  SP_SECRET_KEY,
} from '../../utils/constants';
import toast, { Toaster } from 'react-hot-toast';
import { calculateChecksumRecurring } from '@/utils/checksum';
import { flushSync } from 'react-dom';

const MembershipDetailForm = () => {
  const formRef = useRef();

  const [membership, setMembership] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();
  const { duration } = router.query;

  const [subscriptionRes, setSubscriptionRes] = useState(null);

  const [formData, setFormData] = useState({
    orderId: '',
    recurringId: SP_RECURRING_ID,
    checksum: null,
  });

  const handlePayNow = () => {
    if (formRef.current && formData.checksum) {
      formRef.current.submit();
    } else {
      alert('Please fill in all the required fields');
    }
  };

  const buyMembership = async () => {
    try {
      if (!membership) return;

      console.log(membership);

      const BEARER_TOKEN = JSON.parse(localStorage.getItem('tokens')).access
        .token;
      const response = await fetch(`${BASE_URL}/membership`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${BEARER_TOKEN}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          membershipId: membership.membershipId,
          membershipType: membership.membershipType,
          duration: membership.duration,
          paymentStatus: 'pending',
          status: 'inactive',
          joinDate: new Date().toISOString(),
          expiryDate: new Date(
            new Date().getTime() +
              membership.duration * 30 * 24 * 60 * 60 * 1000
          ).toISOString(),
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to buy membership');
      }

      const resData = await response.json();
      toast.success('Booking Successful, Redirecting to Payment...');
      flushSync(() => setSubscriptionRes(resData));
    } catch (err) {
      setError(err.message);
      toast.error('Failed to buy membership');
    }
  };

  useEffect(() => {
    const fetchMembershipDetail = async () => {
      if (!duration) return;

      try {
        setLoading(true);
        setError(null);

        const BEARER_TOKEN = JSON.parse(localStorage.getItem('tokens')).access
          .token;
        const response = await fetch(
          `${BASE_URL}/memberbenefitextra/duration/${duration}`,
          {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${BEARER_TOKEN}`,
              'Content-Type': 'application/json',
            },
          }
        );

        if (!response.ok) {
          throw new Error('Failed to fetch membership details');
        }

        const data = await response.json();
        if (!data || data.length === 0) {
          throw new Error('No membership found for this duration');
        }

        console.log(data);

        setMembership(data[0]); // Take the first membership since we expect only one
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMembershipDetail();
  }, [duration]);

  useEffect(() => {
    if (!subscriptionRes || !subscriptionRes.payment) {
      return;
    }

    if (!subscriptionRes.payment.mandate_reference) {
      alert('Failed to create booking, no mandate reference');
      return;
    }

    const orderId = subscriptionRes.payment.mandate_reference;

    flushSync(() =>
      setFormData((prevFormData) => {
        return {
          ...prevFormData,
          orderId,
          checksum: calculateChecksumRecurring({
            merchantId: SP_MERCHANT_ID,
            secretKey: SP_SECRET_KEY,
            orderId,
          }),
        };
      })
    );
  }, [subscriptionRes]);

  useEffect(() => {
    if (formData.checksum) {
      console.log(formData.checksum);
      handlePayNow();
    }
  }, [formData.checksum]);

  const handlePayment = async () => {
    try {
      if (!membership) return;

      await buyMembership();
    } catch (err) {
      setError(err.message);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div className="error">Error: {error}</div>;
  if (!membership) return <div>No membership found</div>;

  return (
    <div className="membership-detail-container">
      <div className="membership-summary">
        <h3>Membership Summary</h3>
        <div className="membership-info">
          <h4>{membership.membershipType}</h4>
          <p className="duration">Duration: {membership.duration} months</p>
          <p className="price">Price: RM {membership.price}</p>
          <div className="benefits">
            <h5>Benefits:</h5>
            <ul>
              <li>Advance Booking: {membership.advanceBookingDays} days</li>
              {membership.freeGifts?.map((gift) => (
                <li key={gift.id}>
                  {gift.name} - {gift.description}
                </li>
              ))}
            </ul>
          </div>
          <div className="description-section">
            <h5>Description:</h5>
            <p className="description">{membership.description}</p>
            <p className="price-description">{membership.priceDescription}</p>
          </div>
        </div>
      </div>

      <form method="post" action={SP_RECURRING_URL} ref={formRef}>
        <input type="hidden" name="order_id" value={formData.orderId} />
        <input type="hidden" name="recurring_id" value={formData.recurringId} />
        <input type="hidden" name="name" value={''} />
        <input type="hidden" name="email" value={''} />
        <input type="hidden" name="phone" value={''} />
        <input type="hidden" name="hash" value={formData.checksum} />
      </form>

      <div className="payment-section">
        <div className="payment-methods">
          <button className="payment-button" onClick={handlePayment}>
            Join Now
          </button>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default MembershipDetailForm;
