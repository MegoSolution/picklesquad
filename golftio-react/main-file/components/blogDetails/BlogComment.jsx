import Image from "next/image";
import Link from "next/link";
import author_four from "/public/images/blog/author-four.png";
import author_one from "/public/images/blog/author-one.png";
import author_three from "/public/images/blog/author-three.png";
import author_two from "/public/images/blog/author-two.png";

const BlogComment = () => {
  return (
    <div className="blog-details__comment">
      <h4>
        Comments <span>(03)</span>
      </h4>
      <div className="blog-comment-single">
        <div className="blog-comment__thumb">
          <Image src={author_one} alt="Author" />
        </div>
        <div className="blog-comment__content">
          <div className="blog-comment__author">
            <p className="primary-text">Ralph Edwards</p>
            <span className="author-active"></span>
            <p>2 days ago</p>
          </div>
          <div className="blog-comment__feedback">
            <p className="secondary-text">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don&#39;t look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you...
            </p>
          </div>
          <div className="blog-comment__meta">
            <Link href="/blog/1">
              <i className="fa-solid fa-thumbs-up"></i> Like
            </Link>
            <Link href="/blog/1" className="reply">
              <i className="fa-solid fa-comments"></i> Reply
            </Link>
          </div>
          <div className="blog-comment-reply">
            <div className="blog-comment-reply-inner">
              <div className="reply__author">
                <Image src={author_four} alt="Author" />
              </div>
              <div className="reply__form">
                <form action="#" method="post">
                  <div className="reply__form-inner">
                    <textarea
                      rows="1"
                      cols="1"
                      placeholder="Join the discussion..."
                    ></textarea>
                    <button type="submit" className="cmn-button">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="blog-comment-single">
        <div className="blog-comment__thumb">
          <Image src={author_two} alt="Author" />
        </div>
        <div className="blog-comment__content">
          <div className="blog-comment__author">
            <p className="primary-text">Wade Warren</p>
            <span className="author-active"></span>
            <p>2 days ago</p>
          </div>
          <div className="blog-comment__feedback">
            <p className="secondary-text">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don&#39;t look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you...
            </p>
          </div>
          <div className="blog-comment__meta">
            <Link href="/blog/1">
              <i className="fa-solid fa-thumbs-up"></i> Like
            </Link>
            <Link href="/blog/1" className="reply">
              <i className="fa-solid fa-comments"></i> Reply
            </Link>
          </div>
          <div className="blog-comment-reply">
            <div className="blog-comment-reply-inner">
              <div className="reply__author">
                <Image src={author_four} alt="Author" />
              </div>
              <div className="reply__form">
                <form action="#" method="post">
                  <div className="reply__form-inner">
                    <textarea
                      rows="1"
                      cols="1"
                      placeholder="Join the discussion..."
                    ></textarea>
                    <button type="submit" className="cmn-button">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="blog-comment-single">
        <div className="blog-comment__thumb">
          <Image src={author_three} alt="Author" />
        </div>
        <div className="blog-comment__content">
          <div className="blog-comment__author">
            <p className="primary-text">Devon Lane</p>
            <span className="author-active"></span>
            <p>2 days ago</p>
          </div>
          <div className="blog-comment__feedback">
            <p className="secondary-text">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don&#39;t look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you...
            </p>
          </div>
          <div className="blog-comment__meta">
            <Link href="/blog/1">
              <i className="fa-solid fa-thumbs-up"></i> Like
            </Link>
            <Link href="/blog/1" className="reply">
              <i className="fa-solid fa-comments"></i> Reply
            </Link>
          </div>
          <div className="blog-comment-reply">
            <div className="blog-comment-reply-inner">
              <div className="reply__author">
                <Image src={author_four} alt="Author" />
              </div>
              <div className="reply__form">
                <form action="#" method="post">
                  <div className="reply__form-inner">
                    <textarea
                      rows="1"
                      cols="1"
                      placeholder="Join the discussion..."
                    ></textarea>
                    <button type="submit" className="cmn-button">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section__cta">
        <Link href="/blog/1" className="cmn-button">
          View All Comment
        </Link>
      </div>
    </div>
  );
};

export default BlogComment;
