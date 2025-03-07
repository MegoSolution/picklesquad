const Advance = () => {
  return (
    <div id="Intro" className="coach-session-section">
      <div className="image-container-coach">
        <img
          src="/images/programmes/fourth.png"
          alt="Coach Session"
          className="session-image"
        />
      </div>
      <div className="text-container-coach">
        <div className="session-content">
          <p className="sub-title-coach">MASTER THE GAME</p>
          <h2 className="title-coach">
          Intermediate<br />Group Lessons
          </h2>
          <p>
          Ready to challenge yourself? Our Intermediate Group
          lessons are designed for players who have a solid grasp
          of the basics and are ready to refine their skills for more
          competitive play. We’ll focus on advanced skills such as
          perfecting spin serves, power shots, and offensive lobs,
          as well as sharpening your dinking and counter-strategy.
          You’ll also learn how to play under pressure, transition
          between attack and defense, and refine your doubles
          teamwork. With a focus on mental preparation, game
          analysis, and advanced conditioning, you'll be equipped
          to take on tougher opponents and perform at your best!        
          </p>

          {/* Table Section */}
          <div className="session-details-box">
            <div className="session-row">
              <div className="session-item">
                <strong>Intensity :</strong> 3-5
              </div>
              <hr className="session-divider-line-m" />
              <div className="session-divider"></div>
              <div className="session-item">
                <strong>Duration :</strong> 90 minutes
              </div>
            </div>
            <hr className="session-divider-line" />
            <p className="session-item">
              <strong>Number of Recommended Lessons :<br/></strong> Based on students’ progress
            </p>
          </div>

          {/* Join Us Button */}
          <a href="/book" className="session-btn">
          Book a Session
          </a>
        </div>
      </div>
    </div>
  );
};

export default Advance;

