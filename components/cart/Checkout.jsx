import Link from "next/link";

const Checkout = () => {
  return (
    <div className="cart__graph">
      <h5>Cart Total</h5>
      <ul>
        <li>
          <span>Subtotal</span>
          <span>$230.00</span>
        </li>
        <li>
          <span>Shipping</span>
          <span>$5</span>
        </li>
        <li>
          <span>Total</span>
          <span>$235.00</span>
        </li>
      </ul>
      <Link href="/checkout" className="cmn-button">
        Checkout
      </Link>
    </div>
  );
};

export default Checkout;
