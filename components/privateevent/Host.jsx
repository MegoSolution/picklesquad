const Advance = () => {
  return (
    <div id="Intro" className="coach-session-section">
      <div className="text-container-coach">
        <div className="session-content">
          <h2 className="title-coach">
          Personalize Your Pickleball Party
          </h2>
          <p>
          Love pickleball? Take it to the next level with a private session
          just for you and your guests! Whether you're celebrating a
          birthday, a bachelorette party, a graduation, or simply planning
          a fun family day out, we’ve got you covered.
          <br /><br />
          Just gather your squad, step onto the court, and enjoy a
          stress-free, action-packed experience—because great moments
          are meant to be shared!     
          </p>

          <a
            href="#Contact"
            scroll={false}
            className="session1-btn"
          >
            Contact Us Now
          </a>
        </div>
      </div>
      <div className="image-container-event">
        <img
          src="/images/privateevent/2.png"
          alt="Coach Session"
          className="session-image"
        />
      </div>
    </div>
  );
};

export default Advance;

