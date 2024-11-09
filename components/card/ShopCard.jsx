import Image from "next/image";
import Link from "next/link";

const ShopCard = ({ data }) => {
  const { title, price, rating, img } = data;

  return (
    <div className="shop__card">
      <div className="shop__card-thumb">
        <Link href="/product-details">
          <Image src={img} alt="Image" />
        </Link>
      </div>
      <div>
        <div className="shop__card-info">
          <h5>
            <Link href="/product-details">{title}</Link>
          </h5>
          <p>
            ${price} <span>$252.00</span>
          </p>
        </div>
        <div className="shop__card-review">
          {[...Array(rating)].map((_, i) => (
            <i key={i} className="golftio-star"></i>
          ))}
        </div>
        <div className="shop__card-cta">
          <Link href="/cart" className="cmn-button">
            Add Cart
          </Link>
          <Link href="/sign-up" className="cmn-button cmn-button--secondary">
            Buy Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShopCard;
