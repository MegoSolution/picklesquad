import Image from "next/image";
import Link from "next/link";
import about_thumb from "/public/images/about-thumb.png";

const About = () => {
  return (
    <section className="section about">
      <div className="container">
        <div className="row section__row align-items-center">
          <div className="col-lg-6 col-xl-5 section__col order-last order-lg-first">
            <div
              className="about__thumb dir-rtl wow fadeInUp"
              data-wow-duration="0.4s"
            >
              <Image src={about_thumb} alt="Image" className="unset" />
              <div className="about__experience">
                <div className="about__experience-thumb">
                  <i className="golftio-ball"></i>
                </div>
                <h3>
                  {/* <span className="odometer" data-odometer-final="30"></span>{" "} */}
                  <span>30 +</span>
                </h3>
                <p>Years of experience</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-xl-6 offset-xl-1 section__col">
            <div className="section__content">
              <h5 className="section__content-sub-title">About us</h5>
              <h2 className="section__content-title">
                We Are The Best Golf Club In Your Local Area
              </h2>
              <p className="section__content-text">
                We offer a lot of courses of varying difficulty and beautiful
                scenery that golfers of all skill levels can enjoy. You will
                learn golf from professionals with our competent and experienced
                staff. You will have a great fun with our magnificent
                illuminated field.
              </p>
              <div className="about__section-inner">
                <div className="about__section-inner__single">
                  <div className="about__section-inner__single-thumb">
                    <i className="golftio-flag"></i>
                  </div>
                  <div className="about__section-inner__single-content">
                    <h5>Professional Team</h5>
                    <p className="secondary-text">
                      Modern & latest equipment with expert coaching
                    </p>
                  </div>
                </div>
                <div className="about__section-inner__single">
                  <div className="about__section-inner__single-thumb">
                    <i className="golftio-shot-great-upper"></i>
                  </div>
                  <div className="about__section-inner__single-content">
                    <h5>Professional Trainings</h5>
                    <p className="secondary-text">
                      Modern & latest equipment with expert coaching
                    </p>
                  </div>
                </div>
                <div className="about__section-inner__single">
                  <div className="about__section-inner__single-thumb">
                    <i className="golftio-sticks"></i>
                  </div>
                  <div className="about__section-inner__single-content">
                    <h5>Practice Facilities</h5>
                    <p className="secondary-text">
                      Modern & latest equipment with expert coaching
                    </p>
                  </div>
                </div>
              </div>
              <div className="section__content-cta">
                <Link href="/about" className="cmn-button">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
