import { useRef } from "react";
import Slider from "react-slick";
import FacilityCard from "../card/FacilityCard";
import SliderNavigation from "../common/SliderNavigation";

const facilityData = [
  {
    id: 1,
    name: "Golf Course",
    desc: "Lorem Ipsum is simply dummy text of the printing...",
    icon: "golftio-ball",
  },
  {
    id: 2,
    name: "Expert Trainer",
    desc: "Lorem Ipsum is simply dummy text of the printing...",
    icon: "golftio-shot-great-upper",
  },
  {
    id: 3,
    name: "Fitnes Center",
    desc: "Lorem Ipsum is simply dummy text of the printing...",
    icon: "golftio-gym",
  },
  {
    id: 4,
    name: "Golf Club",
    desc: "Lorem Ipsum is simply dummy text of the printing...",
    icon: "golftio-flag",
  },
  {
    id: 5,
    name: "Golf Course",
    desc: "Lorem Ipsum is simply dummy text of the printing...",
    icon: "golftio-ball",
  },
  {
    id: 6,
    name: "Fitnes Center",
    desc: "Lorem Ipsum is simply dummy text of the printing...",
    icon: "golftio-gym",
  },
];

const Facility = () => {
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
    <section className="section facility wow fadeInUp" data-wow-duration="0.4s">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <div className="section__header">
              <h5 className="section__header-sub-title">Facility</h5>
              <h2 className="section__header-title">Golftio Club Facilities</h2>
              <p>
                Golftio Sports Club is a golf club with a history that goes back
                to XX century. From a cricket club to soccer tournaments,
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-sm-10 col-lg-12">
            <Slider {...settings} className="facility__slider" ref={sliderRef}>
              {facilityData.map((itm) => (
                <FacilityCard key={itm.id} data={itm} />
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

export default Facility;
