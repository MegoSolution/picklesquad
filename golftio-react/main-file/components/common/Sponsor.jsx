import Image from "next/image";
import Slider from "react-slick";
import five from "/public/images/sponsor/five.png";
import four from "/public/images/sponsor/four.png";
import one from "/public/images/sponsor/one.png";
import six from "/public/images/sponsor/six.png";
import three from "/public/images/sponsor/three.png";
import two from "/public/images/sponsor/two.png";

const sponsorData = [
  {
    id: 1,
    img: one,
  },
  {
    id: 2,
    img: two,
  },
  {
    id: 3,
    img: three,
  },
  {
    id: 4,
    img: four,
  },
  {
    id: 5,
    img: five,
  },
  {
    id: 6,
    img: six,
  },
  {
    id: 7,
    img: one,
  },
  {
    id: 8,
    img: two,
  },
  {
    id: 9,
    img: three,
  },
  {
    id: 10,
    img: four,
  },
  {
    id: 11,
    img: five,
  },
  {
    id: 12,
    img: six,
  },
];

const Sponsor = () => {
  const settings = {
    infinite: true,
    autoplay: true,
    focusOnSelect: true,
    slidesToShow: 7,
    speed: 900,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    centerMode: true,
    centerPadding: "0px",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 424,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="sponsor wow fadeInUp" data-wow-duration="0.4s">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Slider {...settings} className="sponsor__inner">
              {sponsorData.map((itm) => (
                <div key={itm.id} className="sponsor__inner-card">
                  <Image src={itm.img} alt="Sponsor" />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsor;
