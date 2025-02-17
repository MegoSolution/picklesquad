import ProgramDetailsForm from "./ProgramDetailsForm";

const ProgramDetailsBody = () => {
  // Dummy data start
  const program = {
    id: 1,
    name: `Group Lesson
- Introduction to Pickleball`,
    courseOutlineLeft: [
      "Basic rules and scoring",
      "Basic strokes: forehand, backhand, volley",
      "Serve and return basics",
      "Understanding court boundaries",
      "Positioning for singles and doubles"
    ],
    courseOutlineRight: [
      "Safety tips during play",
      "Demonstration and guided practice",
      "Simple drills to practice consistency",
      "First gameplay experience with guided feedback"
    ],
    details: {
      skillLevel: "Complete beginner with no prior experience in racket sports",
      preRequisite: "NIL",
      intensity: "0-1",
      maxCapacity: "10 participants",
      courtType: "1 covered court",
      equipment: "Paddles and balls provided complimentary",
      ageRequirement: "12 years old and above"
    },
    startTime: "2024-04-01T09:00:00Z",
    endTime: "2024-04-01T10:30:00Z",
    price: 80.00,
    sessions: "1 session",
    coach: {
      name: "Coach Michael Lee",
      image: "/images/profile/coach1.jpg"
    },
    court: {
      name: "Court A",
      location: {
        name: "PickleSquad Damansara"
      }
    },
    terms: `
    Bookings are non-refundable
    Rescheduling is allowed with at least 24 hours' notice before the class starts, but only once
    Cancellations made less than 24 hours before the class are non-refundable and cannot be rescheduled
    Each registration is valid for one individual only`
  };

  // Dummy related programs
  const programData = [
    {
      id: 2,
      name: "Intermediate Skills Training",
      startTime: "2024-04-15T14:00:00Z",
      endTime: "2024-04-15T16:00:00Z",
      coach: {
        name: "Sarah Wong"
      }
    },
    {
      id: 3,
      name: "Advanced Strategy Workshop",
      startTime: "2024-04-20T10:00:00Z",
      endTime: "2024-04-20T12:00:00Z",
      coach: {
        name: "David Chen"
      }
    },
    {
      id: 4,
      name: "Weekend Drill Sessions",
      startTime: "2024-04-25T15:00:00Z",
      endTime: "2024-04-25T17:00:00Z",
      coach: {
        name: "Michael Lee"
      }
    },
    {
      id: 5,
      name: "Competition Prep Course",
      startTime: "2024-04-30T16:00:00Z",
      endTime: "2024-04-30T18:00:00Z",
      coach: {
        name: "Sarah Wong"
      }
    }
    // Dummy data end
  ];

  const handleNext = () => {
    const container = document.querySelector('.carousel-items');
    container.scrollLeft += 320; // Width of card (300) + gap (20)
  };

  const handlePrev = () => {
    const container = document.querySelector('.carousel-items');
    container.scrollLeft -= 320; // Width of card (300) + gap (20)
  };

  return (
    //<ProgramDetailsForm />
    <section className="booking booking--main booking-page-section">

      <div className="program-details">
        <div className="image-container-program">
          <img
            src="/images/Picklesquad_image/banner-one.jpg"
            alt="Program"
            className="program-image"
          />
          <div className="text-overlay">
            <h1 className="program-title">{program.name}</h1>
          </div>
        </div>

        <div className="program-details-content">
          <div className="program-info">
            <div className="course-outline">
              <h3>Course Outline:</h3>
              <div className="course-outline-container">
                <div className="course-outline-left">
                  {program.courseOutlineLeft.map((item, index) => (
                    <p key={index}>• {item}</p>
                  ))}
                </div>
                <div className="course-outline-right">
                  {program.courseOutlineRight.map((item, index) => (
                    <p key={index}>• {item}</p>
                  ))}
                </div>
              </div>
            </div>

            <div className="program-details-grid">
              <div className="detail-item">
                <strong>Skill Level:</strong> 
                <span>{program.details.skillLevel}</span>
              </div>
              <div className="detail-item">
                <strong>Pre-Requisite:</strong> 
                <span>{program.details.preRequisite}</span>
              </div>
              <div className="detail-item">
                <strong>Intensity:</strong> 
                <span>{program.details.intensity}</span>
              </div>
              <div className="detail-item">
                <strong>Maximum Capacity:</strong> 
                <span>{program.details.maxCapacity}</span>
              </div>
              <div className="detail-item">
                <strong>Court Type:</strong> 
                <span>{program.details.courtType}</span>
              </div>
              <div className="detail-item">
                <strong>Equipment:</strong> 
                <span>{program.details.equipment}</span>
              </div>
              <div className="detail-item">
                <strong>Age Requirement:</strong> 
                <span>{program.details.ageRequirement}</span>
              </div>
              <div className="detail-item">
                <strong>Start Time:</strong> 
                <span>{new Date(program.startTime).toLocaleString()}</span>
              </div>
              <div className="detail-item">
                <strong>End Time:</strong> 
                <span> {new Date(program.endTime).toLocaleString()}</span>
              </div>
              <div className="detail-item">
                <strong>Court:</strong> 
                <span>{program.court.name} - {program.court.location.name}</span>
              </div>
            </div>

            
            
            <div className="detail-item">
              <strong>Terms & Conditions:</strong>
              <span style={{ whiteSpace: 'pre-line' }}>{program.terms}</span>
            </div>
          </div>
        </div>

        <div className="program-footer">
          <div className="footer-detail">
            <img 
              src="/images/Picklesquad_image/program_listing3.png" 
              alt="Coach Icon" 
              className="footer-image-icon"
            />
            <span className="footer-text">
              <strong>HOST:</strong> <br /> {program.coach.name}
            </span>
          </div>
          <div className="footer-detail">
            <img 
              src="/images/Picklesquad_image/program_listing.png" 
              alt="Sessions Icon" 
              className="footer-image-icon"
            />
            <div className="footer-text">
              <strong>PRICING:</strong>
              <div>{program.sessions}</div>
            </div>
          </div>
          <div className="footer-detail">
            <span className="footer-price">RM {program.price.toFixed(2)}</span>
          </div>
          <button className="program-button">
            Book Now
          </button>
        </div>
      </div>

        <div className="event-dates-container">
          <div className="event-header">
            <h2>Event Dates</h2>
            <a href="/program" className="view-all-link">View All</a>
          </div>
          <div className="carousel">
            <button className="scroll-btn left-btn" onClick={handlePrev}>&#9664;</button>
            <div className="carousel-items">
              {programData.map((event, index) => (
                <div key={index} className="event-card">
                  <div className="event-icon">
                    <img src="/images/profile/calendar.png" alt="Calendar" />
                  </div>
                  <div className="event-details">
                    <p className="event-info">
                      {new Date(event.startTime).toLocaleDateString('en-US', { 
                        weekday: 'short',
                        month: 'short', 
                        day: '2-digit'
                      })} {" "}
                      <br />
                      {new Date(event.startTime).toLocaleTimeString([], { 
                        hour: '2-digit', 
                        minute: '2-digit',
                        hour12: false 
                      })} - {" "}
                      {new Date(event.endTime).toLocaleTimeString([], { 
                        hour: '2-digit', 
                        minute: '2-digit',
                        hour12: false
                      })}
                      <br />
                      Coach {event.coach.name}
                      <br />
                      <span className="status">
                        <img 
                          src="/images/Picklesquad_image/program_listing2.png" 
                          alt="Open Icon" 
                          className="status-icon" 
                        />
                        OPEN
                      </span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <button className="scroll-btn right-btn" onClick={handleNext}>&#9654;</button>
          </div>
        </div>
    </section>
  );
};

export default ProgramDetailsBody;
