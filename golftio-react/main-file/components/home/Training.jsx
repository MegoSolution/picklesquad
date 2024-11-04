import { useRef } from "react";
import Slider from "react-slick";
import TrainingCardWithOutImg from "../card/TrainingCardWithOutImg";
import SliderNavigation from "../common/SliderNavigation";

const trainingData = [
  {
    id: 1,
    title: "Body Position",
    desc: "We teach you how to get the right body position....",
    icon: "golftio-shot-down",
  },
  {
    id: 2,
    title: "Body Rotation",
    desc: "We teach you how to get the right body position....",
    icon: "golftio-shot-upper",
  },
  {
    id: 3,
    title: "Chip Shot",
    desc: "We teach you how to get the right body position....",
    icon: "golftio-shot-done",
  },
  {
    id: 4,
    title: "Body Position",
    desc: "We teach you how to get the right body position....",
    icon: "golftio-shot-down",
  },
  {
    id: 5,
    title: "Body Rotation",
    desc: "We teach you how to get the right body position....",
    icon: "golftio-shot-upper",
  },
  {
    id: 6,
    title: "Chip Shot",
    desc: "We teach you how to get the right body position....",
    icon: "golftio-shot-done",
  },
];

const Training = () => {
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
    <section className="section training training--secondary">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <div
              className="section__header wow fadeInUp"
              data-wow-duration="0.4s"
            >
              <h5 className="section__header-sub-title">Trainings</h5>
              <h2 className="section__header-title">
                We provide professional golf training
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
            <Slider
              {...settings}
              className="training__slider--secondary"
              ref={sliderRef}
            >
              {trainingData.map((itm) => (
                <TrainingCardWithOutImg key={itm.id} data={itm} />
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
