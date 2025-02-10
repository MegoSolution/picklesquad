const Intro = () => {
  return (
    <div id="Intro" className="coach-session-section">
      <div className="text-container">
        <div className="session-content">
          <p className="session-description">LEVEL UP YOUR GAME</p>
          <h2 className="title2">
            Beginner <br /> Group Lessons
          </h2>
          <p className="session-description">
            Ready to elevate your game? In our Next-Level Beginner
            lessons, we focus on improving consistency and mastering
            essential techniques like spin, dinking, and third-shot drops.
            With targeted drills and guided practice, you’ll build confidence
            in rallies, refine your positioning, and learn effective strategies
            to play smarter and move faster on the court. This class is
            designed to help you take your pickleball skills to the next level
            and prepare for real-game situations!          
          </p>

          {/* Table Section */}
          <div className="session-details-box2">
            <div className="session-row2">
              <div className="session-item2">
                <strong>Intensity :</strong> 1-2
              </div>
              <div className="session-divider2"></div>
              <div className="session-item2">
                <strong>Duration :</strong> 90 minutes
              </div>
            </div>
            <hr className="session-divider-line2" />
            <p className="session-item2">
              <strong>Number of Recommended Lessons :<br/></strong> 1-5 sessions (Progress may vary for each student).
            </p>
          </div>

          {/* Join Us Button */}
          <a href="/book" className="session2-btn">
          Book a Session
          </a>
        </div>
      </div>
      <div className="image-container-coach2">
        <img
          src="/images/programmes/intro.jpg"
          alt="Coach Session"
          className="session-image"
        />
      </div>
    </div>
  );
};

export default Intro;
