import Image from "next/image";
import Social from "../social/Social";

const TeamCard = ({ data }) => {
  const { img, name, title } = data;
  return (
    <div className="team__slider-card">
      <div className="team__slider-card__thumb">
        <Image src={img} alt="Team" />
      </div>
      <div className="team__slider-card__content">
        <h5>{name}</h5>
        <p className="secondary-text">{title}</p>

        {/* social */}
        <Social
          cls="justify-content-center"
          items={[
            ["fa-facebook-f", "/"],
            ["fa-twitter", "/"],
            ["fa-linkedin-in", "/"],
            ["fa-square-instagram", "/"],
          ]}
        />
      </div>
    </div>
  );
};

export default TeamCard;
