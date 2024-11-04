import teamData from "@/data/teamData";
import { useRef } from "react";
import Slider from "react-slick";
import TeamCard from "../card/TeamCard";
import SliderNavigation from "./SliderNavigation";

const Team = () => {
  const sliderRef = useRef();

  const settings = {
    infinite: true,
    autoplay: true,
    focusOnSelect: true,
    slidesToShow: 4,
    speed: 900,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    centerMode: true,
    centerPadding: "0px",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="section team wow fadeInUp" data-wow-duration="0.4s">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <div className="section__header">
              <h5 className="section__header-sub-title">Our Team</h5>
              <h2 className="section__header-title">Meet Our Experts</h2>
              <p>
                Golftio Sports Club is a golf club with a history that goes back
                to XX century. From a cricket club to soccer tournaments,
              </p>
            </div>
          </div>
        </div>
        <Slider
          {...settings}
          className="team__slider--secondary"
          ref={sliderRef}
        >
          {teamData.map((itm) => (
            <TeamCard key={itm.id} data={itm} />
          ))}
        </Slider>
        <div className="row">
          <div className="col-12">
            {/* Slider Navigation */}
            <SliderNavigation sliderRef={sliderRef} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
