import Image from "next/image";
import Link from "next/link";
import Social from "../social/Social";
import training_thumb from "/public/images/training-thumb.png";

const TrainingDetailsBody = () => {
  return (
    <section className="section details">
      <div className="container">
        <div className="row section__row">
          <div className="col-12 col-xl-4 section__col">
            <div className="sidebar wow fadeInUp" data-wow-duration="0.4s">
              <div className="sidebar__single">
                <h5>Training Position</h5>
                <div className="sidebar__tab">
                  <ul>
                    <li>
                      <Link
                        href="/training-details"
                        className="training-tab-btn"
                      >
                        <i className="fa-solid fa-angle-right"></i>Body Position
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/training-details"
                        className="training-tab-btn"
                      >
                        <i className="fa-solid fa-angle-right"></i>Body Rotation
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/training-details"
                        className="training-tab-btn"
                      >
                        <i className="fa-solid fa-angle-right"></i>Correct Grip
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/training-details"
                        className="training-tab-btn"
                      >
                        <i className="fa-solid fa-angle-right"></i>Chip Shot
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/training-details"
                        className="training-tab-btn"
                      >
                        <i className="fa-solid fa-angle-right"></i>Putt Shot
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/training-details"
                        className="training-tab-btn"
                      >
                        <i className="fa-solid fa-angle-right"></i>Grip Types
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-xl-8 section__col">
            <div className="training__details">
              <div className="training__details-inner">
                <div className="training__details-thumb">
                  <Image src={training_thumb} alt="Training Details" />
                </div>
                <div className="training__details-content">
                  <h2>Chip Shot</h2>
                  <p>
                    We shared how the basic chip shot should be. You can contact
                    us for any question you may have about this course. A chip
                    is a low shot that is played along the ground and spends
                    little time in the air. Chip shots are generally hit close
                    to the green where the golfer does not need to carry the
                    ball very far in the air and just wants to get the ball
                    started and let it roll out towards the hole like a putt.
                  </p>
                  <div className="training__details-tab">
                    <div
                      className="training__details-tab-btn-wrapper"
                      id="training-tab"
                      role="tablist"
                    >
                      <div role="presentation">
                        <button
                          className="training__details-tab-btn active"
                          id="trainingReliability-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#trainingReliability"
                          type="button"
                          role="tab"
                          aria-controls="trainingReliability"
                          aria-selected="true"
                        >
                          Reliability
                        </button>
                      </div>
                      <div role="presentation">
                        <button
                          className="training__details-tab-btn"
                          id="trainingObedience-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#trainingObedience"
                          type="button"
                          role="tab"
                          aria-controls="trainingObedience"
                          aria-selected="false"
                        >
                          Obedience
                        </button>
                      </div>
                    </div>
                    <div
                      className="training__details-tab__content tab-content"
                      id="training-tabContent"
                    >
                      <div
                        className="training__details-tab-single tab-pane fade show active"
                        id="trainingReliability"
                        role="tabpanel"
                        aria-labelledby="trainingReliability-tab"
                        tabIndex="0"
                      >
                        <p>
                          At vero eos et accusamus et iusto odio dignissimos
                          ducimus qui blanditiis praesentium voluptatum deleniti
                          atque corrupti quos dolores et quas molestias
                          excepturi sint occaecati cupiditate non provident,
                          similique sunt in culpa qui officia deserunt mollitia
                          animi, id est laborum et dolorum fuga. Et harum quidem
                          rerum facilis est et expedita distinctio. Nam libero
                          tempore, cum soluta nobis est eligendi optio cumque
                          nihil impedit quo...
                        </p>
                      </div>
                      <div
                        className="training__details-tab-single tab-pane fade"
                        id="trainingObedience"
                        role="tabpanel"
                        aria-labelledby="trainingObedience-tab"
                        tabIndex="0"
                      >
                        <p>
                          At vero eos et accusamus et iusto odio dignissimos
                          ducimus qui blanditiis praesentium voluptatum deleniti
                          atque corrupti quos dolores et quas molestias
                          excepturi sint occaecati cupiditate non provident,
                          similique sunt in culpa qui officia deserunt mollitia
                          animi, id est laborum et dolorum fuga. Et harum quidem
                          rerum facilis est et expedita distinctio. Nam libero
                          tempore, cum soluta nobis est eligendi optio cumque
                          nihil impedit quo...
                        </p>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div>
                    {/* social */}
                    <Social
                      items={[
                        ["fa-facebook-f", "/"],
                        ["fa-twitter", "/"],
                        ["fa-linkedin-in", "/"],
                        ["fa-square-instagram", "/"],
                      ]}
                    />
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

export default TrainingDetailsBody;
