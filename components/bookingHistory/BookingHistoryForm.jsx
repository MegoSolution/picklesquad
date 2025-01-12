import { useState, useEffect } from 'react';
import { BASE_URL } from '../../utils/constants';

const BookingHistoryForm = () => {
  const [viewMode, setViewMode] = useState('all'); // Default to "all"
  const [bookings, setBookings] = useState([]);
  const [selectedBooking, setSelectedBooking] = useState(null); // Store selected booking for modal
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal vis

  // Fetch bookings based on view mode
  const fetchBookings = (mode) => {
    const BEARER_TOKEN = JSON.parse(localStorage.getItem('tokens')).access
      .token;

    fetch(`${BASE_URL}/bookings?mode=${mode}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${BEARER_TOKEN}`,
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch bookings');
        }
        return response.json();
      })
      .then((data) => {
        setBookings(data.results || []);
      })
      .catch((error) => console.error('Error fetching bookings:', error));
  };

  useEffect(() => {
    fetchBookings(viewMode);
  }, [viewMode]);

  const toggleViewMode = (mode) => {
    setViewMode(mode);
  };

  // Open modal and set selected booking
  const handleViewDetails = (booking) => {
    setSelectedBooking(booking);
    setIsModalOpen(true);
  };

  // Close modal
  const handleCloseModal = () => {
    setSelectedBooking(null);
    setIsModalOpen(false);
  };

  return (
    <div className="booking-history-container">
      <h3 className="section-title">Booking History</h3>

      {/* Tabs */}
      <div className="tabs-container">
        {['all', 'upcoming', 'completed'].map((tab) => (
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
            {viewMode === 'upcoming'
              ? 'You have no upcoming bookings.'
              : 'You have no booking history.'}
          </p>
        )}
      </div>
      {/* Modal for Viewing Details */}
      {isModalOpen && selectedBooking && (
        <div className="modal">
          <div className="modal-content">
            <button className="close-button" onClick={handleCloseModal}>
              &times;
            </button>
            <h4>Booking Details</h4>
            <p>
              <strong>Court:</strong> {selectedBooking.court.name} <br />
              <strong>Date:</strong>{' '}
              {new Date(selectedBooking.date).toLocaleDateString()} <br />
              <strong>Time:</strong> {selectedBooking.startTime} -{' '}
              {selectedBooking.endTime} <br />
              <strong>Status:</strong> {selectedBooking.status} <br />
              <strong>Total Price:</strong> RM{selectedBooking.totalCost}
            </p>
            {selectedBooking.equipments_rented &&
              selectedBooking.equipments_rented.length > 0 && (
                <>
                  <h5>Equipment Rented</h5>
                  <ul>
                    {selectedBooking.equipments_rented.map((equipment) => (
                      <li key={equipment.id}>
                        {equipment.count} x {equipment.id.name}{' '}
                        {/* Replace `id` with name if available */}
                      </li>
                    ))}
                  </ul>
                </>
              )}
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingHistoryForm;
