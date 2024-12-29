import { useState, useEffect } from 'react';
import { BASE_URL } from '../../../utils/constants';

const BookingHistoryForm = () => {
  const [viewMode, setViewMode] = useState('upcoming'); // "upcoming" or "history"
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
        setBookings(data.results || []); // Set bookings from API response
      })
      .catch((error) => console.error('Error fetching bookings:', error));
  };

  // Fetch bookings whenever the view mode changes
  useEffect(() => {
    fetchBookings(viewMode);
  }, [viewMode]);

  const toggleViewMode = (mode) => {
    setViewMode(mode); // Update the view mode
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
    <div className="booking-container">
      <h3>Picklesquad</h3>
      <hr className="divider" />

      {/* Toggle Buttons */}
      <div className="toggle-container">
        <button
          className={`toggle-button ${
            viewMode === 'upcoming' ? 'selected' : ''
          }`}
          onClick={() => toggleViewMode('upcoming')}
        >
          Upcoming Bookings
        </button>
        <button
          className={`toggle-button ${
            viewMode === 'history' ? 'selected' : ''
          }`}
          onClick={() => toggleViewMode('history')}
        >
          Booking History
        </button>
      </div>

      {/* Booking List */}
      <div className="bookings-list">
        {bookings.length > 0 ? (
          bookings.map((booking) => (
            <div key={booking._id} className="booking-item">
              <h4>{booking.court.name || 'Court Name Unavailable'}</h4>
              <p>
                <strong>Date:</strong>{' '}
                {new Date(booking.date).toLocaleDateString()} <br />
                <strong>Time:</strong> {booking.startTime} - {booking.endTime}{' '}
                <br />
                <strong>Status:</strong> {booking.status}
              </p>
              <div className="booking-item-footer">
                <p>
                  <strong>Total Price:</strong> RM{booking.totalCost}
                </p>

                {/* Conditional rendering based on viewMode */}
                {viewMode === 'upcoming' ? (
                  <div className="options-container">
                    <button className="options-button">⋮</button>{' '}
                    {/* Vertical ... */}
                    <div className="dropdown-menu">
                      <button onClick={() => handleViewDetails(booking)}>
                        View Details
                      </button>
                      <button onClick={() => console.log('Cancel Order')}>
                        Cancel Order
                      </button>
                      <button onClick={() => console.log('Transfer Order')}>
                        Transfer Order
                      </button>
                    </div>
                  </div>
                ) : (
                  <a
                    onClick={() => handleViewDetails(booking)}
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
