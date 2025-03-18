import { useState, useEffect } from 'react';
import { BASE_URL } from '../../utils/constants';

const BookingHistoryForm = () => {
  const [viewMode, setViewMode] = useState('all'); // Changed default to 'all'
  const [bookings, setBookings] = useState([]);
  const [selectedBooking, setSelectedBooking] = useState(null); // Store selected booking for modal
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal vis
  // Add pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const ITEMS_PER_PAGE = 10;

  // Fetch bookings based on view mode and page
  const fetchBookings = (mode, page) => {
    const BEARER_TOKEN = JSON.parse(localStorage.getItem('tokens')).access
      .token;

    const url = mode 
      ? `${BASE_URL}/bookings/user?mode=${mode}&page=${page}&limit=${ITEMS_PER_PAGE}`
      : `${BASE_URL}/bookings/user?page=${page}&limit=${ITEMS_PER_PAGE}`;

    fetch(url, {
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
        setTotalResults(data.totalResults || 0);
        setTotalPages(data.totalPages || 1);
      })
      .catch((error) => console.error('Error fetching bookings:', error));
  };

  useEffect(() => {
    // Reset to page 1 when switching modes
    setCurrentPage(1);
    fetchBookings(viewMode, 1);
  }, [viewMode]);

  useEffect(() => {
    // Only fetch when page changes (not on mode change)
    if (currentPage !== 1) {
      fetchBookings(viewMode, currentPage);
    }
  }, [currentPage]);

  const toggleViewMode = (mode) => {
    if (mode !== viewMode) {
      setViewMode(mode);
    }
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

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  // Add Pagination Component
  const Pagination = () => {
    // Don't show pagination if there's only one page or no results
    if (totalResults <= ITEMS_PER_PAGE) return null;

    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`pagination-button ${currentPage === i ? 'active' : ''}`}
        >
          {i}
        </button>
      );
    }

    return (
      <div className="pagination">
        <button
          className="pagination-button"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        {pages}
        <button
          className="pagination-button"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    );
  };

  return (
    <div className="booking-history-container">
      <h3 className="section-title">Booking History</h3>

      {/* Tabs for desktop */}
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

      {/* Dropdown for mobile */}
      <div className="filter-dropdown">
        <select 
          value={viewMode}
          onChange={(e) => toggleViewMode(e.target.value)}
        >
          <option value="all">ALL</option>
          <option value="upcoming">Upcoming</option>
          <option value="completed">Completed</option>
        </select>
      </div>

      {/* Booking List */}
      <div className="bookings-list">
        {bookings.length > 0 ? (
          bookings.map((booking) => (
            <div key={booking._id} className="booking-item">
              <div className="date-badge">
                <span>{new Date(booking.date).toLocaleString("en-US", { month: "short", }).toUpperCase()}</span>
                <span>{new Date(booking.date).getDate()}</span>
                <span>{new Date(booking.date).toLocaleString("en-US", { weekday: "short", }).toUpperCase()}</span>
              </div>
              <div className="booking-details">
                <div className="booking-info">
                  <p>
                    <strong>Booking ID:</strong><br /> {booking._id}
                  </p>
                  <p>
                    <strong>Activities:</strong><br />{booking.court?.name || "Not Specified"}, {booking.court.location?.name || "Not Specified"}
                  </p>
                  <p>
                    <strong>Times:</strong><br /> {booking.startTime} - {booking.endTime}
                  </p>
                  <p>
                    <strong>Paid:</strong><br /> RM{booking.totalCost}
                  </p>
                  <p className={`status ${booking.status.toLowerCase()}`}>
                    {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                  </p>
                  <button 
                    className="view-details-button"
                    onClick={() => handleViewDetails(booking)}
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="no-bookings-message">
            {viewMode === 'upcoming'
              ? 'You have no upcoming bookings.'
              : viewMode === 'completed'
              ? 'You have no completed bookings.'
              : 'You have no bookings.'}
          </p>
        )}
      </div>
      {/* Only show pagination if there are enough results */}
      {totalResults > ITEMS_PER_PAGE && <Pagination />}
      {/* Modal for Viewing Details */}
      {isModalOpen && selectedBooking && (
        <div className="modal">
          <div className="modal-content">
            <button className="close-button" onClick={handleCloseModal}>
              &times;
            </button>
            <h4>Booking Details</h4>
            <p>
              <strong>Court:</strong> {selectedBooking.court?.name || 'Not Specified'} <br />
              <strong>Location:</strong> {selectedBooking.court?.location?.name || 'Not Specified'} <br />
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
                    {selectedBooking.equipments_rented.map((equipment, index) => (
                      <li key={index}>
                        {equipment.count} x {equipment.id?.name || 'Equipment'}
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
