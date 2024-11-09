import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ModalVideo from "react-modal-video";
import about_modal from "/public/images/about-modal.png";
import about_two_thumb from "/public/images/about-two-thumb.png";

const About = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      {/* TODO: Video Modal  */}
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="muczNvx9fgg"
        onClose={() => setOpen(false)}
      />

      <section
        className="section about--secondary wow fadeInUp"
        data-wow-duration="0.4s"
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-xxl-5 d-none d-lg-block">
              <div className="about--secondary__thumb dir-rtl">
                <Image src={about_two_thumb} alt="Image" className="unset" />
                <div className="about--secondary__thumb-experience">
                  <h3>
                    <span className="odometer" data-odometer-final="30"></span>{" "}
                    <span>+</span>
                  </h3>
                  <p>
                    Years <br /> of experience
                  </p>
                </div>
                <div className="about--secondary__modal">
                  <Image src={about_modal} alt="img" />
                  <div className="play-wrapper">
                    <button
                      title="Youtube Video Player"
                      className="play-btn"
                      onClick={() => setOpen(true)}
                    >
                      <i className="fa-solid fa-play"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-xxl-6 offset-xxl-1">
              <div className="section__content">
                <h5 className="section__content-sub-title">About us</h5>
                <h2 className="section__content-title">
                  We have managed golf courses in your city
                </h2>
                <p className="section__content-text">
                  We offer a lot of courses of varying difficulty and beautiful
                  scenery that golfers of all skill levels can enjoy. You will
                  learn golf from professionals with our competent and
                  experienced staff.{" "}
                </p>
                <div className="row">
                  <div className="col-sm-12 col-md-11 col-lg-12">
                    <div className="about--secondary__single">
                      <div className="row section__row">
                        <div className="col-6 col-sm-4 section__col">
                          <div className="about--secondary__single-item">
                            <div className="about--secondary__single-item__icon">
                              <i className="golftio-flag"></i>
                            </div>
                            <h6>Professional Team</h6>
                          </div>
                        </div>
                        <div className="col-6 col-sm-4 section__col">
                          <div className="about--secondary__single-item">
                            <div className="about--secondary__single-item__icon">
                              <i className="golftio-shot-upper"></i>
                            </div>
                            <h6>Professional Trainings</h6>
                          </div>
                        </div>
                        <div className="col-6 col-sm-4 section__col">
                          <div className="about--secondary__single-item">
                            <div className="about--secondary__single-item__icon">
                              <i className="golftio-shot-ground"></i>
                            </div>
                            <h6>Facilities with Gym</h6>
                          </div>
                        </div>
                      </div>
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
    </>
  );
};

export default About;
