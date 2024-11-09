import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ProductTab from "./ProductTab";
import gloves_large from "/public/images/shop/gloves-large.png";

const ProductDescription = () => {
  const [color, setColor] = useState("#fff");
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => {
    if (quantity >= 5) {
      setQuantity(5);
    } else {
      setQuantity((prev) => prev + 1);
    }
  };

  const decrementQuantity = () => {
    if (quantity <= 1) {
      setQuantity(1);
    } else {
      setQuantity((prev) => prev - 1);
    }
  };

  return (
    <section className="section product-description">
      <div className="container">
        <div className="row align-items-center section__row">
          <div className="col-lg-6 section__col">
            <div className="product-description__thumb">
              <Image src={gloves_large} alt="Gloves" />
            </div>
          </div>
          <div className="col-lg-6 col-xl-5 offset-xl-1 section__col">
            <div className="product-description__content">
              <div className="product-description__content-head">
                <div>
                  <h5>White Gloves</h5>
                  <p>
                    $ <span className="base-pri">165.00</span>{" "}
                    <span>$252.00</span>
                  </p>
                </div>
                <div className="review-product">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
              </div>
              {/* Product Tab     */}
              <ProductTab />
              <div className="product-description__content-footer">
                <div className="product-pricing">
                  <div className="product-pricing-single">
                    <div className="product-color-variations">
                      <label htmlFor="productColor">
                        <input
                          type="color"
                          id="productColor"
                          name="product-color"
                          // value={color}
                          onChange={(e) => setColor(e.target.value)}
                        />
                        <i className="fa-solid fa-angle-down"></i>
                      </label>
                    </div>
                  </div>
                  <div className="product-pricing-single product-pricing-calculator">
                    <span className="cart-decre" onClick={decrementQuantity}>
                      <i className="fa-solid fa-minus"></i>
                    </span>
                    <span className="product-quant">{quantity}</span>
                    <span className="cart-incre" onClick={incrementQuantity}>
                      <i className="fa-solid fa-plus"></i>
                    </span>
                  </div>
                  <div className="product-pricing-single">
                    <p>
                      $ {165 * quantity} <span className="product-pri"></span>
                    </p>
                  </div>
                </div>
                <div className="product-pricing__cta">
                  <Link href="/cart" className="cmn-button">
                    Add Cart
                  </Link>
                  <Link
                    href="/cart"
                    className="cmn-button cmn-button--secondary"
                  >
                    Buy Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDescription;
