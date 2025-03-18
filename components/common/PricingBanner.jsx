import Link from "next/link";

const PricingBanner = () => {
  return (
    <section className="banner--secondary-pricing">
      <div className="container pricing-container">
        <div className="row justify-content-end">
          <div className="col-12 col-lg-6 col-xl-7">
            <div
              className="banner__content wow fadeInUp"
              data-wow-duration="0.4s"
            >
              
              <h1 className="banner__content-pricing-title">
              Ready, Set, Play!
              </h1>
              <p className="primary-text banner__content-text">
              Step onto the best pickleball courts in town and elevate your game!
Whether you're here to practice, compete, or enjoy a casual match
with friends, our top-quality facilities offer an unforgettable
experience.

Book your session and get in on the action today!
              </p>
              
                <Link href="/join-club" className="cmn-button">
                Book Now
                </Link>
        
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingBanner;
