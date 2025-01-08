const CoachSession = () => {
  return (
    <div className="coach-session-section">
      <div className="text-container-coach">
        <div className="session-content">
          <h5 className="sub-title">First Time</h5>
          <h2 className="title">Coach Session & Introduction</h2>
          <p>
            Start experiencing the awesomeness of pickleball with your family
            and friends by booking one of our courts – or if you feel like
            learning how to nail that perfect serve, feel free to take up a
            lesson.
          </p>
          <a href="/programmes" className="btn btn-primary first-time-btn">
            First Time
          </a>
        </div>
      </div>
      <div className="image-container">
        <img
          src="/images/picklesquad_image/first-time.jpg"
          alt="Coach Session"
          className="session-image"
        />
      </div>
    </div>
  );
};

export default CoachSession;
