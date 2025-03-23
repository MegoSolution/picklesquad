const JoinUs = () => {
  return (
    <div id="Intro" className="coach-session-section">
      <div className="image-container-coach">
        <img
          src="/images/programmes/sixth.jpg"
          alt="Coach Session"
          className="session-image"
        />
      </div>
      <div className="text-container-coach">
        <div className="session-content">
          <p className="sub-title-coach">PLAY TO CONNECT</p>
          <h2 className="title-coach">
          Open Play
          </h2>
          <p>
          Whether you’re looking for a friendly match or to sharpen
          your skills, our Open Play sessions offer a great opportunity
          for players of all levels. Enjoy the thrill of spontaneous games
          with fellow enthusiasts in a laid-back, social atmosphere. It’s
          more than just pickleball – it’s about connecting, having fun,
          and sharing the excitement of the game with others. Come
          join us, play, and make every moment count!         
          </p>

          {/* Table Section */}
          <div className="session-details-box">
            <div className="session-row">
              <div className="session-item">
                <strong>Intensity :</strong> 1-5
              </div>
              <hr className="session-divider-line-m" />
              <div className="session-divider"></div>
              <div className="session-item">
                <strong>Duration :</strong> 120 minutes
              </div>
            </div>
            <hr className="session-divider-line" />
            <p className="session-item">
              <strong>Number of Recommended Lessons :<br/></strong> -
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

