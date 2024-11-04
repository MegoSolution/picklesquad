import Image from "next/image";
import Link from "next/link";
import author from "/public/images/author.png";

const ProductTab = () => {
  return (
    <div className="product-description__content-tab">
      <div
        className="product-description-tab-btns"
        id="details-tab"
        role="tablist"
      >
        <div role="presentation">
          <button
            // href="#productDescription"
            className="bg-transparent product-description-tab-btn active"
            id="productDescription-tab"
            data-bs-toggle="pill"
            data-bs-target="#productDescription"
            type="button"
            role="tab"
            aria-controls="productDescription"
            aria-selected="true"
          >
            Description
          </button>
        </div>

        <div role="presentation">
          <button
            // href="#productReviews"
            className="bg-transparent product-description-tab-btn"
            id="productReviews-tab"
            data-bs-toggle="pill"
            data-bs-target="#productReviews"
            type="button"
            role="tab"
            aria-controls="productReviews"
            aria-selected="false"
          >
            Reviews
          </button>
        </div>
      </div>
      <div
        className="product-description-tab-content tab-content"
        id="details-tabContent"
      >
        <div
          className="product-description-tab-single tab-pane fade show active"
          id="productDescription"
          role="tabpanel"
          aria-labelledby="productDescription-tab"
          tabIndex="0"
        >
          <p className="secondary-text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&#39;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book. It has survived
            not only five centuries,
          </p>
        </div>
        <div
          className="tab-pane fade"
          id="productReviews"
          role="tabpanel"
          aria-labelledby="productReviews-tab"
          tabIndex="0"
        >
          <div className="product-description-tab-single">
            <div className="author">
              <Image src={author} alt="Author" />
            </div>
            <div className="author-content">
              <div className="author-meta">
                <h6>Jerome Bell</h6>
                <span></span>
                <p className="secondary-text">2 days ago</p>
                <span></span>
                <div className="review-product">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
              </div>
              <p className="secondary-text">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in...
              </p>
              <p className="secondary-text">
                <Link href="/product-details">View More</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductTab;
