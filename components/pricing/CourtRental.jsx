const JoinUs = () => {
  return (
    <div id="Intro" className="coach-session-section">
      <div className="image-container-coach">
        <img
          src="/images/pricing/court-rental.jpg"
          alt="Court Rental"
          className="session-image"
        />
      </div>
      <div className="text-container-coach">
        <div className="session-content">
          <p className="sub-title-coach">COURT RENTAL</p>
          <h2 className="title-coach">
            Your Perfect Match<br />Starts Here
          </h2>
          <p>
          Step onto our premium courts and get ready for action!
Whether you're gearing up for a friendly match or an intense
game, our state-of-the-art facilities offer the perfect setting.
With easy online booking, it's time to take your pickleball
experience to the next level—book now and let the games begin!          
          </p>

          {/* Table Section */}
{/* Table Section */}
<div className="tables-container">
  {/* Opening Hours Section */}
  <div className="hours-header">
  <div className="hours-title">DAILY OPENING HOURS:</div>
  <div className="hours-time">8AM - 12AM</div>
</div>

  {/* Peak/Off-Peak Hours Table */}
  <table className="info-table hours-table">
    <tbody>
      <tr>
        <td>PEAK<br />HOURS</td>
        <td>
          Weekend & Public Holiday<br />
          Weekday 6AM - 11AM, 5PM - 12AM
        </td>
      </tr>
      <tr>
        <td>OFF-PEAK<br />HOURS</td>
        <td>Weekday 12PM - 4PM</td>
      </tr>
    </tbody>
  </table>
  
  {/* Rates Table */}
  <table className="info-table rates-table">
    <thead>
      <tr>
        <th></th>
        <th>Regular Court</th>
        <th>VIP Court</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>PEAK HOURS</td>
        <td>RM4/min</td>
        <td>RM6/min</td>
      </tr>
      <tr>
        <td>OFF-PEAK HOURS</td>
        <td>RM3/min</td>
        <td>RM4/min</td>
      </tr>
    </tbody>
  </table>
  
  {/* Equipment Section */}
  <div className="section-header">EQUIPMENT</div>
  <table className="info-table equipment-table">
    <tbody>
      <tr>
        <td>Ball (For Sale)</td>
        <td>RM9 /ball</td>
      </tr>
      <tr>
        <td>Paddle Rental</td>
        <td>RM5 /paddle</td>
      </tr>
    </tbody>
  </table>
</div>
          {/* Join Us Button */}
          <a href="/book" className="cmn-button-court-rental">
          Book Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;