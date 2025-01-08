import Link from "next/link";

const BigBanner = () => {
  return (
    <section className="banner--secondary">
      <div className="container">
        <div className="row justify-content-end">
          <div className="col-12 col-lg-6 col-xl-7">
            <div
              className="banner__content wow fadeInUp"
              data-wow-duration="0.4s"
            >
              
              <h1 className="banner__content-title">
              Ready to Pick Up The Paddle?
              </h1>
              <p className="primary-text banner__content-text">
              Start experiencing the awesomeness of pickleball
with your family and friends by booking one of our
courts – or if you feel like learning how to nail that
perfect serve, feel free to take up a lesson.
              </p>
             
                <Link href="/sign-in" className="cmn-button">
                Let's Play
                </Link>
                <Link
                  href="/programmes"
                  className="cmn-button"
                >
                  First Time
                </Link>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BigBanner;
