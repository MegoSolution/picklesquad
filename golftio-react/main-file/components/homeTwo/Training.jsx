import trainingsData from "@/data/trainingsData";
import { useRef } from "react";
import Slider from "react-slick";
import TrainingCard from "../card/TrainingCard";
import SliderNavigation from "../common/SliderNavigation";

const Training = () => {
  const sliderRef = useRef();

  const settings = {
    infinite: true,
    autoplay: true,
    focusOnSelect: true,
    slidesToShow: 3,
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
    <section className="section training wow fadeInUp" data-wow-duration="0.4s">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <div className="section__header">
              <h5 className="section__header-sub-title">Trainings</h5>
              <h2 className="section__header-title">
                Our professional golf training
              </h2>
              <p>
                Golftio Sports Club is a golf club with a history that goes back
                to XX century. From a cricket club to soccer tournaments,
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-sm-10 col-md-12">
            <Slider {...settings} className="training__slider" ref={sliderRef}>
              {trainingsData.map((itm) => (
                // Training Card
                <TrainingCard key={itm.id} training={itm} />
              ))}
            </Slider>
          </div>
        </div>
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

export default Training;
