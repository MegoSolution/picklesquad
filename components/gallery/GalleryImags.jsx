import Image from "next/image";
import five from "/public/images/gallery/five.png";
import four from "/public/images/gallery/four.png";
import one from "/public/images/gallery/one.png";
import three from "/public/images/gallery/three.png";
import two from "/public/images/gallery/two.png";

const GalleryImags = () => {
  return (
    <div className="section gallery wow fadeInUp" data-wow-duration="0.4s">
      <div className="container">
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
    </div>
  );
};

export default GalleryImags;
