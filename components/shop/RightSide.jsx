import RangeSlider from "react-range-slider-input/dist/components/RangeSlider";
import Cart from "./Cart";
import Categories from "./Categories";
import Search from "./Search";
import Tag from "./Tag";

// css
import { useState } from "react";
import "react-range-slider-input/dist/style.css";

const RightSide = () => {
  const [value, setValue] = useState([200, 700]);

  return (
    <div className="col-12 col-xl-4 section__col">
      <div className="sidebar wow fadeInUp" data-wow-duration="0.4s">
        <div className="shop__sidebar">
          <h5>Filter</h5>
          <hr />
          <div className="shop__sidebar-single">
            {/* Search */}
            <Search />
          </div>
          <hr />
          <div className="shop__sidebar-single">
            {/* Categories */}
            <Categories />
          </div>
          <hr />
          <div className="shop__sidebar-single">
            <div className="shop__sidebar-head">
              <button
                data-bs-toggle="collapse"
                data-bs-target="#collapsePricing"
                aria-expanded="false"
                aria-controls="collapsePricing"
              >
                Pricing scale
                <i className="fa-solid fa-angle-down"></i>
              </button>
            </div>
            <div
              className="shop__sidebar-content collapse show"
              id="collapsePricing"
            >
              <div className="price-range-slider">
                <div id="slider-range" className="range-bar">
                  <RangeSlider
                    value={value}
                    onInput={setValue}
                    min={0}
                    max={1000}
                    ariaValuemax
                  />
                </div>
                <p className="range-value">
                  <input
                    value={`$${value[0]} - $${value[1]}`}
                    type="text"
                    id="amount"
                    readOnly
                  />
                </p>
              </div>
            </div>
          </div>
          <hr />
          <div className="shop__sidebar-single">
            {/* Cart  */}
            <Cart />
          </div>
          <hr />
          <div className="shop__sidebar-single">
            {/* Tag */}
            <Tag />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSide;
