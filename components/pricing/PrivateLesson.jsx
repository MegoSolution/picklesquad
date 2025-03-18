const JoinUs = () => {
  return (
    <div id="Intro" className="coach-session-section">
      <div className="image-container-coach">
        <img
          src="/images/pricing/private-lesson.jpg"
          alt="Court Rental"
          className="session-image"
        />
      </div>
      <div className="text-container-coach">
        <div className="session-content">
          <h2 className="title-coach">
            Private Lessons
          </h2>
          
         {/* Table Section - Responsive Version */}
<div className="pricing-container-2">
  {/* Desktop Table */}
  <div className="desktop-pricing">
    <div className="pricing-table-wrapper">
      <table className="pricing-table-exact">
        {/* ... existing table structure ... */}
        <thead>
          <tr className="header-row">
            <th>Session</th>
            <th>1</th>
            <th>2</th>
            <th>5</th>
            <th>10</th>
          </tr>
        </thead>
        <tbody>
          <tr className="price-row">
            <td></td>
            <td>
              <span className="price-amount">RM220</span>
            </td>
            <td>
              <span className="price-amount">RM400</span>
              <div className="price-session">(RM200/session)</div>
            </td>
            <td>
              <span className="price-amount">RM950</span>
              <div className="price-session">(RM190/session)</div>
            </td>
            <td>
              <span className="price-amount">RM1800</span>
              <div className="price-session">(RM180/session)</div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  {/* Mobile Vertical Layout */}
  <div className="mobile-pricing">
    <div className="pricing-vertical">
    <div className="pricing-row">
        <div className="session-col">Session</div>
        <div className="price-col"></div>
      </div>
      <div className="pricing-row">
        <div className="session-col">1 Session</div>
        <div className="price-col">
          <span className="price-amount">RM220</span>
        </div>
      </div>
      <div className="pricing-row">
        <div className="session-col">2 Sessions</div>
        <div className="price-col">
          <span className="price-amount">RM400</span>
          <span className="price-session">(RM200/session)</span>
        </div>
      </div>
      <div className="pricing-row">
        <div className="session-col">5 Sessions</div>
        <div className="price-col">
          <span className="price-amount">RM950</span>
          <span className="price-session">(RM190/session)</span>
        </div>
      </div>
      <div className="pricing-row">
        <div className="session-col">10 Sessions</div>
        <div className="price-col">
          <span className="price-amount">RM1800</span>
          <span className="price-session">(RM180/session)</span>
        </div>
      </div>
    </div>
  </div>
</div>
          
          <div className="pricing-notes">
            <p>*Equipment will be provided</p>
            <p>*Additional Pax: RM 60.00 per pax per hour</p>
            <p>*Max 4 pax per hour</p>
            <p>*60 mins session</p>
          </div>

          <h2 className="title-coach">
            Add Ons
          </h2>

          <div className="pricing-add-ons">
            
          <ul className="add-ons-list">
              <li>additional Pax: RM 60.00 per pax per hour</li>
              <li>additional 30 minutes: RM40/pax</li>
            </ul>
          </div>

        

          {/* Join Us Button */}
          <a href="/book" className="cmn-button-court-rental">
            Enrol Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;