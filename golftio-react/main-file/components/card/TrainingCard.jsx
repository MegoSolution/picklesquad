import Image from "next/image";
import Link from "next/link";

const TrainingCard = ({ training }) => {
  const { title, body, img } = training;
  return (
    <div className="training__slider-single">
      <div className="training__slider-single__thumb">
        <Link href="/training-details">
          <Image src={img} alt="Image" />
        </Link>
        <div className="training__slider-single__thumb-small">
          <i className="golftio-shot-down"></i>
        </div>
      </div>
      <div className="training__slider-single__content">
        <h5>
          <Link href="/training-details">{title}</Link>
        </h5>
        <p className="secondary-text">{body}</p>
        <Link
          href="/training-details"
          className="cmn-button cmn-button--secondary"
        >
          View more
        </Link>
      </div>
    </div>
  );
};

export default TrainingCard;
