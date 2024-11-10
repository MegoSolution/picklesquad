import Image from "next/image";
import Link from "next/link";
import golf_ball from "/public/images/golf-ball.png";

const Overview = () => {
  return (
    <div className="overview section section--space-top">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-10 col-xxl-9 order-last order-xl-first">
            <div
              className="overview__inner wow fadeInUp"
              data-wow-duration="0.4s"
            >
              <div className="row section__row">
                <div className="col-sm-6 col-lg-3 section__col">
                  <div className="overview__inner-card">
                    <div className="overview__inner-card__icon">
                      <i className="golftio-ball"></i>
                    </div>
                    <div className="overview__inner-card__content">
                      <h5>
                        <Link href="/training-details">Golf Course</Link>
                      </h5>
                      <p className="secondary-text">
                        Lorem Ipsum is simply dummy text
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-3 section__col">
                  <div className="overview__inner-card">
                    <div className="overview__inner-card__icon">
                      <i className="golftio-shot-great-upper"></i>
                    </div>
                    <div className="overview__inner-card__content">
                      <h5>
                        <Link href="/training-details">Expert Trainer</Link>
                      </h5>
                      <p className="secondary-text">
                        Lorem Ipsum is simply dummy text
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-3 section__col">
                  <div className="overview__inner-card">
                    <div className="overview__inner-card__icon">
                      <i className="golftio-gym"></i>
                    </div>
                    <div className="overview__inner-card__content">
                      <h5>
                        <Link href="/training-details">Fitnes Center</Link>
                      </h5>
                      <p className="secondary-text">
                        Lorem Ipsum is simply dummy text
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-3 section__col">
                  <div className="overview__inner-card">
                    <div className="overview__inner-card__icon">
                      <i className="golftio-flag"></i>
                    </div>
                    <div className="overview__inner-card__content">
                      <h5>
                        <Link href="/training-details">Golf Club</Link>
                      </h5>
                      <p className="secondary-text">
                        Lorem Ipsum is simply dummy text
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-2 col-xxl-3 d-none d-xl-block">
            <div className="overview__thumb text-center">
              <Image src={golf_ball} alt="Image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
