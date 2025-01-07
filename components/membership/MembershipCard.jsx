import { useRouter } from 'next/router';
import { useState } from 'react';

const MembershipCard = ({ data }) => {
  const [selected, setSelected] = useState(false);
  const router = useRouter();

  const handleSelect = () => {
    setSelected(true);
    router.push(`/membershipdetails?duration=${data.prices[0].duration}`);
  };

  const getDurationLabel = (months) => {
    switch (months) {
      case 1:
        return 'Monthly';
      case 3:
        return 'Quarterly';
      case 6:
        return 'Half Yearly';
      case 12:
        return 'Annually';
      case 24:
        return 'Bi-Annually';
      case 36:
        return 'Tri-Annually';
      default:
        if (months >= 12) {
          const years = Math.floor(months / 12);
          return `${years} Years`;
        }
        return `${months} Months`;
    }
  };

  return (
    <div className={`pricing-item ${selected ? 'selected' : ''}`}>
      <div className="pricing-item__header">
        <h4 className="pricing-item__title">{data.membershipType}</h4>
        <div className="pricing-item__price">
          <h3>
            RM {data.prices[0].price}
            <span>/{getDurationLabel(data.prices[0].duration)}</span>
          </h3>
        </div>
      </div>
      <div className="pricing-item__body">
        <ul className="pricing-item__list">
          <li>Advance Booking: {data.advanceBookingDays} days</li>
          {data.freeGifts?.map((gift, index) => (
            <li key={index}>{gift}</li>
          ))}
          <li>{data.prices[0].description}</li>
        </ul>
      </div>
      <div className="pricing-item__footer">
        <button 
          className="button button--effect"
          onClick={handleSelect}
        >
          Get Membership
        </button>
      </div>
    </div>
  );
};

export default MembershipCard; 