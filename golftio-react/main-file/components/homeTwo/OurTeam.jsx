import teamData from "@/data/teamData";
import Link from "next/link";
import { useRef } from "react";
import Slider from "react-slick";
import TeamCard from "../card/TeamCard";
import SliderNavigation from "../common/SliderNavigation";

const OurTeam = () => {
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
    <section className="section team wow fadeInUp" data-wow-duration="0.4s">
      <div className="container">
        <div className="row section__row align-items-center">
          <div className="col-lg-6 col-xl-6 section__col">
            <Slider {...settings} className="team__slider" ref={sliderRef}>
              {teamData.map((itm) => (
                <TeamCard key={itm.id} data={itm} />
              ))}
            </Slider>
            <div className="row">
              <div className="col-12">
                {/* Slider Navigation */}
                <SliderNavigation
                  sliderRef={sliderRef}
                  cls="justify-content-start"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-xl-5 offset-xl-1 order-first order-lg-last section__col">
            <div className="section__content">
              <h5 className="section__content-sub-title">Our Team</h5>
              <h2 className="section__content-title">Meet Our Experts</h2>
              <p className="section__content-text">
                Our professional team will make sure that you find the right
                course and the best trainer to receive maximum efficiency. All
                our trainers are professional golf players with the highest...
              </p>
              <div className="section__content-inner">
                <ul>
                  <li>
                    <i className="golftio-pin-checked"></i>5-15+ years
                    experience
                  </li>
                  <li>
                    <i className="golftio-pin-checked"></i>Get our best adviser
                  </li>
                  <li>
                    <i className="golftio-pin-checked"></i>Get our best trainers
                  </li>
                  <li>
                    <i className="golftio-pin-checked"></i>Individual Support
                  </li>
                </ul>
              </div>
              <div className="section__content-cta">
                <Link href="/about" className="cmn-button">
                  About Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
