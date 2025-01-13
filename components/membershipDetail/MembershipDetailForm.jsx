import { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import {
  BASE_URL,
} from '../../utils/constants';

const MembershipDetailForm = () => {
  const [membership, setMembership] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();
  const { duration } = router.query;

  useEffect(() => {
    const fetchMembershipDetail = async () => {
      if (!duration) return;
      
      try {
        setLoading(true);
        setError(null);
        
        const BEARER_TOKEN = JSON.parse(localStorage.getItem('tokens')).access.token;
        const response = await fetch(`${BASE_URL}/memberbenefitextra/duration/${duration}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${BEARER_TOKEN}`,
            'Content-Type': 'application/json'
          }
        });

        if (!response.ok) {
          throw new Error('Failed to fetch membership details');
        }

        const data = await response.json();
        if (!data || data.length === 0) {
          throw new Error('No membership found for this duration');
        }

        setMembership(data[0]); // Take the first membership since we expect only one
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMembershipDetail();
  }, [duration]);

  const handlePayment = async () => {
    try {
      if (!membership) return;
      
      const paymentData = {
        membershipType: membership.membershipType,
        duration: membership.duration,
        price: membership.price,
      };

      console.log('Payment Data:', paymentData);
      alert('Processing payment for: ' + 
        `${membership.membershipType} - ${membership.duration} months` +
        ` (RM ${membership.price})`
      );
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

      <div className="payment-section">
        <h3>Payment Details</h3>
        <div className="payment-methods">
          <button 
            className="payment-button"
            onClick={handlePayment}
          >
            Join Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default MembershipDetailForm; 