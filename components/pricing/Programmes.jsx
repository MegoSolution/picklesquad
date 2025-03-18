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
            Boost your pickleball skills with our expert coaching! From beginners to advanced players, we offer tailored lessons that help you level up your game. Choose from group or one-on-one sessions and start playing like a pro today!
          </p>
          
          {/* Table Section */}
          <div className="pricing-table-container">
            <table className="pricing-table">
              <thead>
                <tr>
                  <th>Lesson</th>
                  <th>Drop-In</th>
                  <th>2 Sessions</th>
                  <th>4 Sessions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="level-name">INTRODUCTION SESSION</td>
                  <td>RM60</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td className="level-name">BEGINNER</td>
                  <td>RM85</td>
                  <td>
                    <div className="price-main">RM160</div>
                    <div className="price-per-session">RM80/session</div>
                  </td>
                  <td>
                    <div className="price-main">RM300</div>
                    <div className="price-per-session">RM75/session</div>
                  </td>
                </tr>
                <tr>
                  <td className="level-name">INTERMEDIATE</td>
                  <td>RM100</td>
                  <td>
                    <div className="price-main">RM190</div>
                    <div className="price-per-session">RM95/session</div>
                  </td>
                  <td>
                    <div className="price-main">RM360</div>
                    <div className="price-per-session">RM90/session</div>
                  </td>
                </tr>
              </tbody>
            </table>
          
            <div className="table-notes">
              <p>*Equipment will be provided</p>
              <p>*Max 10 pax on 1 court</p>
              <p>*1.5 hours</p>
            </div>
          </div>
          
          {/* Join Us Button */}
          <a href="/book" className="cmn-button-pricing2">
            Learn more
          </a>
        </div>
      </div>
      <div className="image-container-coach2">
        <img
          src="/images/pricing/pricing-programmes.png"
          alt="Programmes Session"
          className="session-image"
        />
      </div>
    </div>
  );
};

export default Intro;