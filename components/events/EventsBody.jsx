import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const EventsBody = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <section className="events section">
      <div className="container">
        <div className="section__header">
          <h3>Upcoming Events</h3>
        </div>
        <Slider {...settings} className="events-slider">
          {/* Event Card 1 */}
          <div>
            <div className="event-card-events">
              <div className="event-card-events__image">
                <Image 
                  src="/images/upcomingevent/event-preview.jpg"
                  alt="Championship Event"
                  width={500}
                  height={400}
                  style={{ objectFit: 'cover' }}
                />
                <div className="event-card-events__text">
                  <h4>01.02.2025</h4>
                  <h5>Championship</h5>
                </div>
              </div>
              <div className="event-card-events__content">
                <button className="btn-enrol">Enrol Now</button>
                <a href="#" className="btn-learn">Learn More</a>
              </div>
            </div>
          </div>

          {/* Event Card 2 */}
          <div>
            <div className="event-card-events">
              <div className="event-card-events__image">
                <Image 
                  src="/images/upcomingevent/event-preview.jpg"
                  alt="Championship Event"
                  width={500}
                  height={400}
                  style={{ objectFit: 'cover' }}
                />
                <div className="event-card-events__text">
                  <h4>01.02.2025</h4>
                  <h5>Championship</h5>
                </div>
              </div>
              <div className="event-card-events__content">
                <button className="btn-enrol">Enrol Now</button>
                <a href="#" className="btn-learn">Learn More</a>
              </div>
            </div>
          </div>

          {/* Event Card 3 */}
          <div>
            <div className="event-card-events">
              <div className="event-card-events__image">
                <Image 
                  src="/images/upcomingevent/event-preview.jpg"
                  alt="Championship Event"
                  width={500}
                  height={400}
                  style={{ objectFit: 'cover' }}
                />
                <div className="event-card-events__text">
                  <h4>01.02.2025</h4>
                  <h5>Championship</h5>
                </div>
              </div>
              <div className="event-card-events__content">
                <button className="btn-enrol">Enrol Now</button>
                <a href="#" className="btn-learn">Learn More</a>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default EventsBody; 