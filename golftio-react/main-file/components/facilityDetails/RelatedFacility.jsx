import facilityData from "@/data/facilityData";
import { useRef } from "react";
import Slider from "react-slick";
import FacilityCardWIthImg from "../card/FacilityCardWIthImg";
import SliderNavigation from "../common/SliderNavigation";

const RelatedFacility = () => {
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
    ],
  };

  return (
    <section
      className="section facility--main wow fadeInUp"
      data-wow-duration="0.4s"
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section__header--secondary">
              <div className="row align-items-center">
                <div className="col-lg-8">
                  <div className="section__header--secondary__content">
                    <h2>More Related Facility</h2>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="section__header--secondary__cta">
                    {/* Slider Navigation */}
                    <SliderNavigation
                      cls="justify-content-lg-end"
                      sliderRef={sliderRef}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-sm-10 col-md-12">
            <Slider
              {...settings}
              className="facility--main__slider"
              ref={sliderRef}
            >
              {facilityData.map((itm) => (
                // Facility Card WIthImg
                <FacilityCardWIthImg key={itm.id} data={itm} />
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RelatedFacility;
