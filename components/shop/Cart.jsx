import Image from "next/image";
import Link from "next/link";
import ball_alt from "/public/images/shop/ball-alt.png";

const Cart = () => {
  return (
    <>
      <div className="shop__sidebar-head">
        <button
          data-bs-toggle="collapse"
          data-bs-target="#collapseCart"
          aria-expanded="false"
          aria-controls="collapseCart"
        >
          Cart
          <i className="fa-solid fa-angle-down"></i>
        </button>
      </div>
      <div className="shop__sidebar-content collapse show" id="collapseCart">
        <div className="product__cart">
          <div className="product__cart-single">
            <div className="product__single">
              <div className="product__cart-single-thumb">
                <Image src={ball_alt} alt="Image" />
              </div>
              <div className="product__cart-single-content">
                <p>Golf Ball</p>
                <p>1 * $120.00</p>
              </div>
              <i className="fa-solid fa-xmark"></i>
            </div>
            <p className="secondary-text sub-total">
              Subtotal : <span>$120.00</span>
            </p>
            <div className="product__cart-cta">
              <Link href="/cart" className="cmn-button">
                View Cart
              </Link>
              <Link
                href="/checkout"
                className="cmn-button cmn-button--secondary"
              >
                Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
