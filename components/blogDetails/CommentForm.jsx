const CommentForm = () => {
  return (
    <form action="#" method="post">
      <div className="input-group">
        <div className="input-single">
          <input
            type="text"
            name="comment-name"
            id="commentName"
            required
            placeholder="Enter Your Name..."
          />
        </div>
        <div className="input-single">
          <input
            type="email"
            name="comment-email"
            id="commentEmail"
            required
            placeholder="Enter Your Email..."
          />
        </div>
      </div>
      <div className="input-single">
        <textarea
          name="comment-message"
          id="commentMessage"
          placeholder="Write a comment..."
        ></textarea>
      </div>
      <button type="submit" className="cmn-button">
        Submit Now
      </button>
    </form>
  );
};

export default CommentForm;
