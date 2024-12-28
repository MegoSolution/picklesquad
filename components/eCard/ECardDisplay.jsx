import { useEffect, useState, React } from "react";
import Image from "next/image";
import cardImage from "/public/images/Picklesquad_image/vip_premium_card.png";
import { useSelector } from "react-redux";

const ECardDisplay = () => {
  const [membership, setMembership] = useState(null);
  const [error, setError] = useState(null);
  const currentUser = useSelector(state => state.user);
  const accessToken = useSelector((state) => state.accessToken);
  const memberId = useSelector((state) => state.user?.user?.membership || null);

  useEffect(() => {
    if (!memberId) return; 
 
    fetch(`/api/eCard?id=${memberId}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`, 
      },
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch membership details");
      }
      return response.json();
    })
    .then((data) => {
      // Format expiryDate to YYYY-MM-DD
      const formattedData = {
        ...data,
        expiryDate: new Intl.DateTimeFormat("en-CA", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }).format(new Date(data.expiryDate)),
      };
      setMembership(formattedData);
    })
    .catch((error) => {
      console.error("Error fetching membership details:", error);
      setError("Failed to load membership details.");
    });
  }, [memberId]); 
  
  
  return (
    <div className="ecard-display">
      <h2 className="ecard-title">Your VIP Membership Card</h2>
      <div className="ecard-container">
      {error && <p className="error-message">{error}</p>}
        <Image
          src={cardImage}
          alt="VIP Premium Card"
          className="ecard-image"
          layout="responsive" 
        />
        <div className="ecard-overlay">
          <p className="ecard-name">{currentUser.user.name}</p>
          <p className="ecard-member-no">{membership?.membershipId}</p> 
          <p className="ecard-valid-thru">{membership?.expiryDate}</p> 
        </div>
      </div>
    </div>
  );
};

export default ECardDisplay;
