import Image from "next/image";
import Link from "next/link";
import blog_eight from "/public/images/blog/eight.png";
import blog_nine from "/public/images/blog/nine.png";
import blog_seven from "/public/images/blog/seven.png";

const PopularBlog = () => {
  return (
    <div className="sidebar__item">
      <div className="sidebar__item-single">
        <div className="sidebar__item-thumb">
          <Link href="/blog/1" title="Read More">
            <Image src={blog_seven} alt="Blog" />
          </Link>
        </div>
        <div className="sidebar__item-content">
          <h6>
            <Link href="/blog/1" title="Read More">
              Golf course workers...
            </Link>
          </h6>
          <p className="seocndary-text">December 19, 2022</p>
        </div>
      </div>
      <div className="sidebar__item-single">
        <div className="sidebar__item-thumb">
          <Link href="/blog/1" title="Read More">
            <Image src={blog_eight} alt="Blog" />
          </Link>
        </div>
        <div className="sidebar__item-content">
          <h6>
            <Link href="/blog/1" title="Read More">
              What it&#39;s like playing...
            </Link>
          </h6>
          <p className="seocndary-text">December 19, 2022</p>
        </div>
      </div>
      <div className="sidebar__item-single">
        <div className="sidebar__item-thumb">
          <Link href="/blog/1" title="Read More">
            <Image src={blog_nine} alt="Blog" />
          </Link>
        </div>
        <div className="sidebar__item-content">
          <h6>
            <Link href="/blog/1" title="Read More">
              Golftio Club offers...
            </Link>
          </h6>
          <p className="seocndary-text">December 19, 2022</p>
        </div>
      </div>
    </div>
  );
};

export default PopularBlog;
