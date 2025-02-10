const ProgrammesBanner = () => {
  return (
    <div>
      {/* Top Hero Section */}
      <div className="event-intro-section">
        <div className="programmes-intro-overlay"></div>
        <div className="programmes-intro-content">
          <h2 className="programmes-intro-title">
          Level Up Your Events
          </h2>
          <p className="programmes-intro-text">
            Looking for a venue that goes beyond the ordinary?
            At PickleSquad, we turn your private events into unforgettable
            experiences with the perfect blend of fun, energy, and community.
            Whether it’s a birthday bash, a corporate retreat, or a special
            celebration, our space is designed to bring your vision to life.
            <br /><br />
            From casual gatherings to high-energy team-building sessions,
            we’ve got the perfect setting to make your event stand out!
          </p>
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

export default ProgrammesBanner;
