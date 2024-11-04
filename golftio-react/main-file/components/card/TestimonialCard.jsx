import Image from "next/image";

const TestimonialCard = ({ data }) => {
  const { comment, name, title, img, reating } = data;
  return (
    <div className="testimonial__slider-card">
      <div className="testimonial__slider-card__body">
        <div className="testimonial__slider-card__body-review">
          {[...Array(reating)].map((_, i) => (
            <i key={i} className="golftio-star"></i>
          ))}
        </div>
        <p>{comment}</p>
      </div>
      <div className="testimonial__slider-card__author">
        <div className="testimonial__slider-card__author-thumb">
          <Image src={img} alt="Image" />
        </div>
        <div className="testimonial__slider-card__author-info">
          <h6>{name}</h6>
          <p className="secondary-text">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
