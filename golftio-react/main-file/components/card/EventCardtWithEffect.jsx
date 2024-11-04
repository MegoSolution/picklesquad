import Image from "next/image";
import Link from "next/link";

const EventCardtWithEffect = ({ data }) => {
  const { date, time, name, location, fee, img } = data;
  return (
    <div className="event--secondary__slider-card">
      <Image src={img} alt="Image" />
      <div className="event--secondary__slider-card--alt">
        <h3>
          {date} <span className="primary-text">Nov</span>
        </h3>
        <p>{time}</p>
        <h5>{name}</h5>
        <p className="secondary-text">
          <i className="golftio-location"></i> {location}
        </p>
        <p>${fee}</p>
        <Link href="/join-club" className="cmn-button">
          Join Now
        </Link>
      </div>
    </div>
  );
};

export default EventCardtWithEffect;
