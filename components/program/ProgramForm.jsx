import { useEffect, useState } from "react";
import ProgramCard from "./ProgramCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BASE_URL } from '../../utils/constants';
import { useSelector } from "react-redux";

const ProgramForm = () => {
  const [programData, setProgramData] = useState([]);
  const accessToken = useSelector((state) => state.accessToken);

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0",
    speed: 500,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
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

  useEffect(() => {
    fetch(`${BASE_URL}/programs`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch program data");
        }
        return response.json();
      })
      .then((data) => {
        setProgramData(data.results || []);
      })
      .catch((error) => console.error("Error fetching programs:", error));
  }, []);

  return (
    <section className="programs-container section">
      <div className="section__header">
        <h3>Programs</h3>
      </div>
      <Slider {...settings} className="programs-slider">
        {programData.map((program, index) => (
          <div key={program.id || index}>
            <div className="program-card">
              <ProgramCard data={program} />
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default ProgramForm;