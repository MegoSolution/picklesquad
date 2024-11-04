import blogData from "@/data/blogData";
import BlogCardOne from "../card/BlogCardOne";
import RightSide from "../common/RightSide";
import Pagination from "../pagination/Pagination";

const BlogListBody = () => {
  return (
    <section className="section blog blog-list">
      <div className="container">
        <div className="row justify-content-center section__row">
          <div className="col-12 col-xl-8 section__col">
            <div className="blog__wrapper">
              <div className="row justify-content-center section__row">
                {blogData.map((blog) => (
                  <div
                    key={blog.id}
                    className="col-sm-10 col-md-8 col-lg-12 section__col"
                  >
                    {/* Blog Card One */}
                    <BlogCardOne blog={blog} />
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

export default BlogListBody;
