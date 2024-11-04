import Image from "next/image";
import { useRef } from "react";
import Slider from "react-slick";
import three from "/public/images/testimonial/three.png";

const FacilitySingleSlider = () => {
  const sliderRef = useRef();

  const settings = {
    infinite: true,
    autoplay: true,
    focusOnSelect: true,
    slidesToShow: 1,
    speed: 700,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    centerMode: true,
    centerPadding: "0px",
  };

  return (
    <div className="facility__slider-wrapper slider-navigation">
      <button
        className="next-facility-testimonial cmn-button cmn-button--secondary"
        onClick={() => sliderRef.current.slickPrev()}
      >
        <i className="fa-solid fa-angle-left"></i>
      </button>
      <Slider
        {...settings}
        className="facility__slider--testimonial"
        ref={sliderRef}
      >
        <div className="facility__slider-single">
          <div className="facility__slider-single__two">
            <div className="quotation">
              <i className="golftio-quote"></i>
            </div>
            <div className="facility-review">
              <i className="golftio-star"></i>
              <i className="golftio-star"></i>
              <i className="golftio-star"></i>
              <i className="golftio-star"></i>
              <i className="golftio-star"></i>
            </div>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which...
            </p>
          </div>
          <div className="testimonial__slider-card__author">
            <div className="testimonial__slider-card__author-thumb">
              <Image src={three} alt="Image" />
            </div>
            <div className="testimonial__slider-card__author-info">
              <h6>Brad Hogds</h6>
              <p className="secondary-text">Junior Player</p>
            </div>
          </div>
        </div>
        <div className="facility__slider-single">
          <div className="facility__slider-single__two">
            <div className="quotation">
              <i className="golftio-quote"></i>
            </div>
            <div className="facility-review">
              <i className="golftio-star"></i>
              <i className="golftio-star"></i>
              <i className="golftio-star"></i>
              <i className="golftio-star"></i>
              <i className="golftio-star"></i>
            </div>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which...
            </p>
          </div>
          <div className="testimonial__slider-card__author">
            <div className="testimonial__slider-card__author-thumb">
              <Image src={three} alt="Image" />
            </div>
            <div className="testimonial__slider-card__author-info">
              <h6>Brad Hogds</h6>
              <p className="secondary-text">Junior Player</p>
            </div>
          </div>
        </div>
        <div className="facility__slider-single">
          <div className="facility__slider-single__two">
            <div className="quotation">
              <i className="golftio-quote"></i>
            </div>
            <div className="facility-review">
              <i className="golftio-star"></i>
              <i className="golftio-star"></i>
              <i className="golftio-star"></i>
              <i className="golftio-star"></i>
              <i className="golftio-star"></i>
            </div>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which...
            </p>
          </div>
          <div className="testimonial__slider-card__author">
            <div className="testimonial__slider-card__author-thumb">
              <Image src={three} alt="Image" />
            </div>
            <div className="testimonial__slider-card__author-info">
              <h6>Brad Hogds</h6>
              <p className="secondary-text">Junior Player</p>
            </div>
          </div>
        </div>
      </Slider>
      <button
        className="prev-facility-testimonial cmn-button cmn-button--secondary"
        onClick={() => sliderRef.current.slickNext()}
      >
        <i className="fa-solid fa-angle-right"></i>
      </button>
    </div>
  );
};

export default FacilitySingleSlider;
