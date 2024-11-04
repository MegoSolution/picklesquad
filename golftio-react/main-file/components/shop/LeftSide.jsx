import productData from "@/data/productData";
import ProductCard from "../card/ProductCard";
import Pagination from "../pagination/Pagination";

const LeftSide = () => {
  return (
    <div className="col-xl-8 section__col">
      <div className="shop--main__inner">
        <div className="row justify-content-center section__row">
          {productData.map((product) => (
            <div
              key={product.id}
              className="col-sm-10 col-md-6 col-xl-6 section__col"
            >
              {/* Product Card */}
              <ProductCard data={product} />
            </div>
          ))}
        </div>
        <div className="row">
          <div className="col-12 justify-content-center section__cta">
            {/* Pagination */}
            <Pagination />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
