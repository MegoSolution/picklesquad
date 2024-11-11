import { useState, useEffect } from "react";


const BookingForm = () => {

  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedCourt, setSelectedCourt] = useState(null);
  const [equipment, setEquipment] = useState([]); // State to store equipment data
  const [quantities, setQuantities] = useState({});

  // Generate dates for selection
  function generateDates() {
    const datesArray = [];
    const today = new Date();
    for (let i = 0; i < 7; i++) {
      const futureDate = new Date(today);
      futureDate.setDate(today.getDate() + i); // Start from today + 6 days
      const day = futureDate.toLocaleDateString("en-US", { weekday: "short" });
      const date = futureDate.getDate();
      datesArray.push(`${day} ${date}`);
    }
    return datesArray;
  }

  const dates = generateDates();
  const times = ["7-8AM", "8-9AM", "9-10AM", "10-11AM", "11-12PM", "12-1PM", "1-2PM", "2-3PM", "3-4PM", "4-5PM", "5-6PM", "6-7PM", "7-8PM", "8-9PM", "9-10PM", "10-11PM", "11-11:59PM"];
  const courts = ["Court 1", "Court 2", "Court 3", "Court 4", "Court VIP 1", "Court VIP 2"];

  const handleQuantityChange = (id, delta) => {
    setQuantities(prevQuantities => ({
      ...prevQuantities,
      [id]: Math.max(0, (prevQuantities[id] || 0) + delta)
    }));
  };

  const BASE_URL = 'http://localhost:3000/v1';
  const BEARER_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NzJjYTVkNGM2Yjc2OWJmNTg5YmQzMjgiLCJpYXQiOjE3MzEzMzg5MTQsImV4cCI6MTczMTM0MDcxNCwidHlwZSI6ImFjY2VzcyJ9.eUei3291zSjCY6l_t-dMbg-Uk656lTzL4UB4kpsTpO8"; // Replace this with your actual token

  // Fetch equipment data from API
  useEffect(() => {
    fetch(`${BASE_URL}/equipments`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${BEARER_TOKEN}`, // Include the Bearer token here
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


  return (
    <div className="booking-container">
      <h3>Picklesquad</h3>
      <hr className="divider" />
      {/* Select Date Section */}
      <div className="section">
        <h4 className="ms-2">Select date and time</h4>
        <div className="centerlized-container">
          <div className="date-container pt-3">
            {dates.map((date, index) => (
              <button
                key={index}
                onClick={() => setSelectedDate(date)}
                className={`date-button ${selectedDate === date ? "selected" : ""}`}
              >
                {date}
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
            {times.map((time, index) => (
              <button
                key={index}
                onClick={() => setSelectedTime(time)}
                className={`time-button ${selectedTime === time ? "selected" : ""}`}
              >
                {time}
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
            {courts.map((court, index) => (
              <button
                key={index}
                onClick={() => setSelectedCourt(court)}
                className={`court-button ${selectedCourt === court ? "selected" : ""}`}
              >
                {court}
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

      {/* Booking Button */}
      <div className="section">
        <button className="book-now-button">Check Out</button>
      </div>
    </div>
  );
};

export default BookingForm;