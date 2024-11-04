import Image from "next/image";
import Link from "next/link";
import cart_item from "/public/images/cart-item.png";

const SingleCartProduct = () => {
  return (
    <tr className="cart-item">
      <td className="cart-item-info">
        <Image src={cart_item} alt="Image" />
        <span className="secondary-text">White Gloves</span>
      </td>
      <td className="cart-item-price">
        $ <span className="base-price">165.00</span>
      </td>
      <td>
        <div className="cart-item-quantity">
          <span className="cart-item-quantity-amount">0</span>
          <div className="cart-item-quantity-controller">
            <Link href="#" className="cart-increment">
              <i className="fa-solid fa-angle-up"></i>
            </Link>
            <Link href="#" className="cart-decrement">
              <i className="fa-solid fa-angle-down"></i>
            </Link>
          </div>
        </div>
      </td>
      <td className="cart-item-price">
        $165.00<span className="total-price"></span>
      </td>
      <td className="cart-item-remove">
        <Link href="#">
          <i className="fa-solid fa-xmark"></i>
        </Link>
      </td>
    </tr>
  );
};

export default SingleCartProduct;
