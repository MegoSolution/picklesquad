import Link from "next/link";

const BigBanner = () => {
  return (
    <section className="banner--secondary">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6 col-xl-7">
            <div
              className="banner__content wow fadeInUp"
              data-wow-duration="0.4s"
            >
              <h5 className="banner__content-sub-title">
                Play Golf Like A Pro
              </h5>
              <h1 className="banner__content-title">
                Get the best golf experience
              </h1>
              <p className="primary-text banner__content-text">
                Our staff are always on hand to make all members feel welcome.
                Fully dedicated to golf lovers.
              </p>
              <div className="banner__content-cta">
                <Link href="/join-club" className="cmn-button">
                  Join Our Club
                </Link>
                <Link
                  href="/about"
                  className="cmn-button cmn-button--secondary"
                >
                  About Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BigBanner;
