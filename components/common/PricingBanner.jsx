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
              Book Your Session
              </h1>
              <p className="primary-text banner__content-text">
              Experience the excitement of pickleball on our premium, state-of-the-art courts. Designed with precision, our court surface ensures excellent grip, minimizing slips and elevating your gameplay to the next level.</p>
              
                <Link href="/join-club" className="cmn-button">
                View Schedule
                </Link>
        
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingBanner;
