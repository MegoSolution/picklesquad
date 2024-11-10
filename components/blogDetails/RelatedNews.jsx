import blogData from "@/data/blogData";
import { useRef } from "react";
import Slider from "react-slick";
import BlogCard from "../card/BlogCard";
import SliderNavigation from "../common/SliderNavigation";

const RelatedNews = () => {
  const sliderRef = useRef();

  const settings = {
    infinite: true,
    autoplay: true,
    focusOnSelect: true,
    slidesToShow: 3,
    speed: 700,
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
      className="section related-news blog wow fadeInUp"
      data-wow-duration="0.4s"
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section__header--secondary">
              <div className="row align-items-center">
                <div className="col-lg-8">
                  <div className="section__header--secondary__content">
                    <h2>More Related News</h2>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="section__header--secondary__cta">
                    <SliderNavigation
                      sliderRef={sliderRef}
                      cls="justify-content-lg-end"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center section__row">
          <div className="col-sm-10 col-md-12 section__col">
            <Slider
              {...settings}
              className="related-news__slider"
              ref={sliderRef}
            >
              {blogData.map((blog) => (
                <BlogCard key={blog.id} blog={blog} />
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RelatedNews;
