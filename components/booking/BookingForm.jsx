import { useState, useEffect } from "react";

const BookingForm = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState([]);
  const [selectedStartTime, setSelectedStartTime] = useState(null);
  const [selectedEndTime, setSelectedEndTime] = useState(null);
  const [selectedPeriod, setSelectedPeriod] = useState(null);
  const [availableTimes, setAvailableTimes] = useState([]);
  const [availableCourts, setAvailableCourts] = useState([]);
  const [selectedCourt, setSelectedCourt] = useState(null);
  const [equipment, setEquipment] = useState([]); // State to store equipment data
  const [quantities, setQuantities] = useState({});

  const COURT_FEE_PER_HOUR = 25;

  const BASE_URL = 'http://localhost:3000/v1';

  // Generate dates for selection
  function generateDates() {
    const datesArray = [];
    const today = new Date();
    for (let i = 0; i < 14; i++) {
      const futureDate = new Date(today);
      futureDate.setDate(today.getDate() + i);
      const day = futureDate.toLocaleDateString("en-US", { weekday: "short" });
      const date = futureDate.getDate();
      datesArray.push({
        display: `${day} ${date}`,
        value: futureDate.toISOString().split("T")[0] // Format as YYYY-MM-DD
      });
    }
    return datesArray;
  }

  const dates = generateDates();
  const today = dates[0].value;

  // Set today's date by default and fetch available times
  useEffect(() => {
    setSelectedDate(today);
    fetchAvailableTimes(today);
    fetchEquipment();
    
  }, []);

  // Fetch available times for the selected date
  const fetchAvailableTimes = (date) => {
    const BEARER_TOKEN = JSON.parse(localStorage.getItem('tokens')).access.token;
    fetch(`${BASE_URL}/bookings/availability/times?date=${date}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${BEARER_TOKEN}`,
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch available times');
      }
      return response.json();
    })
    .then(data => {
      setAvailableTimes(data.availableTimes || []);
    })
    .catch(error => console.error('Error fetching available times:', error));
  };

  // Fetch available courts for the selected date and time
  const fetchAvailableCourts = (date, startTime, endTime, period) => {
    const BEARER_TOKEN = JSON.parse(localStorage.getItem('tokens')).access.token;

    fetch(`${BASE_URL}/bookings/availability/courts?date=${date}&start_time=${formatToTime24(startTime, period)}&end_time=${formatToTime24(endTime, period)}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${BEARER_TOKEN}`,
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch available courts');
      }
      return response.json();
    })
    .then(data => {
      setAvailableCourts(data.availableCourts || []);
    })
    .catch(error => console.error('Error fetching available courts:', error));
  };

  const fetchEquipment = () => {
    const BEARER_TOKEN = JSON.parse(localStorage.getItem('tokens')).access.token;

    fetch(`${BASE_URL}/equipments`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${BEARER_TOKEN}`
      }
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch equipment data');
      }
      return response.json();
    })
    .then(data => {
      setEquipment(data.results);
    })
    .catch(error => console.error('Error fetching equipment:', error));
  };

  // Handle date selection
  const handleDateChange = (date) => {
    setSelectedDate(date);
    setSelectedTimeSlot([]); // Clear time slots on date change
    setSelectedStartTime(null); // Reset time and court when date changes
    setSelectedEndTime(null); // Reset time and court when date changes
    setSelectedPeriod(null); // Reset time and court when date changes
    setSelectedCourt(null);
    setAvailableCourts([]);
    fetchAvailableTimes(date);
  };

  // Handle time selection
  const handleTimeChange = (startTime, endTime, period) => {
    const fullTime = `${startTime} - ${endTime} ${period}`;
  
    // If the slot is already selected, remove it
    if (selectedTimeSlot.includes(fullTime)) {
      const updatedSlots = selectedTimeSlot.filter((slot) => slot !== fullTime);
  
      // Ensure the remaining slots are sequential
      for (let i = 1; i < updatedSlots.length; i++) {
        const [, prevEnd, prevPeriod] = updatedSlots[i - 1].split(/[ -]+/);
        const [currStart] = updatedSlots[i].split(/[ -]+/);
  
        if (formatToTime24(prevEnd, prevPeriod) !== formatToTime24(currStart, period)) {
          alert("Deselecting this slot will break the sequential order.");
          return;
        }
      }
  
      // Update the time slots and overall start and end times
      setSelectedTimeSlot(updatedSlots);
      if (updatedSlots.length > 0) {
        const [firstStart, , firstPeriod] = updatedSlots[0].split(/[ -]+/);
        const [, lastEnd, lastPeriod] = updatedSlots[updatedSlots.length - 1].split(/[ -]+/);
        setSelectedStartTime(firstStart);
        setSelectedEndTime(lastEnd);
        setSelectedPeriod(lastPeriod);
      } else {
        setSelectedStartTime(null);
        setSelectedEndTime(null);
        setSelectedPeriod(null);
      }
      return;
    }
  
    // If no slots are selected, add the first time slot
    if (selectedTimeSlot.length === 0) {
      setSelectedTimeSlot([fullTime]);
      setSelectedStartTime(startTime);
      setSelectedEndTime(endTime);
      setSelectedPeriod(period);
      fetchAvailableCourts(selectedDate, startTime, endTime, period);
      return;
    }
  
    // Extract the first and last selected time slots
    const firstSlot = selectedTimeSlot[0];
    const lastSlot = selectedTimeSlot[selectedTimeSlot.length - 1];
    const [firstStart, , firstPeriod] = firstSlot.split(/[ -]+/);
    const [, lastEnd, lastPeriod] = lastSlot.split(/[ -]+/);
  
    // Check if the new slot is sequential to the first or last slot
    const isSequentialToStart =
      formatToTime24(endTime, period) === formatToTime24(firstStart, firstPeriod);
    const isSequentialToEnd =
      formatToTime24(startTime, period) === formatToTime24(lastEnd, lastPeriod);
  
    // Ensure no gaps when adding a slot
    if (isSequentialToStart) {
      setSelectedTimeSlot([fullTime, ...selectedTimeSlot]);
      setSelectedStartTime(startTime); // Update overall start time
      fetchAvailableCourts(selectedDate, startTime, selectedEndTime, period);
    } else if (isSequentialToEnd) {
      setSelectedTimeSlot([...selectedTimeSlot, fullTime]);
      setSelectedEndTime(endTime); // Update overall end time
      fetchAvailableCourts(selectedDate, selectedStartTime, endTime, period);
    } else {
      alert("Please select sequential time slots.");
    }
  };
  
  

  const handleQuantityChange = (id, delta) => {
    setQuantities(prevQuantities => ({
      ...prevQuantities,
      [id]: Math.max(0, (prevQuantities[id] || 0) + delta)
    }));
  };

  const calculateTotal = () => {
    // Calculate equipment total
    const equipmentTotal = equipment.reduce((total, item) => {
      const quantity = quantities[item._id] || 0;
      return total + (quantity * item.rent_per_cost);
    }, 0);

    // Calculate court fee if a court is selected
    const courtTotal = selectedCourt ? COURT_FEE_PER_HOUR : 0;

    return equipmentTotal + courtTotal;
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
    setSelectedPeriod(null);
    setAvailableTimes([]);
    setAvailableCourts([]);
    setSelectedCourt(null);
    setQuantities({});
  };

  // Handle checkout button click
  const handleCheckout = () => {
    const BEARER_TOKEN = JSON.parse(localStorage.getItem('tokens')).access.token;

    const bookingData = {
      user: "672ca5d4c6b769bf589bd328", // Replace with the actual user ID
      court: selectedCourt,
      date: selectedDate, // Date is stored separately
      startTime: formatToTime24(selectedStartTime, selectedPeriod), // Convert to 24-hour format
      endTime: formatToTime24(selectedEndTime, selectedPeriod),
      totalCost: calculateTotal(),
      status: "confirmed",
      equipments_rented: Object.keys(quantities).map(id => ({
        id,
        count: quantities[id]
      }))
    };

    console.log(bookingData)

    fetch(`${BASE_URL}/bookings`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${BEARER_TOKEN}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(bookingData)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to create booking');
      }
      return response.json();
    })
    .then(data => {
      console.log('Booking created:', data);
      reset();
      alert('Booking successfully created!');
    })
    .catch(error => console.error('Error creating booking:', error));
  };


  return (
    <div className="booking-container">
      <h3>Picklesquad</h3>
      <hr className="divider" />

      {/* Select Date Section */}
      <div className="section">
        <h4 className="ms-2">Select Date</h4>
        <div className="centerlized-container">
          <div className="date-container pt-3">
            {dates.map((date, index) => (
              <button
                key={index}
                onClick={() => handleDateChange(date.value)}
                className={`date-button ${selectedDate === date.value ? "selected" : ""}`}
                disabled={index >= dates.length - 7} // Disable the last 7 buttons
              >
                {date.display}
              </button>
            ))}
          </div>
        </div>
      </div>


      {/* Select Time Section */}
      <div className="section">
        <h4 className="ms-2">Select Time</h4>
        <div className="centerlized-container">
          {availableTimes.length > 0 ? (
            <div className="time-container pt-3">
              {availableTimes.map((time, index) => (
                <button
                  key={index}
                  onClick={() => handleTimeChange(time.start, time.end, time.endPeriod)}
                  className={`time-button ${
                    selectedTimeSlot.includes(`${time.start} - ${time.end} ${time.endPeriod}`) ? "selected" : ""
                  }`}
                >
                  {time.start} - {time.end} {time.endPeriod}
                </button>
              ))}
            </div>
          ) : (
            <p className="no-courts-message">No time slots available for the selected date.</p>
          )}
        </div>
      </div>

      {/* Select Court Section */}
      <div className="section">
        <h4 className="ms-2">Select Court</h4>
        <div className="centerlized-container">
          {selectedStartTime === null ? (
            <p className="no-selected-time-message">Please select a start time to view available courts.</p>
          ) : availableCourts.length > 0 ? (
            <div className="court-container pt-3">
              {availableCourts.map((court, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedCourt(court.court_id)}
                  className={`court-button ${
                    selectedCourt === court.court_id ? "selected" : ""
                  }`}
                >
                  {court.court_name}
                </button>
              ))}
            </div>
          ) : (
            <p className="no-courts-message">There are no available courts at this time.</p>
          )}
        </div>
      </div>

      {/* Equipment Selection Section */}
      <div className="section">
        <h4 className="ms-2">Select Equipment</h4>
        <div className="equipment-container pt-3">
          {equipment.map(item => (
            <div key={item.id} className="equipment-item ">
              <img src={item.image || "/images/default.png"} alt={item.name} className="equipment-image" />
              <p>{item.name}</p>
              <p>RM{item.rent_per_cost} each</p>
              <div className="quantity-control">
                <button onClick={() => handleQuantityChange(item.id, -1)}>-</button>
                <span>{quantities[item.id] || 0}</span>
                <button onClick={() => handleQuantityChange(item.id, 1)}>+</button>
              </div>
              <p>Total: RM{(quantities[item.id] || 0) * item.rent_per_cost}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Display Total Amount */}
      <div className="section">
        <h4>Total Amount: RM{calculateTotal()}</h4>
      </div>

      {/* Booking Button */}
      <div className="section">
        <button className="book-now-button" onClick={handleCheckout}>Check Out</button>
      </div>
    </div>
  );
};

export default BookingForm;
