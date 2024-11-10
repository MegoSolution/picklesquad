import Image from "next/image";
import Link from "next/link";

const FacilityCardWIthImg = ({ data }) => {
  const { name, desc, img } = data;
  return (
    <div className="facility--main__card">
      <div className="facility--main__card-thumb">
        <Link href="/facility/1">
          <Image src={img} alt="Image" />
        </Link>
      </div>
      <div className="facility--main__card-content">
        <h5>
          <Link href="/facility/1">{name}</Link>
        </h5>
        <p className="secondary-text">{desc}</p>
        <Link href="/facility/1" className="facility--main__card-content__cta">
          View more <i className="golftio-long-right-arrow"></i>
        </Link>
      </div>
    </div>
  );
};

export default FacilityCardWIthImg;
