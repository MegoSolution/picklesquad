const JoinUs = () => {
  return (
    <div className="private-event-section">
      <div className="image-container">
        <img
          src="/images/picklesquad_image/first-time.jpg"
          alt="Private Event"
          className="event-image"
        />
      </div>
      <div className="text-container">
        <div className="event-content">
          
          <h2 className="title">Find The Perfect Program and Join Our Squad </h2>
          <p>
          Discover our range of pickleball programs designed for all skill levels. 
          Whether you are a beginner or advanced players, we provide expert instruction and opportunities for everyone.
          </p>
          <a href="#Intro" scroll={false}  className="btn btn-light book-now-btn">
           View Program
          </a>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
