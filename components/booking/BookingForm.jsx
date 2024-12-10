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
  const BEARER_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NzJjYTVkNGM2Yjc2OWJmNTg5YmQzMjgiLCJpYXQiOjE3MzE1ODc5OTMsImV4cCI6MTczMTU4OTc5MywidHlwZSI6ImFjY2VzcyJ9.OG_9NjsoFrhmx5hLXNGOM6Tyfohosqe0GEYY1w6Uhg8"; // Replace this with your actual token

  // Generate dates for selection
  function generateDates() {
    const datesArray = [];
    const today = new Date();
    for (let i = 0; i < 7; i++) {
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

  // Set today's date by default and fetch available times
  useEffect(() => {
    const today = dates[0].value;
    setSelectedDate(today);
    fetchAvailableTimes(today);
  }, []);

  // Fetch available times for the selected date
  const fetchAvailableTimes = (date) => {
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
      console.log(data.availableTimes)
    })
    .catch(error => console.error('Error fetching available times:', error));
  };

  // Fetch available courts for the selected date and time
  const fetchAvailableCourts = (date, startTime, endTime, period) => {
    fetch(`${BASE_URL}/bookings/availability/courts?date=${date}&start_time=${startTime}&end_time=${endTime}&period=${period}`, {
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

  // Fetch equipment data from API
  useEffect(() => {
    fetch(`${BASE_URL}/equipments`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${BEARER_TOKEN}`,
        'Content-Type': 'application/json'
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
  }, []);

  // Handle date selection
  const handleDateChange = (date) => {
    setSelectedDate(date);
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
    setSelectedTimeSlot(fullTime); // Store full time to differentiate between AM/PM
    setSelectedStartTime(startTime); // Reset time and court when date changes
    setSelectedEndTime(endTime); // Reset time and court when date changes
    setSelectedPeriod(period); // Reset time and court when date changes
    setSelectedCourt(null); // Reset court when time changes
    fetchAvailableCourts(selectedDate, startTime, endTime, period);
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

  const formatToDateTime = (date, hour, period) => {
    // Parse the selected date
    const selectedDate = new Date(date);
  
    // Determine the 24-hour format hour based on AM/PM
    let hour24 = parseInt(hour, 10);
    if (period === 'PM' && hour24 !== 12) {
      hour24 += 12; // Convert PM hour to 24-hour format (e.g., 1 PM becomes 13)
    } else if (period === 'AM' && hour24 === 12) {
      hour24 = 0; // Convert 12 AM to 0 hours for midnight
    }
  
    // Set hours and minutes to selectedDate object
    selectedDate.setHours(hour24, 0, 0, 0);
  
    // Format as ISO string
    const malaysiaTime = new Date(selectedDate.getTime() + 8 * 60 * 60 * 1000);

  // Format as ISO string
    return malaysiaTime.toISOString();
  };
  

  // Handle checkout button click
  const handleCheckout = () => {
    const bookingData = {
      user: "672ca5d4c6b769bf589bd328", // Replace with the actual user ID
      court: selectedCourt,
      startTime: formatToDateTime(selectedDate, selectedStartTime, selectedPeriod), // Combine date and start time
      endTime: formatToDateTime(selectedDate, selectedEndTime, selectedPeriod), // Combine date and end time
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
          <div className="time-container pt-3">
            {availableTimes.map((time, index) => (
              <button
                key={index}
                onClick={() => handleTimeChange(time.start, time.end, time.endPeriod)}
                className={`time-button ${selectedTimeSlot === `${time.start} - ${time.end} ${time.endPeriod}` ? "selected" : ""}`}
              >
                {time.start} - {time.end} {time.endPeriod}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Select Court Section */}
      <div className="section">
        <h4 className="ms-2">Select Court</h4>
        <div className="centerlized-container">
          <div className="court-container pt-3">
            {availableCourts.map((court, index) => (
              <button
                key={index}
                onClick={() => setSelectedCourt(court.court_id)}
                className={`court-button ${selectedCourt === court.court_id ? "selected" : ""}`}
              >
                {court.court_name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Equipment Selection Section */}
      <div className="section">
        <h4 className="ms-2">Select Equipment</h4>
        <div className="equipment-container pt-3">
          {equipment.map(item => (
            <div key={item._id} className="equipment-item">
              <img src={item.image || "/images/default.png"} alt={item.name} className="equipment-image" />
              <p>{item.name}</p>
              <p>RM{item.rent_per_cost} each</p>
              <div className="quantity-control">
                <button onClick={() => handleQuantityChange(item._id, -1)}>-</button>
                <span>{quantities[item._id] || 0}</span>
                <button onClick={() => handleQuantityChange(item._id, 1)}>+</button>
              </div>
              <p>Total: RM{(quantities[item._id] || 0) * item.rent_per_cost}</p>
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
