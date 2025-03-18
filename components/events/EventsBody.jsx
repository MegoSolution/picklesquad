import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const EventsBody = () => {
  const settings = {
    dots: true,
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    speed: 500,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          centerMode: false,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        }
      }
    ]
  };

  const slides = [
    {
      date: "01.02.2025",
      title: "Championship"
    },
    {
      date: "01.03.2025",
      title: "Tournament"
    },
    {
      date: "01.04.2025",
      title: "Competition"
    },
    {
      date: "01.05.2025",
      title: "Championship"
    },
    {
      date: "01.06.2025",
      title: "Tournament"
    }
  ];

  return (
    <section className="events section">
      <div className="container">
        <div className="section__header">
          <h3>Upcoming Events</h3>
        </div>
        <Slider {...settings} className="events-slider">
          {slides.map((slide, index) => (
            <div key={index}>
              <div className="event-card-events">
                <div className="event-card-events__image">
                  <Image 
                    src="/images/upcomingevent/event-preview.jpg"
                    alt="Championship Event"
                    width={300}
                    height={400}
                    style={{ objectFit: 'cover' }}
                  />
                  <div className="event-card-events__text">
                    <h4>{slide.date}</h4>
                    <h5>{slide.title}</h5>
                  </div>
                </div>
                <div className="event-card-events__content">
                  <button className="btn-enrol">Enrol Now</button>
                  <a href="#" className="btn-learn">Learn More</a>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default EventsBody; 