import Image from "next/image";
import Link from "next/link";

const BlogCardOne = ({ blog }) => {
  const { title, desc, post_by, date, img } = blog;

  return (
    <div className="blog-single">
      <div className="row align-items-center">
        <div className="col-lg-6">
          <div className="blog__thumb">
            <Link href="/blog/1" title="Read More">
              <Image src={img} alt="Blog" />
            </Link>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="blog__content">
            <h5>
              <Link href="/blog/1" title="Read More">
                {title}
              </Link>
            </h5>
            <div className="blog__content-meta">
              <p>
                <i className="golftio-user"></i> {post_by}
              </p>
              <p>
                <i className="fa-solid fa-calendar-week"></i> {date}
              </p>
            </div>
            <p className="secondary-text">{desc}</p>
            <Link
              href="/blog/1"
              title="Read More"
              className="cmn-button cmn-button--secondary"
            >
              Read more
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCardOne;
