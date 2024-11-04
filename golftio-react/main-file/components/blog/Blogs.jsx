import blogData from "@/data/blogData";
import BlogCard from "../card/BlogCard";
import Pagination from "../pagination/Pagination";

const Blogs = () => {
  return (
    <div className="blog__wrapper">
      <div className="row justify-content-center section__row">
        {blogData.map((blog) => (
          <div key={blog.id} className="col-sm-10 col-md-6 section__col">
            <BlogCard blog={blog} />
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
  );
};

export default Blogs;
