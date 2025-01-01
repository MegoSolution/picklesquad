const Beginner = () => {
  return (
    <div className="private-event-section">
      <div className="image-container">
        <img
          src="/images/picklesquad_image/private-event.jpg"
          alt="Private Event"
          className="event-image"
        />
      </div>
      <div className="text-container">
        <div className="event-content">
          <h5 className="sub-title">Perfect for novice</h5>
          <h2 className="title">Beginner <br /> Group Lesson</h2>
          <p>
            Discover the joy of pickleball! Perfectly suited for beginners to learn the basic and build your skills. Our expert instructors will guide you through the basics of the game and help you get started on your pickleball journey.
          </p>
          {/* Table Section */}
          <div className="session-details--two">
            <table className="details-table--two">
              <tbody>
                <tr>
                  <td className="detail-label--two">Skill Level</td>
                  <td className="detail-value--two" colSpan="3">
                    A total newbie to the sport.
                  </td>
                </tr>
                <tr>
                  <td className="detail-label--two">Intensity</td>
                  <td className="detail-value--two">0-1</td>
                  <td className="detail-label--two">Duration</td>
                  <td className="detail-value--two">90 mins</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h5 className="sub-title">Number of recommended lessons:</h5>
          <p>1-5 lessons</p>
          <a href="/book" className="btn btn-light book-now-btn">
          Book a Slot!
          </a>
        </div>
      </div>
    </div>
  );
};

export default Beginner;
