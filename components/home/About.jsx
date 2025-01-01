import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const About = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <section
      className="section about--secondary wow fadeInUp"
      data-wow-duration="0.4s"
    >
      {/* Background Image */}
      <div className="about-image-container">
        <img
          src="/images/home/about.jpg"
          alt="Background Image"
          className="about-background-image"
        />
      </div>

      {/* Main Content */}
      <div className="container-fluid">
        <div className="about--secondary__content-wrapper">
          <div className="row justify-content-center align-items-center vh-100">
            <div className="col-lg-10 col-xxl-6 offset-xxl-1 text-center">
              <div className="section__content">
                {/* Title and Introduction */}
                <h5 className="section__content-sub-title">About us</h5>
                <h2 className="section__content-title">Welcome To Picklesquad</h2>
                <p className="section__content-text">
                  We are not just a pickleball destination; it’s a revolutionary
                  experience and awesome feeling you get from playing pickleball
                  games on our world-class courts and hanging out with even
                  cooler people.
                </p>
                <p className="section__content-text">
                  Step onto the court with us, and together, let’s script the
                  next chapter of pickleball excitement. Your story begins here.
                </p>

                {/* Features Section */}
                <div className="row">
                  <div className="col-12">
                    <div className="about--secondary__single">
                      <div className="row section__row justify-content-center">
                        {/* Professional Team */}
                        <div className="col-sm-6 col-md-4 text-center">
                          <div className="about--secondary__single-item">
                            <div className="about--secondary__single-item__icon">
                              <img
                                src="/images/Picklesquad_image/favicon-02.png"
                                alt="Professional Team Icon"
                              />
                            </div>
                            <h6>Professional Team</h6>
                            <Link href="/about" className="cmn-button--learn-more">
                              Learn More
                            </Link>
                          </div>
                        </div>

                        {/* Professional Trainings */}
                        <div className="col-sm-6 col-md-4 text-center">
                          <div className="about--secondary__single-item">
                            <div className="about--secondary__single-item__icon">
                              <img
                                src="/images/Picklesquad_image/favicon-03.png"
                                alt="Professional Trainings Icon"
                              />
                            </div>
                            <h6>Professional Trainings</h6>
                            <Link href="/about" className="cmn-button--learn-more">
                              Learn More
                            </Link>
                          </div>
                        </div>

                        {/* Facilities */}
                        <div className="col-sm-6 col-md-4 text-center">
                          <div className="about--secondary__single-item">
                            <div className="about--secondary__single-item__icon">
                              <img
                                src="/images/Picklesquad_image/favicon-04.png"
                                alt="Facilities Icon"
                              />
                            </div>
                            <h6>Facilities</h6>
                            <Link href="/about" className="cmn-button--learn-more">
                              Learn More
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
