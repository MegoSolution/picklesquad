import RightSide from "../common/RightSide";
import Blogs from "./Blogs";

const BlogBody = () => {
  return (
    <section className="section blog blog-grid">
      <div className="container">
        <div className="row justify-content-center section__row">
          <div className="col-12 col-xl-8 section__col">
            {/* Blogs */}
            <Blogs />
          </div>
          <div className="col-sm-10 col-md-8 col-lg-6 col-xl-4 section__col">
            <div className="sidebar wow fadeInUp" data-wow-duration="0.4s">
              {/* Right Side */}
              <RightSide />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogBody;
