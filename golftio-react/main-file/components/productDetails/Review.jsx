import Image from "next/image";
import reveiw from "/public/images/reveiw.png";

const Review = () => {
  return (
    <section className="section review">
      <div className="container">
        <div className="row align-items-center section__row">
          <div className="col-lg-6 section__col">
            <div className="review__content">
              <h4>Add a Review</h4>
              <form action="#" method="post">
                <div className="input-single">
                  <input
                    type="text"
                    name="review-user-name"
                    id="reviewUserName"
                    required
                    placeholder="Enter Your Name"
                  />
                </div>
                <div className="input-single">
                  <input
                    type="email"
                    name="review-user-email"
                    id="reviewUserEmail"
                    required
                    placeholder="Enter Your Email"
                  />
                </div>
                <div className="input-single input-rating">
                  <i className="fa-regular fa-star"></i>
                  <i className="fa-regular fa-star"></i>
                  <i className="fa-regular fa-star"></i>
                  <i className="fa-regular fa-star"></i>
                  <i className="fa-regular fa-star"></i>
                </div>
                <div className="input-single">
                  <textarea
                    name="review-message"
                    id="reviewMessage"
                    cols="10"
                    rows="3"
                    placeholder="Write a review"
                  ></textarea>
                </div>
                <div className="section__cta text-start">
                  <button type="submit" className="cmn-button">
                    Submit Now
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-6 col-xl-5 offset-xl-1 section__col">
            <div
              className="review__thumb wow fadeInUp"
              data-wow-duration="0.4s"
            >
              <Image src={reveiw} alt="Review" />
              <div className="review__content">
                <h4>The Royal Golf</h4>
                <h2>25%</h2>
                <p className="primary-text">Discount</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;
