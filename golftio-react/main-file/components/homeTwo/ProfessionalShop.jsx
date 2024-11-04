import Link from "next/link";
import ProductCard from "../card/ProductCard";
import ball from "/public/images/shop/ball.png";
import gloves from "/public/images/shop/gloves.png";
import stick from "/public/images/shop/stick.png";

const productData = [
  {
    id: 1,
    name: "Training Stick",
    price: 165.0,
    img: stick,
    rating: 5,
  },
  {
    id: 2,
    name: "Golf Ball",
    price: 165.0,
    img: ball,
    rating: 5,
  },
  {
    id: 3,
    name: "White Gloves",
    price: 165.0,
    img: gloves,
    rating: 5,
  },
];

const ProfessionalShop = () => {
  return (
    <section className="section shop wow fadeInUp" data-wow-duration="0.4s">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <div className="section__header">
              <h5 className="section__header-sub-title">Professional shop</h5>
              <h2 className="section__header-title">Featured products</h2>
              <p>
                Golftio Sports Club is a golf club with a history that goes back
                to XX century. From a cricket club to soccer tournaments,
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center section__row">
          {productData.map((product) => (
            <div
              key={product.id}
              className="col-sm-10 col-md-6 col-xl-4 section__col"
            >
              {/* Product Card */}
              <ProductCard data={product} />
            </div>
          ))}
        </div>
        <div className="row">
          <div className="col-12">
            <div className="section__cta">
              <Link href="/shop" className="cmn-button">
                See all products
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalShop;
