const Intro = () => {
  return (
    <div id="Intro" className="coach-session-section">
      <div className="image-container-event2">
        <img
          src="/images/privateevent/3.jpg"
          alt="Coach Session"
          className="session-image"
        />
      </div>

      <div className="text-container">
        <div className="session-content">
          <h2 className="title2">
          Turn Moments into Memories
          </h2>
          <p className="session-description">
          Ditch the boring venues and host your next event in a space
          that’s full of energy! Beyond just a pickleball club, PickleSquad
          offers a dynamic setting perfect for corporate retreats,
          team-building activities, charity fundraisers, or even product
          launches that demand attention.
          <br /><br />
          Our dedicated event planner will be with you every step of
          the way, ensuring a seamless and memorable experience.
          Let’s create something extraordinary together!        
          </p>

          {/* Join Us Button */}
          <a
            href="#Contact"
            scroll={false}
            className="btn btn-light book-now-btn gap-button" // Added class for gap
          >
            Contact Us Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Intro;
