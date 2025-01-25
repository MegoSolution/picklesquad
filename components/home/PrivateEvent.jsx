const PrivateEvent = () => {
  return (
    <div className="private-event-section">
      <div className="image-container">
        <img
          src="/images/home/private-event.jpg"
          alt="Private Event"
          className="event-image"
        />
      </div>
      <div className="text-container">
        <div className="event-content">
          <h5 className="sub-title">Private Event</h5>
          <h2 className="title">Host Your Own Private Event</h2>
          <p>
            Start experiencing the awesomeness of pickleball with your family
            and friends by booking one of our courts – or if you feel like
            learning how to nail that perfect serve, feel free to take up a
            lesson.
          </p>
          <a href="/privateevent" className="btn btn-light book-now-btn">
            Book Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default PrivateEvent;
