import { useRouter } from 'next/router';
import { useState, useEffect, useRef } from 'react';
import { BASE_URL, SP_SECRET_KEY, SP_URL } from '../../utils/constants';
import { calculateChecksum } from '@/utils/checksum';
import { generateDates, genOrderId } from '@/utils/bookings';
import { flushSync } from 'react-dom';
import toast, { Toaster } from 'react-hot-toast';
import CourtGalleryModal from './CourtGalleryModal';

const BookingForm = () => {
  const formRef = useRef();

  const [localStorageDetails, setLocalStorageDetails] = useState({
    user: null,
    tokens: null,
    membership: null,
  });

  const [selectedDate, setSelectedDate] = useState(null);
  const [membership, setMembership] = useState(false);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState([]);
  const [selectedStartTime, setSelectedStartTime] = useState(null);
  const [selectedEndTime, setSelectedEndTime] = useState(null);
  const [availableTimes, setAvailableTimes] = useState([]);
  const [availableCourts, setAvailableCourts] = useState([]);
  const [selectedCourt, setSelectedCourt] = useState(null);
  const [peakHours, setPeakHours] = useState([]);
  const [equipment, setEquipment] = useState([]); // State to store equipment data
  const [quantities, setQuantities] = useState({});
  const [equipmentTotals, setEquipmentTotals] = useState([]); // Array to store equipment ID and total price pairs
  const router = useRouter();
  const { locationId } = router.query; // Get locationId from query parameters
  const [bookingRes, setBookingRes] = useState(null);
  const [showGallery, setShowGallery] = useState(false);

  const [formData, setFormData] = useState({
    amount: null,
    orderId: '',
    ref1: '',
    ref2: '',
    checksum: null,
  });

  // Add new state for advance booking days
  const [advanceBookingDays, setAdvanceBookingDays] = useState(7); // Default to 7 days as fallback

  // Add new function to fetch member benefits
  const fetchMemberBenefits = async () => {
    try {
      const BEARER_TOKEN = JSON.parse(localStorage.getItem('tokens'))?.access
        .token;

      const response = await fetch(`${BASE_URL}/memberBenefitExtra/basic`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${BEARER_TOKEN}`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch member benefits');
      }

      const data = await response.json();
      if (data.advanceBookingDays) {
        setAdvanceBookingDays(data.advanceBookingDays);
      }
    } catch (error) {
      console.error('Error fetching member benefits:', error);
      // Keep default 7 days if API fails
    }
  };

  // Update the generateDates call to use the dynamic advanceBookingDays
  const dates = generateDates(advanceBookingDays + 7);
  const today = dates[0].value;

  // Fetch available times for the selected date
  const fetchAvailableTimes = (date) => {
    fetch(
      `${BASE_URL}/bookings/availability/times?date=${date}&locationId=${locationId}`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${localStorageDetails.BEARER_TOKEN}`,
          'Content-Type': 'application/json',
        },
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch available times');
        }
        return response.json();
      })
      .then((data) => {
        setAvailableTimes(data.availableTimes || []);
      })
      .catch((error) =>
        console.error('Error fetching available times:', error)
      );
  };

  // Fetch available courts for the selected date and time
  const fetchAvailableCourts = (date, startTime, endTime) => {
    const BEARER_TOKEN = JSON.parse(localStorage.getItem('tokens')).access
      .token;

    fetch(
      `${BASE_URL}/bookings/availability/courts?date=${date}&start_time=${startTime}&end_time=${endTime}&locationId=${locationId}`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${BEARER_TOKEN}`,
          'Content-Type': 'application/json',
        },
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch available courts');
        }
        return response.json();
      })
      .then((data) => {
        setAvailableCourts(
          data.availableCourts.map((court) => ({
            ...court,
            base_rate: court.base_rate || 0,
            peak_hour_rate: court.peak_hour_rate || 0,
          }))
        );
        setPeakHours(data.peakHours || []);
      })
      .catch((error) =>
        console.error('Error fetching available courts:', error)
      );
  };

  const fetchEquipment = () => {
    const BEARER_TOKEN = JSON.parse(localStorage.getItem('tokens')).access
      .token;

    fetch(`${BASE_URL}/equipments`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${BEARER_TOKEN}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch equipment data');
        }
        return response.json();
      })
      .then((data) => {
        setEquipment(data.results);
      })
      .catch((error) => console.error('Error fetching equipment:', error));
  };

  // Handle date selection
  const handleDateChange = (date) => {
    setSelectedDate(date);
    setSelectedTimeSlot([]); // Clear time slots on date change
    setSelectedStartTime(null); // Reset time and court when date changes
    setSelectedEndTime(null); // Reset time and court when date changes
    setSelectedCourt(null);
    setAvailableCourts([]);
    fetchAvailableTimes(date);
  };

  const handleTimeChange = (startTime, endTime, startPeriod, endPeriod) => {
    const fullTime = `${startTime} ${startPeriod} - ${endTime} ${endPeriod}`;
    const formattedStartTime = formatToTime24(
      parseInt(startTime, 10),
      startPeriod
    );
    const formattedEndTime = formatToTime24(parseInt(endTime, 10), endPeriod);

    // If the slot is already selected, remove it
    if (selectedTimeSlot.includes(fullTime)) {
      const updatedSlots = selectedTimeSlot.filter((slot) => slot !== fullTime);

      // Ensure the remaining slots are sequential
      for (let i = 1; i < updatedSlots.length; i++) {
        const [, , prevEnd, prevPeriod] = updatedSlots[i - 1].split(/[ -]+/);
        const [currStart, currStartPeriod] = updatedSlots[i].split(/[ -]+/);
        if (
          formatToTime24(prevEnd, prevPeriod) !==
          formatToTime24(currStart, currStartPeriod)
        ) {
          alert('Deselecting this slot will break the sequential order.');
          return;
        }
      }

      // Update the time slots and overall start and end times
      setSelectedTimeSlot(updatedSlots);

      if (updatedSlots.length > 0) {
        const [firstStart, firstPeriod] = updatedSlots[0].split(/[ -]+/);
        const [, , lastEnd, lastPeriod] =
          updatedSlots[updatedSlots.length - 1].split(/[ -]+/);

        setSelectedStartTime(formatToTime24(firstStart, firstPeriod));
        setSelectedEndTime(formatToTime24(lastEnd, lastPeriod)); // React's state update
      } else {
        setSelectedStartTime(null);
        setSelectedEndTime(null);
      }
      return;
    }

    // If no slots are selected, add the first time slot
    if (selectedTimeSlot.length === 0) {
      setSelectedTimeSlot([fullTime]);
      setSelectedStartTime(formattedStartTime);
      setSelectedEndTime(formattedEndTime);
      return;
    }

    // Extract the first and last selected time slots
    const firstSlot = selectedTimeSlot[0];
    const lastSlot = selectedTimeSlot[selectedTimeSlot.length - 1];
    const [firstStart, firstPeriod] = firstSlot.split(/[ -]+/);
    const [, , lastEnd, lastPeriod] = lastSlot.split(/[ -]+/);

    // Check if the new slot is sequential to the first or last slot
    const isSequentialToStart =
      formatToTime24(endTime, endPeriod) ===
      formatToTime24(firstStart, firstPeriod);
    const isSequentialToEnd =
      formatToTime24(startTime, startPeriod) ===
      formatToTime24(lastEnd, lastPeriod);

    if (isSequentialToStart) {
      setSelectedTimeSlot([fullTime, ...selectedTimeSlot]);
      setSelectedStartTime(formattedStartTime); // Update overall start time
    } else if (isSequentialToEnd) {
      setSelectedTimeSlot([...selectedTimeSlot, fullTime]);
      setSelectedEndTime(formattedEndTime); // Update overall end time
    } else {
      alert('Please select sequential time slots.');
    }
  };

  const handleQuantityChange = (id, delta) => {
    setQuantities((prevQuantities) => {
      const newQuantities = {
        ...prevQuantities,
        [id]: Math.max(0, (prevQuantities[id] || 0) + delta),
      };

      // Calculate total price for the updated item
      const equipmentItem = equipment.find((item) => item._id === id);
      const price =
        membership && equipmentItem.discountedCost
          ? equipmentItem.discountedCost
          : equipmentItem.rent_per_cost;
      const total = (newQuantities[id] || 0) * price;

      // Update the totals array
      setEquipmentTotals((prevTotals) => {
        const updatedTotals = prevTotals.filter((item) => item.id !== id); // Remove old total for this ID
        return [...updatedTotals, { id, total }]; // Add the updated total
      });

      return newQuantities;
    });
  };

  const calculateTotal = () => {
    let total = 0;

    if (selectedCourt && selectedTimeSlot.length > 0) {
      // Find the selected court details
      const court = availableCourts.find(
        (court) => court.court_id === selectedCourt
      );

      if (court) {
        const baseRate =
          membership && court.discounted_base_rate
            ? court.discounted_base_rate
            : court.base_rate || 0;
        const peakRate =
          membership && court.discounted_peaked_rate
            ? court.discounted_peaked_rate
            : court.peak_hour_rate || 0;
        const peakStart = court.peak_hour_start
          ? parseInt(court.peak_hour_start.slice(0, 2), 10)
          : null;
        const peakEnd = court.peak_hour_end
          ? parseInt(court.peak_hour_end.slice(0, 2), 10)
          : null;

        selectedTimeSlot.forEach((slot) => {
          const [start, startPeriod, end, endPeriod] = slot.split(/[- ]+/); // Split by "-" or space
          const startHour = convertTo24HourFormat(
            parseInt(start, 10),
            startPeriod
          );
          const endHour = convertTo24HourFormat(parseInt(end, 10), endPeriod);
          for (let hour = startHour; hour < endHour; hour++) {
            const isPeakHour =
              peakStart !== null &&
              peakEnd !== null &&
              hour >= peakStart &&
              hour < peakEnd;
            total += isPeakHour ? peakRate : baseRate;
          }
        });
      }
    }

    // Add equipment total
    const equipmentTotal = equipmentTotals.reduce(
      (sum, item) => sum + item.total,
      0
    );

    return total + equipmentTotal;
  };

  const convertTo24HourFormat = (hour, period) => {
    if (period === 'PM' && hour !== 12) {
      return hour + 12; // Convert PM to 24-hour format
    } else if (period === 'AM' && hour === 12) {
      return 0; // Convert 12 AM to 0
    }
    return hour; // Return as is for other cases
  };

  const formatToTime24 = (hour, period) => {
    // Convert hour and period to 24-hour format
    let hour24 = parseInt(hour, 10);
    if (period === 'PM' && hour24 !== 12) {
      hour24 += 12; // Convert PM hour to 24-hour format (e.g., 1 PM becomes 13)
    } else if (period === 'AM' && hour24 === 12) {
      hour24 = 0; // Convert 12 AM to 0 hours for midnight
    }

    // Return time as HH:mm string
    return `${hour24.toString().padStart(2, '0')}:00`;
  };

  const reset = () => {
    setSelectedDate(today);
    fetchAvailableTimes(today);
    setSelectedTimeSlot([]);
    setSelectedStartTime(null);
    setSelectedEndTime(null);
    setAvailableTimes([]);
    setAvailableCourts([]);
    setSelectedCourt(null);
    setQuantities({});
  };

  const handlePayNow = () => {
    if (formRef.current && formData.amount && formData.checksum) {
      formRef.current.submit();
    } else {
      alert('Please fill in all the required fields');
    }
  };

  // Handle checkout button click
  const handleCheckout = async () => {
    if (!localStorageDetails.user) {
      alert('Please login to proceed to checkout');
    }

    setFormData((prevFormData) => ({
      ...prevFormData,
      amount: `${Number(calculateTotal()).toFixed(2)}`,
      ref1: new Date(selectedDate).getTime() / 1000,
      ref2: selectedCourt,
      ref3: localStorageDetails.user,
    }));

    const bookingData = {
      user: localStorageDetails.user, // Replace with the actual user ID
      court: selectedCourt,
      date: selectedDate, // Date is stored separately
      startTime: selectedStartTime, // Convert to 24-hour format
      endTime: selectedEndTime,
      totalCost: calculateTotal(),
      status: 'pending',
      equipments_rented: Object.keys(quantities).map((id) => ({
        id,
        count: quantities[id],
      })),
    };

    try {
      const bookingRes = await fetch(`${BASE_URL}/bookings`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${localStorageDetails.BEARER_TOKEN}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingData),
      });

      if (bookingRes.ok) {
        const resData = await bookingRes.json();
        toast.success('Booking Successful, Redirecting to Payment...');
        flushSync(() => setBookingRes(resData));
      } else {
        alert('Failed to create booking');
      }
    } catch (error) {
      console.error('Error creating booking:', error);
      alert('Failed to create booking');
    }
  };

  useEffect(() => {
    if (selectedTimeSlot.length > 0) {
      fetchAvailableCourts(selectedDate, selectedStartTime, selectedEndTime);
    }
  }, [selectedEndTime, selectedStartTime, selectedTimeSlot, selectedDate]);

  useEffect(() => {
    if (localStorage) {
      setSelectedDate(today);
      fetchAvailableTimes(today);
      fetchEquipment();

      const tokens = JSON.parse(localStorage.getItem('tokens'));
      const user = JSON.parse(localStorage.getItem('user'));
      const userId = user._id;

      setLocalStorageDetails({
        user: userId,
        tokens: tokens,
        BEARER_TOKEN: tokens?.access?.token || '',
      });
    }
  }, []);

  useEffect(() => {
    if (!bookingRes || !bookingRes.payment) {
      return;
    }

    if (!bookingRes.payment.mandate_reference) {
      alert('Failed to create booking, no mandate reference');
      return;
    }

    const orderId = bookingRes.payment.mandate_reference;
    const bookingId = bookingRes.id;

    flushSync(() =>
      setFormData((prevFormData) => {
        return {
          ...prevFormData,
          orderId,
          bookingId,
          checksum: calculateChecksum({
            secretKey: SP_SECRET_KEY,
            amount: prevFormData.amount,
            detail: bookingId,
            orderId,
          }),
        };
      })
    );
  }, [bookingRes]);

  useEffect(() => {
    if (formData.checksum) {
      handlePayNow();
    }
  }, [formData.checksum]);

  // Add useEffect to fetch member benefits when component mounts
  useEffect(() => {
    fetchMemberBenefits();
  }, []);

  return (
    <div className="booking-container">
      <h3>Book A Court</h3>
      <hr className="divider" />

      <h4 className="section-title">
        <img src="/images/booking/booking-03.png" alt="Booking" />
        Booking Details
      </h4>

      {/* Select Date Section */}
      <div className="booking-section">
        <h4 className="ms-2">Select Date</h4>
        <div className="centerlized-container">
          <div className="date-container pt-3">
            {dates.map((date, index) => (
              <button
                key={index}
                onClick={() => handleDateChange(date.value)}
                className={`date-button ${
                  selectedDate === date.value ? 'selected' : ''
                }`}
                disabled={
                  !membership && index >= dates.length - advanceBookingDays
                } // Disable the last 7 buttons if no membership
              >
                {date.display}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Select Time Section */}
      <div className="booking-section">
        <h4 className="ms-2">Select Time</h4>
        <div className="centerlized-container">
          {availableTimes.length > 0 ? (
            <div className="time-container pt-3">
              {availableTimes.map((time, index) => (
                <button
                  key={index}
                  onClick={() =>
                    handleTimeChange(
                      time.start,
                      time.end,
                      time.startPeriod,
                      time.endPeriod
                    )
                  }
                  className={`time-button ${
                    selectedTimeSlot.includes(
                      `${time.start} ${time.startPeriod} - ${time.end} ${time.endPeriod}`
                    )
                      ? 'selected'
                      : ''
                  }`}
                >
                  {time.start} - {time.end} {time.endPeriod}
                </button>
              ))}
            </div>
          ) : (
            <p className="no-courts-message">
              No time slots available for the selected date.
            </p>
          )}
        </div>
      </div>

      {/* Select Court Section */}
      <div className="booking-section">
        <div className="court-section-header">
          <h4 className="ms-2">Select Court</h4>
          <a
            className="view-court-link"
            onClick={() => setShowGallery(true)}
            href="#"
          >
            View Court
          </a>
        </div>
        <div className="centerlized-container">
          {selectedStartTime === null ? (
            <p className="no-selected-time-message">
              Please select a start time to view available courts.
            </p>
          ) : availableCourts.length > 0 ? (
            <div className="court-container pt-3">
              {availableCourts.map((court, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedCourt(court.court_id)}
                  className={`court-button ${
                    selectedCourt === court.court_id ? 'selected' : ''
                  }`}
                >
                  {court.court_name}
                </button>
              ))}
            </div>
          ) : (
            <p className="no-courts-message">
              There are no available courts at this time.
            </p>
          )}
        </div>
      </div>

      {/* Equipment Selection Section */}
      <div className="booking-section">
        <h4 className="ms-2">Select Equipment</h4>
        <div className="equipment-container pt-3">
          {equipment.map((item) => (
            <div key={item.id} className="equipment-item">
              <img
                src={item.image || '/images/default.png'}
                alt={item.name}
                className="equipment-image"
              />
              <p className="equipment-name">{item.name}</p>
              <p className="equipment-price">
                Normal Price: RM{item.rent_per_cost} each
              </p>
              <p className="equipment-price">
                Member Price: RM{item.discountedCost} each
              </p>
              <div className="quantity-control">
                <button onClick={() => handleQuantityChange(item._id, -1)}>
                  -
                </button>
                <span>{quantities[item._id] || 0}</span>
                <button onClick={() => handleQuantityChange(item._id, 1)}>
                  +
                </button>
              </div>
              <p className="equipment-total">
                Total: RM
                {(quantities[item._id] || 0) *
                  (membership && item.discountedCost
                    ? item.discountedCost
                    : item.rent_per_cost)}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Display Total Amount */}
      <div className="booking-section">
        <h4>Total Amount: RM{calculateTotal()}</h4>
      </div>

      <form method="post" action={SP_URL} ref={formRef}>
        <input type="hidden" name="detail" value={formData.bookingId} />
        <input type="hidden" name="amount" value={formData.amount} />
        <input type="hidden" name="order_id" value={formData.orderId} />
        <input type="hidden" name="name" value={''} />
        <input type="hidden" name="email" value={''} />
        <input type="hidden" name="phone" value={''} />
        <input type="hidden" name="hash" value={formData.checksum} />
      </form>

      {/* Booking Button */}
      <div className="booking-section">
        <button className="book-now-button" onClick={handleCheckout}>
          Check Out
        </button>
      </div>
      <Toaster />

      {/* Court Gallery Modal */}
      <CourtGalleryModal
        isOpen={showGallery}
        onClose={() => setShowGallery(false)}
        images={[
          '/images/courts/court.jpg',
          '/images/courts/court1.jpg',
          '/images/courts/court2.jpg',
        ]}
      />
    </div>
  );
};

export default BookingForm;
