const CourtRental= () => {
  return (
    <div className="private-event-section">
      <div className="image-container">
        <img
          src="/images/home/court-rental.png"
          alt="Private Event"
          className="event-image"
        />
      </div>
      <div className="text-container">
        <div className="event-content">
          <h5 className="sub-title">Court Rental</h5>
          <h2 className="title">Book Your Session</h2>
          <p>
            Start experiencing the awesomeness of pickleball with your family
            and friends by booking one of our courts – or if you feel like
            learning how to nail that perfect serve, feel free to take up a
            lesson.
          </p>
          <a href="/sign-in" className="btn btn-light book-now-btn">
            Book Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default CourtRental;
