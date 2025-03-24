const JoinUs = () => {
  return (
    <div id="Intro" className="coach-session-section">
      <div className="image-container-coach">
        <img
          src="/images/programmes/second.jpg"
          alt="Coach Session"
          className="session-image"
        />
      </div>
      <div className="text-container-coach">
        <div className="session-content">
          <p className="sub-title-coach">SHAPE YOUR FOUNDATION</p>
          <h2 className="title-coach">
            Introduction<br />to Pickleball
          </h2>
          <p>
            New to pickleball? No worries! Our introductory course is
            designed for beginners with no prior experience. You'll learn
            the basic rules, essential strokes, and proper court positioning,
            all while gaining hands-on experience through fun drills and
            gameplay. Our expert coaches will guide you step-by-step,
            ensuring you feel confident and ready for your next match.          
          </p>

          {/* Table Section */}
          <div className="session-details-box">
            <div className="session-row">
              <div className="session-item">
                <strong>Intensity :</strong> 0-1
              </div>
              <div className="session-divider"></div>
              <hr className="session-divider-line-m" />
              <div className="session-item">
                <strong>Duration :</strong> 90 minutes
              </div>
            </div>
            <hr className="session-divider-line" />
            <p className="session-item">
              <strong>Number of Recommended Lessons :<br/></strong> Participants are expected to attend just one lesson.
            </p>
          </div>

          {/* Join Us Button */}
          <a href="/book" className="session1-btn">
          Book a Session
          </a>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;

