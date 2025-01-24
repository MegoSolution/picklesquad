import Link from "next/link";

function PricingPlan() {
  return (
    <section
      className="faq pricing-plan"
      style={{
        backgroundImage: "url('/images/pricing-02.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container">
        {/* Opening Hours */}
        <h3 className="pricing-header">
  <img 
    src="/images/pricing/time.png" 
    alt="Clock Icon" 
  />
  <div className="pricing-header-text">
    <span className="pricing-header-title">Daily Opening Hours</span>
    <span className="pricing-header-time">8AM - 12AM</span>
  </div>
</h3>


        {/* Peak and Off-Peak Hours */}
        <div className="table-container-pricing">
          <div className="table-row-pricing">
            <div className="table-left-pricing">PEAK HOURS</div>
            <div className="table-right-pricing">
              Weekend & Public Holiday<br />
              Weekday 8AM - 11AM, 5PM - 12AM
            </div>
          </div>
          <div className="table-row-pricing">
            <div className="table-left-pricing">OFF-PEAK HOURS</div>
            <div className="table-right-pricing">
              Weekday 11AM - 4PM
            </div>
          </div>
        </div>


        {/* Peak Hours Pricing Table */}
        <div className="pricing-table-container">
          <h3 className="pricing-header">PEAK HOURS</h3>
          <table className="pricing-table">
            <thead>
              <tr>
                <th className="pricing-label">REGULAR COURT</th>
                <th className="pricing-label">VIP COURT</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="pricing-value">RM 70</td>
                <td className="pricing-value">RM 80</td>
              </tr>
              
            </tbody>
          </table>
        </div>

        

        {/* Off Peak Hours Pricing Table */}
        <div className="pricing-table-container">
          <h3 className="pricing-header">OFF PEAK HOURS</h3>
          <table className="pricing-table">
            <thead>
              <tr>
                <th className="pricing-label">REGULAR COURT</th>
                <th className="pricing-label">VIP COURT</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="pricing-value">RM 50</td>
                <td className="pricing-value">RM 60</td>
              </tr>
              
            </tbody>
          </table>
        </div>

        {/* Spacer */}
        <div className="spacer"></div>

        {/* Equipment */}
        <h3 className="pricing-header">EQUIPMENT</h3>
        <div className="table-container-pricing">
          <div className="table-row-pricing">
            <div className="table-left-pricing">BALL (FOR SALE)</div>
            <div className="table-right-pricing">RM10 /ball</div>
          </div>
          <div className="table-row-pricing">
            <div className="table-left-pricing">PADDLE RENTAL</div>
            <div className="table-right-pricing">RM5 /paddle</div>
          </div>
        </div>

        {/* Spacer */}
        <div className="spacer"></div>

        {/* Call to Action */}
        <div className="cta-section text-center">
          <Link href="/schedule" className="cmn-button">
            View Schedule
          </Link>
        </div>

        {/* Spacer */}
        <div className="spacer"></div>
      </div>
    </section>
  );
}

export default PricingPlan;
