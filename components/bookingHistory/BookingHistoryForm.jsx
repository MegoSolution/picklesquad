import { useState, useEffect } from "react";

const BookingHistoryForm = () => {
  const [viewMode, setViewMode] = useState("upcoming"); // "upcoming" or "history"
  const [bookings, setBookings] = useState([]);

  const BASE_URL = 'http://localhost:3000/v1';

  // Fetch bookings based on view mode
  const fetchBookings = (mode) => {
    const BEARER_TOKEN = JSON.parse(localStorage.getItem('tokens')).access.token;

    fetch(`${BASE_URL}/bookings?mode=${mode}`, {
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
        setBookings(data.results || []); // Set bookings from API response
      })
      .catch((error) => console.error("Error fetching bookings:", error));
  };

  // Fetch bookings whenever the view mode changes
  useEffect(() => {
    fetchBookings(viewMode);
  }, [viewMode]);

  const toggleViewMode = (mode) => {
    setViewMode(mode); // Update the view mode
  };

  return (
    <div className="booking-container">
      <h3>Picklesquad</h3>
      <hr className="divider" />

      {/* Toggle Buttons */}
      <div className="toggle-container">
        <button
          className={`toggle-button ${viewMode === "upcoming" ? "selected" : ""}`}
          onClick={() => toggleViewMode("upcoming")}
        >
          Upcoming Bookings
        </button>
        <button
          className={`toggle-button ${viewMode === "history" ? "selected" : ""}`}
          onClick={() => toggleViewMode("history")}
        >
          Booking History
        </button>
      </div>

      {/* Booking List */}
      <div className="bookings-list">
        {bookings.length > 0 ? (
          bookings.map((booking) => (
            <div key={booking._id} className="booking-item">
              <h4>{booking.court.name || "Court Name Unavailable"}</h4>
              <p>
                <strong>Date:</strong> {new Date(booking.date).toLocaleDateString()} <br />
                <strong>Time:</strong> {booking.startTime} - {booking.endTime} <br />
                <strong>Status:</strong> {booking.status}
              </p>
              <div className="booking-item-footer">
                <p>
                  <strong>Total Price:</strong> RM{booking.totalCost}
                </p>

                {/* Conditional rendering based on viewMode */}
                {viewMode === "upcoming" ? (
                  <div className="options-container">
                    <button className="options-button">⋮</button> {/* Vertical ... */}
                    <div className="dropdown-menu">
                      <button onClick={() => console.log("View Details")}>View Details</button>
                      <button onClick={() => console.log("Cancel Order")}>Cancel Order</button>
                      <button onClick={() => console.log("Transfer Order")}>Transfer Order</button>
                    </div>
                  </div>
                ) : (
                  <a
                  href={`/booking-history/${booking._id}`}
                  className="view-history-link"
                >
                  View Details
                </a>
                )}
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
