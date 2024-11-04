import Image from "next/image";
import { useState } from "react";
import ModalVideo from "react-modal-video";
import FacilitySingleSlider from "./FacilitySingleSlider";
import RightSide from "./RightSide";
import details_thumb from "/public/images/blog/details-thumb.png";
import gallery_modal from "/public/images/gallery-modal.png";

const FacilityBody = () => {
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

      <section className="section details">
        <div className="container">
          <div className="row section__row">
            <div className="col-12 col-xl-8 section__col">
              <div className="facility__details">
                <div className="facility__thumb">
                  <Image src={details_thumb} alt="Facility Details" />
                </div>
                <div className="facility__single">
                  <h2>Expert Trainer</h2>
                  <p>
                    On the other hand, we denounce with righteous indignation
                    and dislike men who are so beguiled and demoralized by the
                    charms of pleasure of the moment, so blinded by desire, that
                    they cannot foresee the pain and trouble that are bound to
                    ensue; and equal blame belongs to those who fail in their
                    duty through weakness of will, which is the same as saying
                    through shrinking from toil and pain. These cases are
                    perfectly simple and easy to distinguish. In a free hour,
                    when our power of choice is untrammelled and when nothing
                    prevents our being able to do what we like best,
                  </p>
                </div>
                <div className="facility__overview">
                  <div className="row section__row">
                    <div className="col-md-6 section__col">
                      <div className="facility__overview-single">
                        <div className="facility__overview-single-thumb">
                          <i className="golftio-flag"></i>
                        </div>
                        <div className="facility__overview-single-content">
                          <p>Professional Team</p>
                          <p className="secondary-text">
                            Modern equipment & coaching
                          </p>
                        </div>
                      </div>
                      <div className="facility__overview-single">
                        <div className="facility__overview-single-thumb">
                          <i className="golftio-shot-great-upper"></i>
                        </div>
                        <div className="facility__overview-single-content">
                          <p>Professional Trainings</p>
                          <p className="secondary-text">
                            Modern equipment & coaching
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 section__col">
                      <div className="facility__overview-single">
                        <div className="facility__overview-single-thumb">
                          <i className="golftio-sticks"></i>
                        </div>
                        <div className="facility__overview-single-content">
                          <p>Professional Team</p>
                          <p className="secondary-text">
                            Modern equipment & coaching
                          </p>
                        </div>
                      </div>
                      <div className="facility__overview-single">
                        <div className="facility__overview-single-thumb">
                          <i className="golftio-hands"></i>
                        </div>
                        <div className="facility__overview-single-content">
                          <p>Individual Support</p>
                          <p className="secondary-text">
                            Modern equipment & coaching
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="facility__popup">
                  <Image src={gallery_modal} alt="Facility Details" />
                  <div className="play-wrapper">
                    <button
                      // href="https://www.youtube.com/watch?v=RvreULjnzFo"
                      // target="_blank"
                      title="Youtube Video Player"
                      className="play-btn"
                      onClick={() => setOpen(true)}
                    >
                      <i className="fa-solid fa-play"></i>
                    </button>
                  </div>
                </div>
                <div className="facility__single">
                  <p>
                    On the other hand, we denounce with righteous indignation
                    and dislike men who are so beguiled and demoralized by the
                    charms of pleasure of the moment, so blinded by desire, that
                    they cannot foresee the pain and trouble that are bound to
                    ensue; and equal blame belongs to those who fail in their
                    duty through weakness of will, which is the same as saying
                    through shrinking from toil and pain. These cases are
                    perfectly simple and easy to distinguish. In a free hour,
                    when our power of choice is untrammelled and when nothing
                    prevents our being able to do what we like best,
                  </p>
                </div>

                {/* Facility Single Slider */}
                <FacilitySingleSlider />

                <div className="facility__single">
                  <p>
                    On the other hand, we denounce with righteous indignation
                    and dislike men who are so beguiled and demoralized by the
                    charms of pleasure of the moment, so blinded by desire, that
                    they cannot foresee the pain and trouble that are bound to
                    ensue; and equal blame belongs to those who fail in their
                    duty through weakness of will, which is the same as saying
                    through shrinking from toil and pain. These cases are
                    perfectly simple and easy to distinguish. In a free hour,
                    when our power of choice is untrammelled and when nothing
                    prevents our being able to do what we like best,
                  </p>
                </div>
              </div>
            </div>
            {/* Right Side */}
            <RightSide />
          </div>
        </div>
      </section>
    </>
  );
};

export default FacilityBody;
