import Image from "next/image";
import Link from "next/link";
import club_thumb from "/public/images/Picklesquad_image/view.png";

const WhyChooseUs = () => {
  return (
    <div id="View" className="coach-session-section">
      <div className="text-container-coach">
        <div className="session-content">
          <h5 className="section__content-sub-title">
              Why Choose Us?
          </h5>
          <h2 className="section__content-title">
            Host Your Private Event Hosting
          </h2>
            
          <div className="section__content-inner">
            <ul className="feature-list">
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
            <Link href="#Contact" scroll={false} className="btn btn-primary first-time-btn">
              Plan Now
            </Link>
          </div>
        </div>
      </div>
      <div className="image-container">
        <Image
          src={club_thumb} 
          alt="Coach Session"
          className="session-image"
        />
      </div>
    </div>

    
  );
};



export default WhyChooseUs;
