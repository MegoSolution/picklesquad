const Event = () => {
  return (
    <div className="private-event-section">
      <div className="image-container">
        <img
          src="/images/privateevent/first-time.jpg"
          alt="Private Event"
          className="event-image"
        />
      </div>
      <div className="text-container">
        <div className="event-content">
        <h5 className="sub-title">Event Space</h5>
          <h2 className="title">Make Your Next Event Memorable</h2>
          <p>
         
          Searching for the perfect venue to make your event unforgettable? Welcome to PickleSquad! Beyond just a pickleball club, we provide a versatile and dynamic space tailored to host a wide range of events. From lively corporate gatherings and team-building activities to impactful fundraisers and eye-catching product launches, our covered and outdoor areas offer the ideal setting to bring your vision to life.
<br/><br/>
With our dedicated on-site event planner, every detail will be expertly handled to ensure your event is nothing short of extraordinary.
</p>

<a href="#Contact" scroll={false}   className="btn btn-light book-now-btn">
           Contact Us Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Event;
