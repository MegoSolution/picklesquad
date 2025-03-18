const Intro = () => {
  return (
    <div id="Intro" className="coach-session-section">
      <div className="text-container">
        <div className="session-content">
          <p className="session-description">Programmes</p>
          <h2 className="title2">
            Elevate Your Play
          </h2>
          <p className="session-description">
          Boost your pickleball skills with our expert coaching! From
beginners to advanced players, we offer tailored lessons
that help you level up your game. Choose from group or
one-on-one sessions and start playing like a pro today!         
          </p>

          {/* Table Section */}
         

          {/* Join Us Button */}
          <a href="/book" className="session2-btn">
          Learn more
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
