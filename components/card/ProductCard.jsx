import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ data }) => {
  const { name, price, img, rating } = data;
  return (
    <div className="shop__card">
      <div className="shop__card-thumb">
        <Link href="/product-details">
          <Image src={img} alt="Image" />
        </Link>
      </div>
      <div className="shop__card-info">
        <h5>
          <Link href="/product-details">{name}</Link>
        </h5>
        <p>
          ${price}.00 <span>$252.00</span>
        </p>
      </div>
      <div className="shop__card-review">
        <i className="golftio-star"></i>
        <i className="golftio-star"></i>
        <i className="golftio-star"></i>
        <i className="golftio-star"></i>
        <i className="golftio-star"></i>
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
  );
};

export default ProductCard;
