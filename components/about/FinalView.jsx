const FinalView = () => {
  return (
    <div id="View" className="coach-session-section">
      <div className="text-container-coach">
        <div className="session-content">
          <h5 className="sub-title">Life in PickleSquad</h5>
          <h2 className="title">We Have What You Need</h2>
          <p>
            Start experiencing the awesomeness of pickleball with your family
            and friends by booking one of our courts – or if you feel like
            learning how to nail that perfect serve, feel free to take up a
            lesson.
          </p>
          <a href="/sign-in" className="btn btn-primary first-time-btn">
            Join Us!
          </a>
        </div>
      </div>
      <div className="image-container">
        <img
          src="/images/picklesquad_image/view.png"
          alt="Coach Session"
          className="session-image"
        />
      </div>
    </div>
  );
};

export default FinalView;
