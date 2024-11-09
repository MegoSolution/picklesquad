import Link from "next/link";
import ShopCard from "../card/ShopCard";
import ball_alt from "/public/images/shop/ball-alt.png";
import gloves_alt from "/public/images/shop/gloves-alt.png";

const shopData = [
  {
    id: 1,
    title: "Golf Ball",
    price: "165.00",
    rating: 5,
    img: ball_alt,
  },
  {
    id: 2,
    title: "White Gloves",
    price: "165.00",
    rating: 5,
    img: gloves_alt,
  },
];

const Shop = () => {
  return (
    <section
      className="section shop shop--secondary wow fadeInUp"
      data-wow-duration="0.4s"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <div className="section__header">
              <h5 className="section__header-sub-title">Shop</h5>
              <h2 className="section__header-title">Featured products</h2>
              <p>
                Golftio Sports Club is a golf club with a history that goes back
                to XX century. From a cricket club to soccer tournaments,
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center section__row">
          {shopData.map((itm) => (
            <div
              key={itm.id}
              className="col-md-10 col-lg-6 col-xl-6 section__col"
            >
              <ShopCard data={itm} />
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

export default Shop;
