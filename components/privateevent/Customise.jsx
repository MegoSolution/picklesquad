const Customise = () => {
  return (
    <div id="View" className="coach-session-section">
      <div className="text-container-coach">
        <div className="session-content">
          <h5 className="sub-title">Private Event</h5>
          <h2 className="title">Customise Your Pickleball Experience</h2>
          <p>
          Love the thrill of pickleball? Take it to the next level with PickleSquad's customized court experiences! Whether you're hosting a birthday bash, a graduation party, a team-building event, or a unique family reunion, our courts provide the perfect stage for your celebration.
          <br/><br/>
With personalized setups tailored to your theme and needs, PickleSquad transforms the court into your playground for unforgettable memories. Invite your guests, step onto the court, and let the fun unfold in your own unique style. Create your ultimate pickleball celebration with PickleSquad today!
          </p>
          <a href="#Contact" scroll={false}  className="btn btn-primary first-time-btn">
            Learn More
          </a>
        </div>
      </div>
      <div className="image-container">
        <img
          src="/images/picklesquad_image/view.png"
          alt="Coach Session"
          className="session-image"
        />
      </div>
    </div>
  );
};

export default Customise;
