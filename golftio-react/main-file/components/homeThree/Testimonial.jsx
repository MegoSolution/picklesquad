import testimonialData from "@/data/testimonialData";
import { useRef } from "react";
import Slider from "react-slick";
import TestimonialCardOne from "../card/TestimonialCardOne";
import SliderNavigation from "../common/SliderNavigation";

const Testimonial = () => {
  const sliderRef = useRef();

  const settings = {
    infinite: true,
    autoplay: true,
    focusOnSelect: true,
    slidesToShow: 2,
    speed: 900,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    centerMode: true,
    centerPadding: "0px",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section
      className="section testimonial testimonial--secondary testimonial--tertiary wow fadeInUp"
      data-wow-duration="0.4s"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <div className="section__header">
              <h5 className="section__header-sub-title">Testimonial</h5>
              <h2 className="section__header-title">Our member say</h2>
              <p>
                Golftio Sports Club is a golf club with a history that goes back
                to XX century. From a cricket club to soccer tournaments,
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <Slider
              {...settings}
              className="testimonial__slider--tertiary"
              ref={sliderRef}
            >
              {testimonialData.map((itm) => (
                // Testimonial Card One
                <TestimonialCardOne key={itm.id} data={itm} />
              ))}
            </Slider>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <SliderNavigation sliderRef={sliderRef} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
