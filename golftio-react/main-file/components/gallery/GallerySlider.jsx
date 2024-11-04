import Image from "next/image";
import { useRef } from "react";
import Slider from "react-slick";
import SliderNavigation from "../common/SliderNavigation";
import eight from "/public/images/gallery/eight.png";
import eleven from "/public/images/gallery/eleven.png";
import nine from "/public/images/gallery/nine.png";
import seven from "/public/images/gallery/seven.png";
import six from "/public/images/gallery/six.png";
import ten from "/public/images/gallery/ten.png";

const GallerySlider = () => {
  const sliderRef = useRef();

  const settings = {
    infinite: true,
    autoplay: true,
    focusOnSelect: true,
    slidesToShow: 5,
    speed: 900,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    centerMode: true,
    centerPadding: "200px",
    responsive: [
      {
        breakpoint: 1800,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 660,
        settings: {
          slidesToShow: 2,
          centerPadding: "40px",
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          centerPadding: "12px",
        },
      },
    ],
  };

  return (
    <section className="gallery-slider section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section__header--secondary">
              <div className="row align-items-center">
                <div className="col-lg-8">
                  <div className="section__header--secondary__content">
                    <h2>Horizontal scrolling</h2>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="section__header--secondary__cta">
                    <SliderNavigation
                      sliderRef={sliderRef}
                      cls="justify-content-lg-end"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Slider {...settings} className="gallery-slider__wrapper" ref={sliderRef}>
        <div className="gallery-slider__single">
          <Image src={six} alt="Gallery" />
        </div>
        <div className="gallery-slider__single">
          <Image src={seven} alt="Gallery" />
        </div>
        <div className="gallery-slider__single">
          <Image src={eight} alt="Gallery" />
        </div>
        <div className="gallery-slider__single">
          <Image src={nine} alt="Gallery" />
        </div>
        <div className="gallery-slider__single">
          <Image src={ten} alt="Gallery" />
        </div>
        <div className="gallery-slider__single">
          <Image src={eleven} alt="Gallery" />
        </div>
        <div className="gallery-slider__single">
          <Image src={six} alt="Gallery" />
        </div>
        <div className="gallery-slider__single">
          <Image src={seven} alt="Gallery" />
        </div>
        <div className="gallery-slider__single">
          <Image src={eight} alt="Gallery" />
        </div>
        <div className="gallery-slider__single">
          <Image src={nine} alt="Gallery" />
        </div>
        <div className="gallery-slider__single">
          <Image src={ten} alt="Gallery" />
        </div>
        <div className="gallery-slider__single">
          <Image src={eleven} alt="Gallery" />
        </div>
      </Slider>
    </section>
  );
};

export default GallerySlider;
