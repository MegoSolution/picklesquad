const Host = () => {
  return (
    <div className="private-event-section">
      <div className="image-container">
        <img
          src="/images/picklesquad_image/host.jpg"
          alt="Private Event"
          className="event-image"
        />
      </div>
      <div className="text-container">
        <div className="event-content">
          
          <h2 className="title">Host Your Own Private Event</h2>
          <p>
         
Experience exceptional private event hosting with PickleSquad, where every detail is tailored to your needs. Whether you’re planning a lively social gathering, a corporate retreat, or an unforgettable celebration, our dynamic space and dedicated team are here to make it extraordinary.<br />
<br/>
PickleSquad’s versatile venue offers a unique blend of fun, energy, and sophistication, perfect for crafting unforgettable moments. From personalized event setups to seamless execution, we ensure your vision comes to life in a vibrant and engaging atmosphere. Make your next event one to remember with PickleSquad!</p>
          <a href="#Contact" scroll={false}  className="btn btn-light book-now-btn">
           Contact Us Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Host;
