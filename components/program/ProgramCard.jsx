import Link from "next/link";
import { useState } from "react";

const ProgramCard = ({ data }) => {
  const { id, name, description, startTime, endTime, price, court, coach } = data;

  const adjustedStartTime = new Date(new Date(startTime).getTime() - 8 * 60 * 60 * 1000);
  const adjustedEndTime = new Date(new Date(endTime).getTime() - 8 * 60 * 60 * 1000);

  const handleBooking = async () => {

    try {
      const response = await fetch("/api/program", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          programId: id,
          price,
        }),
      });

      if (!response.ok) {
        throw new Error("Program Booking failed. Please try again.");
      }

      const data = await response.json();
      console.log('Program Booking created:', data);
      alert(data.message);  
    } catch (error) {
      console.error('Error creating booking:', error);
    } 
  };

  return (
    <div className="program-single">
      <div className="program__content">
        <h5>
        <Link href={`/program-details/${id}`} title="View Details">
            {name}
          </Link>
        </h5>
        <div className="program__content-meta">
          <p>
            <i className="fa-solid fa-calendar-week"></i> Start:{" "}
            {adjustedStartTime.toLocaleString()}
          </p>
          <p>
            <i className="fa-solid fa-calendar-week"></i> End:{" "}
            {adjustedEndTime.toLocaleString()}
          </p>
          <p>
            <i className="fa-solid fa-map-marker-alt"></i> Court:{" "}
            {court?.name || "N/A"}
          </p>
          <p>
            <i className="fa-solid fa-user"></i> Coach: {coach?.name || "N/A"}
          </p>
          <p>
            <i className="fa-solid fa-dollar-sign"></i> Price: RM {price}
          </p>
        </div>
        <p className="secondary-text">{description}</p>
      </div>
      <div className="program-buttons">
        <Link
          href={`/program-details/${id}`}
          title="View Details"
          className="cmn-button cmn-button--secondary"
        >
          View Details
        </Link>
        <button
          onClick={handleBooking}
          className="cmn-button"
        >
          Proceed to Payment
        </button>
      </div>
    </div>
  );
};

export default ProgramCard;
