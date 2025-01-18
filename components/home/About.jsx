import Link from "next/link";

const About = () => {
  return (
    <section
      className="section about--secondary wow fadeInUp"
      style={{ marginTop: 0, paddingTop: 0 }}
      data-wow-duration="0.4s"
    >
      {/* Background Image */}
      <div className="about-image-container" style={{ margin: 0, padding: 0 }}>
        <img
          src="/images/home/about.jpg"
          alt="Background Image"
          className="about-background-image"
        />
      </div>

      {/* Main Content */}
      <div className="container-fluid text-center">
        <div className="about--secondary__content-wrapper about-text">
          <h5>About us</h5>
          <h2>Welcome To Picklesquad</h2>
          <div className="section__content-text">
            <p>
              We are not just a pickleball destination; it’s a revolutionary
              experience and awesome feeling you get from playing pickleball
              games on our world-class courts and hanging out with even cooler
              people.
            </p>
            <p>
              Step onto the court with us, and together, let’s script the next
              chapter of pickleball excitement. Your story begins here.
            </p>
          </div>

          {/* Features Section */}
          <div className="row justify-content-center padding-about">
            {/* Professional Team */}
            <div className="col-12 col-md-4 text-center">
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
            <div className="col-12 col-md-4 text-center">
              <div className="about--secondary__single-item">
                <div className="about--secondary__single-item__icon">
                  <img
                    src="/images/Picklesquad_image/favicon-03.png"
                    alt="Professional Trainings Icon"
                  />
                </div>
                <h6>Professional Trainings</h6>
                <Link href="/programmes" className="cmn-button--learn-more">
                  Learn More
                </Link>
              </div>
            </div>

            {/* Facilities */}
            <div className="col-12 col-md-4 text-center">
              <div className="about--secondary__single-item">
                <div className="about--secondary__single-item__icon">
                  <img
                    src="/images/Picklesquad_image/favicon-04.png"
                    alt="Facilities Icon"
                  />
                </div>
                <h6>Facilities</h6>
                <Link href="/pricing" className="cmn-button--learn-more">
                  Learn More
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
