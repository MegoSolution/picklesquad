const Host = () => {
  return (
    <div className="private-event-section">
      <div className="image-container">
        <img
          src="/images/privateevent/host.jpg"
          alt="Private Event"
          className="event-image full-size-image" // Added class for full size
        />
      </div>
      <div className="text-container">
        <div className="event-content">
          <h2 className="title">Host Your Private Event at PickleSquad</h2>
          <p>
          Looking for the perfect venue to host your private event? 
          <br/>
          PickleSquad offers a premium space designed to accommodate a variety of occasions—from corporate team-building activities and birthday celebrations to friendly tournaments and social gatherings. 
          <br/>
          Our state-of-the-art facilities ensure a memorable experience for you and your guests.
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

export default Host;
