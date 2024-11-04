import Image from "next/image";
import Link from "next/link";

const TrainingCardThree = ({ training }) => {
  const { title, body, img } = training;
  return (
    <div className="training--tertiary__card">
      <div className="training--tertiary__card-thumb">
        <Link href="/training-details">
          <Image src={img} alt="Image" />
        </Link>
      </div>
      <div className="training--tertiary__card-content">
        <h5>
          <Link href="/training-details">{title}</Link>
        </h5>
        <p className="secondary-text">{body?.substr(0, 80)}...</p>
        <Link href="/training-details" className="cmn-button">
          View more
        </Link>
      </div>
    </div>
  );
};

export default TrainingCardThree;
