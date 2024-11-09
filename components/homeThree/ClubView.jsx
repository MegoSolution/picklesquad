import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ModalVideo from "react-modal-video";
import club_view_thumb from "/public/images/club-view-thumb.png";

const ClubView = () => {
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

      <section className="section club-view">
        <div className="container">
          <div className="row align-items-center section__row">
            <div className="col-lg-6 col-xl-6 section__col">
              <div className="section__content">
                <h5 className="section__content-sub-title">Club View</h5>
                <h2 className="section__content-title">
                  A unique training with club experts
                </h2>
                <p className="section__content-text">
                  We offer a lot of courses of varying difficulty and beautiful
                  scenery that golfers of all skill levels can enjoy. You will
                  learn golf from professionals with our competent and
                  experienced staff. You will have a great fun with our
                  magnificent illuminated field.
                </p>
                <div className="section__content-inner">
                  <ul>
                    <li>
                      <i className="golftio-pin-checked"></i>300+ Golf
                      Competitions
                    </li>
                    <li>
                      <i className="golftio-pin-checked"></i>Proficient
                      Instructors
                    </li>
                    <li>
                      <i className="golftio-pin-checked"></i>Amateur
                      Championships
                    </li>
                    <li>
                      <i className="golftio-pin-checked"></i>Individual Support{" "}
                    </li>
                  </ul>
                </div>
                <div className="section__content-cta">
                  <Link href="/join-club" className="cmn-button">
                    Join Our Club
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xl-5 offset-xl-1 section__col d-none d-lg-block">
              <div
                className="join-club__thumb wow fadeInUp"
                data-wow-duration="0.4s"
              >
                <Image src={club_view_thumb} alt="Image" />
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ClubView;
