import React, { useEffect, useState } from "react";
import Banner from "@/components/ecard/Banner";
import ECardDisplay from "@/components/ecard/ECardDisplay";
import withAuth from "@/pages/withAuth";
import { useSelector } from "react-redux";

const PremiumECard = () => {
  const currentUser = useSelector((state) => state.user);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Get the user role with a fallback
  const userRole = currentUser?.user?.role || "guest";

  if (!isClient) {
    return null; 
  }

  if (userRole !== "premiumUser") {
    return (
      <div className="premium-ecard-container">
        <Banner />
        <h2>Access Denied</h2>
        <p>You must be a Premium User to view this page.</p>
      </div>
    );
  }

  return (
    <div className="premium-ecard-container">
      <Banner />
      <ECardDisplay />
    </div>
  );
};

export default withAuth(PremiumECard);