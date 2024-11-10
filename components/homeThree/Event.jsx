import eventData from "@/data/EventData";
import Link from "next/link";
import { useRef } from "react";
import Slider from "react-slick";
import EventCardtWithEffect from "../card/EventCardtWithEffect";
import SliderNavigation from "../common/SliderNavigation";

const Event = () => {
  const sliderRef = useRef();

  const settings = {
    infinite: true,
    autoplay: false,
    focusOnSelect: true,
    slidesToShow: 5,
    speed: 900,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    centerMode: true,
    centerPadding: "120px",
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
          centerPadding: "200px",
        },
      },
      {
        breakpoint: 660,
        settings: {
          slidesToShow: 1,
          centerPadding: "120px",
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          centerPadding: "40px",
        },
      },
    ],
  };

  return (
    <section
      className="section event--secondary wow fadeInUp"
      data-wow-duration="0.4s"
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section__header--secondary">
              <div className="row align-items-center">
                <div className="col-lg-8">
                  <div className="section__header--secondary__content">
                    <h5>Event</h5>
                    <h2>Our upcoming events</h2>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="section__header--secondary__cta">
                    <Link href="/event" className="cmn-button">
                      See All Event
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Slider
        {...settings}
        className="event--secondary__slider"
        ref={sliderRef}
      >
        {eventData.map((itm) => (
          <EventCardtWithEffect key={itm.id} data={itm} />
        ))}
      </Slider>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <SliderNavigation sliderRef={sliderRef} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Event;
