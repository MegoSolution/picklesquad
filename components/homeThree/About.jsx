import Image from "next/image";
import Link from "next/link";
import about_three_thumb from "/public/images/about-three-thumb.png";

const About = () => {
  return (
    <section className="section about--tertiary">
      <div className="container">
        <div className="row section__row align-items-center">
          <div className="col-lg-6 col-xl-6 col-xxl-5 section__col">
            <div
              className="about--tertiary__thumb wow fadeInUp"
              data-wow-duration="0.4s"
            >
              <Image src={about_three_thumb} alt="Image" />
              <div className="about--tertiary__thumb-experience">
                <h3>
                  {/* <span className="odometer" data-odometer-final="30"></span>{" "} */}
                  <span>30 +</span>
                </h3>
                <p>
                  Years <br /> of experience
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-xl-6 col-xxl-6 offset-xxl-1 section__col">
            <div className="section__content">
              <h5 className="section__content-sub-title">About us</h5>
              <h2 className="section__content-title">
                We are here to bring golf closer to you.
              </h2>

              <div className="about--secondary__tabs">
                <div
                  className="about--secondary__tabs-btn-wrapper"
                  id="about-tab"
                  role="tablist"
                >
                  <div role="presentation">
                    <button
                      className="about--secondary__tabs-btn active"
                      id="mission-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#mission"
                      type="button"
                      role="tab"
                      aria-controls="mission"
                      aria-selected="true"
                    >
                      Our Mission
                    </button>
                  </div>
                  <div role="presentation">
                    <button
                      className="about--secondary__tabs-btn"
                      id="vision-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#vision"
                      type="button"
                      role="tab"
                      aria-controls="vision"
                      aria-selected="false"
                    >
                      Our Vision
                    </button>
                  </div>
                  <div role="presentation">
                    <button
                      className="about--secondary__tabs-btn"
                      id="goal-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#goal"
                      type="button"
                      role="tab"
                      aria-controls="goal"
                      aria-selected="false"
                    >
                      Our Goal
                    </button>
                  </div>
                </div>
                <hr />
                <div className="tab-content" id="about-tabContent">
                  <div
                    className="about--secondary__tabs-content tab-pane fade show active"
                    id="mission"
                    role="tabpanel"
                    aria-labelledby="mission-tab"
                    tabIndex="0"
                  >
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the
                      industry&#39;s standard dummy text ever since the 1500s,
                      when an unknown printer took a galley of type and
                      scrambled it to make a type specimen book. It has survived
                      not only five centuries, but also the leap into
                      electronic...
                    </p>
                  </div>
                  <div
                    className="about--secondary__tabs-content tab-pane fade"
                    id="vision"
                    role="tabpanel"
                    aria-labelledby="vision-tab"
                    tabIndex="0"
                  >
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the
                      industry&#39;s standard dummy text ever since the 1500s,
                      when an unknown printer took a galley of type and
                      scrambled it to make a type specimen book. It has survived
                      not only five centuries, but also the leap into
                      electronic...
                    </p>
                  </div>
                  <div
                    className="about--secondary__tabs-content tab-pane fade"
                    id="goal"
                    role="tabpanel"
                    aria-labelledby="goal-tab"
                    tabIndex="0"
                  >
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the
                      industry&#39;s standard dummy text ever since the 1500s,
                      when an unknown printer took a galley of type and
                      scrambled it to make a type specimen book. It has survived
                      not only five centuries, but also the leap into
                      electronic...
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
