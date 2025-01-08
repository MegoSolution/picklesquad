const Intro = () => {
  return (
    <div id="Intro" className="coach-session-section">
      <div className="text-container-coach">
        <div className="session-content">
          <h5 className="sub-title">Hands on the Basics</h5>
          <h2 className="title">
            Intro to <br /> Pickleball
          </h2>
          <p>
            Looking to dip your toes into the exciting world of pickleball? Here’s a warm welcome to our Intro to Pickleball program! Learn the basics of the game. All you need to learn, in a supportive environment and set your pickleball journey in motion.
          </p>

          {/* Table Section */}
          <div className="session-details">
            <table className="details-table">
              <tbody>
                <tr>
                  <td className="detail-label">Skill Level</td>
                  <td className="detail-value" colSpan="3">
                    A total newbie to the sport.
                  </td>
                </tr>
                <tr>
                  <td className="detail-label">Intensity</td>
                  <td className="detail-value">0-1</td>
                  <td className="detail-label">Duration</td>
                  <td className="detail-value">90 minutes</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Additional Lines */}
          <div className="additional-info">
            <p className="sub-title">Number of recommended lessons:</p>
            <p className="info-description">
              Participants are expected to attend just one Intro lesson.
            </p>
          </div>

          {/* Join Us Button */}
          <a href="/book" className="btn btn-primary first-time-btn">
          Book a Slot!
          </a>
        </div>
      </div>
      <div className="image-container">
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
