import { useState, useEffect } from "react";
import { BASE_URL } from "../../utils/constants";

const BookingHistoryForm = () => {
  const [viewMode, setViewMode] = useState("all"); // Default to "all"
  const [bookings, setBookings] = useState([]);

  const fetchBookings = (mode) => {
    const BEARER_TOKEN = JSON.parse(localStorage.getItem("tokens")).access.token;

    const modeParam =
      mode === "all" ? "" : `mode=${mode === "completed" ? "history" : mode}`;
    const url = `${BASE_URL}/bookings${modeParam ? `?${modeParam}` : ""}`;

    fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${BEARER_TOKEN}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch bookings");
        }
        return response.json();
      })
      .then((data) => {
        setBookings(data.results || []);
      })
      .catch((error) => console.error("Error fetching bookings:", error));
  };

  useEffect(() => {
    fetchBookings(viewMode);
  }, [viewMode]);

  const toggleViewMode = (mode) => {
    setViewMode(mode);
  };

  return (
    <div className="booking-history-container">
      <h3 className="section-title">Booking History</h3>

      {/* Tabs */}
      <div className="tabs-container">
        {["all", "upcoming", "completed"].map((tab) => (
          <button
            key={tab}
            className={`tab-button ${viewMode === tab ? "active" : ""}`}
            onClick={() => toggleViewMode(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Booking List */}
      <div className="bookings-list">
        {bookings.length > 0 ? (
          bookings.map((booking) => (
            <div key={booking._id} className="booking-item">
              <div className="date-badge">
                <span>
                  {new Date(booking.date).toLocaleString("en-US", {
                    weekday: "short",
                  })}
                </span>
                <span>
                  {new Date(booking.date).toLocaleDateString("en-US", {
                    month: "short",
                  })}
                </span>
                <span>{new Date(booking.date).getDate()}</span>
              </div>
              <div className="booking-details">
                <p>
                  <strong>Booking ID:</strong> {booking._id}
                </p>
                <p>
                  <strong>Activity:</strong>{" "}
                  {booking.activity || "Not Specified"}
                </p>
                <p>
                  <strong>Time:</strong> {booking.startTime} -{" "}
                  {booking.endTime}
                </p>
                <p>
                  <strong>Paid:</strong> RM{booking.totalCost}
                </p>
                <p className={`status ${booking.status.toLowerCase()}`}>
                  {booking.status.charAt(0).toUpperCase() +
                    booking.status.slice(1)}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className="no-bookings-message">
            {viewMode === "upcoming"
              ? "You have no upcoming bookings."
              : "You have no booking history."}
          </p>
        )}
      </div>
    </div>
  );
};

export default BookingHistoryForm;
