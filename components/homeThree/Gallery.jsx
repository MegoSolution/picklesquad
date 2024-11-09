import Image from "next/image";
import Link from "next/link";
import five from "/public/images/gallery/five.png";
import four from "/public/images/gallery/four.png";
import one from "/public/images/gallery/one.png";
import three from "/public/images/gallery/three.png";
import two from "/public/images/gallery/two.png";

const Gallery = () => {
  return (
    <section className="section gallery">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <div
              className="section__header wow fadeInUp"
              data-wow-duration="0.4s"
            >
              <h5 className="section__header-sub-title">Gallery</h5>
              <h2 className="section__header-title">Our Latest Photos</h2>
              <p>
                Golftio Sports Club is a golf club with a history that goes back
                to XX century. From a cricket club to soccer tournaments,
              </p>
              <div className="section__header-cta">
                <Link href="/gallery" className="cmn-button">
                  See all Image
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row section__row align-items-center">
          <div className="col-sm-6 col-lg-4 col-xl-4 section__col">
            <div className="gallery__thumb">
              <div className="gallery__thumb-single">
                <Image src={one} alt="Image" />
              </div>
              <div className="gallery__thumb-single">
                <Image src={two} alt="Image" />
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-xl-4 section__col d-none d-lg-block">
            <div className="gallery__thumb">
              <div className="gallery__thumb-single">
                <Image src={three} alt="Image" />
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-4 section__col">
            <div className="gallery__thumb">
              <div className="gallery__thumb-single">
                <Image src={four} alt="Image" />
              </div>
              <div className="gallery__thumb-single">
                <Image src={five} alt="Image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
