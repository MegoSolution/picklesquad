import { useState } from "react";
import ModalVideo from "react-modal-video";
import RightSide from "../common/RightSide";
import BlogComment from "./BlogComment";
import CommentForm from "./CommentForm";
import Details from "./Details";

const BlogDetailsBody = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      {/* TODO: Video Modal  */}
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="muczNvx9fgg"
        onClose={() => setOpen(false)}
      />

      <section className="section blog-details">
        <div className="container">
          <div className="row justify-content-center section__row">
            <div className="col-12 col-xl-8 section__col">
              <div className="blog-details__wrapper">
                {/* Details */}
                <Details setOpen={setOpen} />
                {/* Blog Comment   */}
                <BlogComment />
                <div className="comment-form">
                  <h5>Write a Comment</h5>
                  {/* Comment Form */}
                  <CommentForm />
                </div>
              </div>
            </div>
            <div className="col-12 col-xl-4 section__col">
              <div className="sidebar wow fadeInUp" data-wow-duration="0.4s">
                {/* Right Side */}
                <RightSide />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetailsBody;
