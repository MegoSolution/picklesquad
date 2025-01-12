const Advance = () => {
  return (
    <div className="coach-session-section">
      <div className="text-container-coach">
        <div className="session-content">
          <h5 className="sub-title">Ready to Go!</h5>
          <h2 className="title">
          Intermediate <br /> Group Lesson
          </h2>
          <p>
          Take your pickleball skills to the next level with our Intermediate Group Lessons! Perfect for players who have mastered the basics and are ready to refine their techniques, improve game strategy, and elevate their performance. This program offers dynamic drills, game play analysis, and expert guidance to help you build confidence and dominate the court. </p>

          {/* Table Section */}
          <div className="session-details">
            <table className="details-table">
              <tbody>
                <tr>
                  <td className="detail-label">Skill Level</td>
                  <td className="detail-value" colSpan="3">
                  Intermediate (3.0 and above)
                  </td>
                </tr>
                <tr>
                  <td className="detail-label">Intensity</td>
                  <td className="detail-value">3-5</td>
                  <td className="detail-label">Duration</td>
                  <td className="detail-value">90 mins</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Additional Lines */}
          <div className="additional-info">
            <p className="sub-title">Number of recommended lessons:</p>
            <p className="info-description">
              Participants are expected to have basic skills before joining.
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
          src="/images/programmes/intermediate.jpg"
          alt="Coach Session"
          className="session-image"
        />
      </div>
    </div>
  );
};

export default Advance;
