import Image from "next/image";
import { useState } from "react";
import ModalVideo from "react-modal-video";
import gallery_modal from "/public/images/gallery-modal.png";

const GalleryPopup = () => {
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

      <section className="section gallery-popup">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="section__header">
                <h2 className="section__header-title">Golf Club Video</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div
                className="gallery-popup__content wow fadeInUp"
                data-wow-duration="0.4s"
              >
                <Image src={gallery_modal} alt="Gallery" />
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

export default GalleryPopup;
