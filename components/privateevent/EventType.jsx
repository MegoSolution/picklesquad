import Link from "next/link";

const EventType = () => {
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
        <div className="event-content ">
        <h5 className="section__content-sub-title font-white">
              Why Choose Us?
          </h5>
          <h2 className="section__content-title font-white">
            Host Your Private Event Hosting
          </h2>
            
          <div className="section__content-inner">
            <ul className="feature-list-2">
              <li>
                <i className="golftio-pin-checked"></i>
                <div>
                  <strong>Exclusive Use of Courts:</strong>
                  <p>Enjoy private access to our courts for uninterrupted fun.</p>
                </div>
              </li>
              <li>
                <i className="golftio-pin-checked"></i>
                <div>
                  <strong>Customizable Setup:</strong>
                  <p>Tailored arrangements to meet the specific needs of your event.</p>
                </div>
              </li>
              <li>
                <i className="golftio-pin-checked"></i>
                <div>
                  <strong>Professional Support:</strong>
                  <p>Access to coaching, referees, or facilitators if needed.</p>
                </div>
              </li>
              <li>
                <i className="golftio-pin-checked"></i>
                <div>
                  <strong>Amenities Included:</strong>
                  <p>Complimentary refreshments, premium restrooms, and a chill-out lounge for your guests.
                  </p>
                </div>
              </li>
              <li>
                <i className="golftio-pin-checked"></i>
                <div>
                  <strong>Optional Add-Ons:</strong>
                  <p>Tournament planning, skill challenges, or access to our ball machine for added excitement.</p>
                </div>
              </li>
            </ul>
          </div>
            
          <div className="section__content-cta">
            <Link href="#Contact" scroll={false} className="btn btn-light book-now-btn">
              Book Your Private Event Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventType;
