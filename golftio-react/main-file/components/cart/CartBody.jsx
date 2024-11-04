import Link from "next/link";
import Checkout from "./Checkout";
import SingleCartProduct from "./SingleCartProduct";

const CartBody = () => {
  return (
    <div className="section cart">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div
              className="cart__wrapper wow fadeInUp"
              data-wow-duration="0.4s"
            >
              <div className="cart-items-wrapper">
                <table>
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Subtotal</th>
                      <th>Remove</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Single Cart Product */}
                    <SingleCartProduct />
                  </tbody>
                </table>
              </div>
              <div className="cart__wrapper-footer">
                <form action="#" method="post">
                  <input
                    type="text"
                    name="promo-code"
                    id="promoCode"
                    placeholder="Promo code"
                  />
                  <button type="submit" className="cmn-button">
                    Apply Code
                  </button>
                </form>
                <Link href="/" className="cmn-button">
                  Update Cart
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-8 offset-sm-4 col-lg-6 offset-lg-6">
            {/* Checkout */}
            <Checkout />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartBody;
