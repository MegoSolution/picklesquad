import productData from "@/data/productData";
import { useRef } from "react";
import Slider from "react-slick";
import ProductCard from "../card/ProductCard";
import SliderNavigation from "../common/SliderNavigation";

const RelatedProduct = () => {
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
      className="section shop related-shop wow fadeInUp"
      data-wow-duration="0.4s"
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section__header--secondary">
              <div className="row align-items-center">
                <div className="col-lg-8">
                  <div className="section__header--secondary__content">
                    <h2>More Related Product</h2>
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
        <div className="row justify-content-center">
          <div className="col-sm-10 col-md-12">
            <Slider
              {...settings}
              className="product__main-slider"
              ref={sliderRef}
            >
              {productData.map((product) => (
                <ProductCard key={product.id} data={product} />
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RelatedProduct;
