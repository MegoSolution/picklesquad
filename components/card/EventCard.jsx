import Image from "next/image";
import Link from "next/link";

const EventCard = ({ data }) => {
  const { date, time, title, location, img, fee } = data;

  return (
    <div className="event__single">
      <div className="event__single-thumb">
        <Link href="/sign-up">
          <Image src={img} alt="Image" />
        </Link>
      </div>
      <div className="event__single-content">
        <h3>
          {date} <span className="primary-text">Nov</span>
        </h3>
        <p>{time}</p>
        <h5>{title}</h5>
        <p className="secondary-text">
          <i className="golftio-location"></i> {location}
        </p>
        <p> ${fee}</p>
        <Link href="/sign-up" className="cmn-button">
          Join Now
        </Link>
      </div>
    </div>
  );
};

export default EventCard;
