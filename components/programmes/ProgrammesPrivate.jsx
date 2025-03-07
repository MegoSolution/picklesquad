const Intro = () => {
  return (
    <div id="Intro" className="coach-session-section">
      <div className="text-container">
        <div className="session-content">
          <p className="session-description">DEDICATED COACHING, TAILORED FOR YOU</p>
          <h2 className="title2">
            Private Coaching
          </h2>
          <p className="session-description">
          Take your game to new heights with one-on-one coaching
          in our Private Lessons! Whether you want to fine-tune your
          technique, improve specific skills, or work on mental toughness,
          our expert coach will customize the lesson to meet your unique
          needs. Enjoy the privacy of a dedicated session, where you’ll
          receive personalized feedback and focused drills that target
          your growth areas. This is the perfect opportunity for players
          who prefer a more customized experience and want to accelerate
          their pickleball progress!       
          </p>

          {/* Table Section */}
          <div className="session-details-box2">
            <div className="session-row3">
              <div className="session-item2">
                <strong>Intensity :</strong> 1-5
              </div>
              <hr className="session-divider-line-m2" />
              <div className="session-divider2"></div>
              <div className="session-item2">
                <strong>Duration :</strong> 60 minutes (add-on available)
              </div>
            </div>
            <hr className="session-divider-line2" />
            <p className="session-item2">
              <strong>Number of Recommended Lessons :<br/></strong> -
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
          src="/images/programmes/fifth.jpg"
          alt="Coach Session"
          className="session-image"
        />
      </div>
    </div>
  );
};

export default Intro;
