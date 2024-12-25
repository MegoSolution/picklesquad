import React from "react";
import Image from "next/image";
import cardImage from "/public/images/Picklesquad_image/vip_premium_card.png";
import { useSelector } from "react-redux";

const ECardDisplay = () => {
  const currentUser = useSelector(state => state.user);
  
  return (
    <div className="ecard-display">
      <h2 className="ecard-title">Your VIP Membership Card</h2>
      <div className="ecard-container">
        <Image
          src={cardImage}
          alt="VIP Premium Card"
          className="ecard-image"
          layout="responsive" 
        />
        <div className="ecard-overlay">
          <p className="ecard-name">{currentUser.user.name}</p>
          <p className="ecard-member-no">{currentUser.user._id}</p> 
          <p className="ecard-valid-thru">12/25</p> 
        </div>
      </div>
    </div>
  );
};

export default ECardDisplay;
