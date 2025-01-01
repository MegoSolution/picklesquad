const OpenPlay = () => {
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
          <h5 className="sub-title">Compete Among The Squad</h5>
          <h2 className="title">Open Play --- Advanced</h2>
          <p>
          Unlock the competitive edge in your pickleball journey with our Open Play session designed for advanced players. Test your skills, strategize, and compete with fellow enthusiasts in a dynamic and fast-paced environment. This is the perfect opportunity to refine your game, challenge yourself, and experience the thrill of high-level play among like-minded pickleball players. Plus, it's a fantastic chance to meet new people, build connections, and be part of a vibrant pickleball community.</p>
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

export default OpenPlay;
