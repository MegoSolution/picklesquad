import Link from "next/link";

function PricingPlan() {
  return (
    <>
      <section className="faq pricing-plan">
        <div className="container">
          {/* Header Section */}
          <div className="section-header text-center">
            <h2 className="section-title">Pricing</h2>
            <p>Ready to Pick Up The Paddle?</p>
            <p>
              Start experiencing the awesomeness of pickleball with your family
              and friends by booking one of our courts – or if you feel like
              learning how to nail that perfect serve, feel free to take up a
              lesson.
            </p>
          </div>

          {/* Pricing Details */}
          <div className="pricing-details">
            <div className="row">
              {/* Peak Hours */}
              <div className="col-md-6">
                <div className="pricing-card">
                  <h4>Peak Hours</h4>
                  <p>Weekday: 12PM - 4PM</p>
                  <p>Weekend & Public Holiday: 8AM - 11AM, 5PM - 12AM</p>
                  <div className="price-table">
                    <div>
                      <span>Regular Court:</span>
                      <span>RMxx</span>
                    </div>
                    <div>
                      <span>VIP Court:</span>
                      <span>RMxx</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Off-Peak Hours */}
              <div className="col-md-6">
                <div className="pricing-card">
                  <h4>Off-Peak Hours</h4>
                  <p>Weekday: 8AM - 11AM</p>
                  <p>Weekday: 5PM - 12AM</p>
                  <div className="price-table">
                    <div>
                      <span>Regular Court:</span>
                      <span>RMxx</span>
                    </div>
                    <div>
                      <span>VIP Court:</span>
                      <span>RMxx</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Equipment Details */}
          <div className="equipment-details text-center">
            <h4>Equipment</h4>
            <div className="equipment-table">
              <div>
                <span>Paddle Rental:</span>
                <span>RM5/paddle</span>
              </div>
              <div>
                <span>Ball (For Sale):</span>
                <span>RM9/ball</span>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="cta-section text-center">
            <Link href="/schedule" className="cmn-button">
              View Schedule
            </Link>
          </div>

           
        </div>
      </section>
    </>
  );
}

export default PricingPlan;
