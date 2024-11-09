import testimonialData from "@/data/testimonialData";
import Link from "next/link";
import { useRef } from "react";
import Slider from "react-slick";
import TestimonialCardOne from "../card/TestimonialCardOne";
import SliderNavigation from "./SliderNavigation";

const TestimonialOne = () => {
  const sliderRef = useRef();

  const settings = {
    infinite: true,
    autoplay: true,
    focusOnSelect: true,
    slidesToShow: 1,
    speed: 900,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    centerMode: true,
    centerPadding: "0px",
    responsive: [
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
    ],
  };

  return (
    <section
      className="section testimonial testimonial--secondary wow fadeInUp"
      data-wow-duration="0.4s"
    >
      <div className="container">
        <div className="row align-items-center section__row">
          <div className="col-lg-6 col-xxl-6 section__col">
            <div className="section__content">
              <h5 className="section__content-sub-title">Testimonial</h5>
              <h2 className="section__content-title">
                Our Members Thinking About Us
              </h2>
              <p className="section__content-text">
                Our professional team will make sure that you find the right
                course and the best trainer to receive maximum efficiency. All
                our trainers are professional golf players with the highest...
              </p>
              <div className="section__content-cta">
                <Link href="/join-club" className="cmn-button">
                  Join Our Club
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-xxl-5 offset-xxl-1 section__col">
            <Slider
              {...settings}
              className="testimonial__slider--secondary"
              ref={sliderRef}
            >
              {testimonialData.map((itm) => (
                // Testimonial Card One
                <TestimonialCardOne key={itm.id} data={itm} />
              ))}
            </Slider>

            {/* Slider Navigation */}
            <SliderNavigation
              sliderRef={sliderRef}
              cls="justify-content-lg-end"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialOne;
