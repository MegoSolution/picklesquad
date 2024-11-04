import Link from "next/link";

const FacilityCard = ({ data }) => {
  const { name, desc, icon } = data;
  return (
    <div className="facility__card">
      <div className="facility__card-icon">
        <i className={icon}></i>
      </div>
      <div className="facility__card-content">
        <h5>
          <Link href="/facility/1">{name}</Link>
        </h5>
        <p className="secondary-text">{desc}</p>
      </div>
    </div>
  );
};

export default FacilityCard;
