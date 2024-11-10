import { useState } from "react";

const Categories = () => {
  const [accessories, setAccessories] = useState(false);

  return (
    <>
      <div className="shop__sidebar-head">
        <button
          data-bs-toggle="collapse"
          data-bs-target="#collapseCategories"
          aria-expanded="false"
          aria-controls="collapseCategories"
        >
          Categories
          <i className="fa-solid fa-angle-down"></i>
        </button>
      </div>
      <div
        className="shop__sidebar-content collapse show"
        id="collapseCategories"
      >
        <form action="#" method="post">
          <div className="category__form">
            <ul>
              <li className="category__form-single">
                <input
                  type="checkbox"
                  name="accessories"
                  id="productAccessories"
                  checked={accessories}
                  onChange={() => setAccessories(!accessories)}
                />
                <label htmlFor="productAccessories">Accessories (2)</label>
              </li>
              <li className="category__form-single">
                <input type="checkbox" name="golf" id="productGolf" />
                <label htmlFor="productGolf">Golf Balls (1)</label>
              </li>
              <li className="category__form-single">
                <input type="checkbox" name="sets" id="productSets" />
                <label htmlFor="productSets">Golf Sets (1)</label>
              </li>
              <li className="category__form-single">
                <input type="checkbox" name="irons" id="productIrons" />
                <label htmlFor="productIrons">Irons (4)</label>
              </li>
              <li className="category__form-single">
                <input type="checkbox" name="un" id="productUn" />
                <label htmlFor="productUn">Uncategorized (0)</label>
              </li>
            </ul>
          </div>
        </form>
      </div>
    </>
  );
};

export default Categories;
