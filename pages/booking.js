import Banner from "@/components/booking/Banner";
import { useState } from "react";

// Helper function to generate dates
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

export default function Booking() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedCourt, setSelectedCourt] = useState(null);
  const [racketQuantity, setRacketQuantity] = useState(0);
  const [ballQuantity, setBallQuantity] = useState(0);

  const dates = generateDates();
  const times = ["7-8AM", "8-9AM", "9-10AM", "10-11AM", "11-12PM", "12-1PM", "1-2PM", "2-3PM", "3-4PM", "4-5PM", "5-6PM", "6-7PM", "7-8PM", "8-9PM", "9-10PM", "10-11PM", "11-11:59PM"];
  const courts = ["Court 1", "Court 2", "Court 3", "Court 4", "Court VIP 1", "Court VIP 2"];


  return (
    <>
      {/* Banner Section */}
      <Banner />

      {/* Booking Form */}
      <div style={styles.container}>
        <h1>Picklesquad</h1>

        {/* Select Date Section */}
        <div style={styles.section}>
          <h2>Select date and time</h2>
          <div style={styles.dateContainer}>
            {dates.map((date, index) => (
              <button
                key={index}
                onClick={() => setSelectedDate(date)}
                style={{
                  ...styles.dateButton,
                  backgroundColor: selectedDate === date ? "#ff7f50" : "#fff",
                }}
              >
                {date}
              </button>
            ))}
          </div>
        </div>

        {/* Select Time Section */}
        <div style={styles.section}>
          <h3>Select Time</h3>
          <div style={styles.timeContainer}>
            {times.map((time, index) => (
              <button
                key={index}
                onClick={() => setSelectedTime(time)}
                style={{
                  ...styles.timeButton,
                  backgroundColor: selectedTime === time ? "#ff7f50" : "#fff",
                  color: selectedTime === time ? "#fff" : "#333",
                }}
              >
                {time}
              </button>
            ))}
          </div>
        </div>

        {/* Select Court Section */}
        <div style={styles.section}>
          <h3>Select Court</h3>
          <div style={styles.courtContainer}>
            {courts.map((court, index) => (
              <button
                key={index}
                onClick={() => setSelectedCourt(court)}
                style={{
                  ...styles.courtButton,
                  backgroundColor: selectedCourt === court ? "#ff7f50" : "#fff",
                  color: selectedCourt === court ? "#fff" : "#333",
                }}
              >
                {court}
              </button>
            ))}
          </div>
        </div>

        {/* Equipment Selection Section */}
        <div style={styles.section}>
          <h3>Select Equipment</h3>
          <div style={styles.equipmentContainer}>
            {/* Paddle Ball Racket */}
            <div style={styles.equipmentItem}>
              <img src="/images/racket.png" alt="Paddle Ball Racket" style={styles.equipmentImage} />
              <p>Racket</p>
              <p>$10 each</p>
              <div style={styles.quantityControl}>
                <button onClick={() => setRacketQuantity(Math.max(0, racketQuantity - 1))}>-</button>
                <span>{racketQuantity}</span>
                <button onClick={() => setRacketQuantity(racketQuantity + 1)}>+</button>
              </div>
              <p>Total: ${racketQuantity * 10}</p>
            </div>

            {/* Paddle Ball */}
            <div style={styles.equipmentItem}>
              <img src="/images/ball.png" alt="Paddle Ball" style={styles.equipmentImage} />
              <p>Ball</p>
              <p>$5 each</p>
              <div style={styles.quantityControl}>
                <button onClick={() => setBallQuantity(Math.max(0, ballQuantity - 1))}>-</button>
                <span>{ballQuantity}</span>
                <button onClick={() => setBallQuantity(ballQuantity + 1)}>+</button>
              </div>
              <p>Total: ${ballQuantity * 5}</p>
            </div>
          </div>
        </div>

        {/* Booking Button */}
        <div style={styles.section}>
          <button style={styles.bookNowButton}>Check Out</button>
        </div>
      </div>
    </>
  );
}

const styles = {
  container: {
    maxWidth: "35%",
    margin: "0 auto",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    backgroundColor: "#f9f9f9",
  },
  section: {
    marginBottom: "20px",
  },
  dateContainer: {
    display: "flex",
    gap: "10px",
    flexWrap: "wrap",
  },
  dateButton: {
    padding: "10px 15px",
    border: "1px solid #ddd",
    borderRadius: "5px",
    cursor: "pointer",
    textTransform: "uppercase", // Capitalizes the text
  },
  typeButton: {
    padding: "10px 20px",
    backgroundColor: "#ff7f50",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    textTransform: "uppercase", // Capitalizes the text
  },
  timeContainer: {
    display: "flex",
    gap: "10px",
    flexWrap: "wrap",
  },
  timeButton: {
    padding: "10px",
    border: "1px solid #ddd",
    borderRadius: "5px",
    cursor: "pointer",
    minWidth: "80px",
    textAlign: "center",
    textTransform: "uppercase", // Capitalizes the text
  },
  bookNowButton: {
    padding: "15px 30px",
    backgroundColor: "#ff7f50",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    fontSize: "16px",
    cursor: "pointer",
    textTransform: "uppercase", // Capitalizes the text
  },
};
