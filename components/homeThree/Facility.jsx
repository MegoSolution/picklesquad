import Image from "next/image";
import Link from "next/link";
import large_golf_ball from "/public/images/large-golf-ball.png";

const Facility = () => {
  return (
    <section
      className="section facility facility--secondary wow fadeInUp"
      data-wow-duration="0.4s"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <div className="section__header">
              <h5 className="section__header-sub-title">Facility</h5>
              <h2 className="section__header-title">Our Best Facility</h2>
              <p>
                Golftio Sports Club is a golf club with a history that goes back
                to XX century. From a cricket club to soccer tournaments,
              </p>
              <div className="section__header-cta">
                <Link
                  href="/facility"
                  className="cmn-button cmn-button--secondary"
                >
                  See All Facility
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row section__row align-items-center">
          <div className="col-sm-6 col-lg-4 col-xxl-3 section__col">
            <div className="facility--secondary__cards">
              <div className="facility__card">
                <div className="facility__card-icon">
                  <i className="golftio-ball"></i>
                </div>
                <div className="facility__card-content">
                  <h5>
                    <Link href="/facility/1">Golf Course</Link>
                  </h5>
                  <p className="secondary-text">
                    Lorem Ipsum is simply dummy text of the printing...
                  </p>
                </div>
              </div>
              <div className="facility__card">
                <div className="facility__card-icon">
                  <i className="golftio-shot-great-upper"></i>
                </div>
                <div className="facility__card-content">
                  <h5>
                    <Link href="/facility/1">Expert Trainer</Link>
                  </h5>
                  <p className="secondary-text">
                    Lorem Ipsum is simply dummy text of the printing...
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-xxl-6 section__col d-none d-lg-block">
            <div className="facility--secondary__thumbs text-center">
              <Image src={large_golf_ball} alt="Image" />
            </div>
          </div>
          <div className="col-sm-6 col-lg-4 col-xxl-3 section__col">
            <div className="facility--secondary__cards">
              <div className="facility__card">
                <div className="facility__card-icon">
                  <i className="golftio-gym"></i>
                </div>
                <div className="facility__card-content">
                  <h5>
                    <Link href="/facility/1">Fitnes Center</Link>
                  </h5>
                  <p className="secondary-text">
                    Lorem Ipsum is simply dummy text of the printing...
                  </p>
                </div>
              </div>
              <div className="facility__card">
                <div className="facility__card-icon">
                  <i className="golftio-flag"></i>
                </div>
                <div className="facility__card-content">
                  <h5>
                    <Link href="/facility/1">Golf Club</Link>
                  </h5>
                  <p className="secondary-text">
                    Lorem Ipsum is simply dummy text of the printing...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facility;
