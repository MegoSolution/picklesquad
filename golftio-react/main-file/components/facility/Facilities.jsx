import facilityData from "@/data/facilityData";
import FacilityCardWIthImg from "../card/FacilityCardWIthImg";
import Pagination from "../pagination/Pagination";

const Facilities = () => {
  return (
    <section
      className="section facility--main wow fadeInUp"
      data-wow-duration="0.4s"
    >
      <div className="container">
        <div className="row section__row justify-content-center">
          {facilityData.map((itm) => (
            <div
              key={itm.id}
              className="col-sm-10 col-md-6 col-lg-4 col-xxl-3 section__col"
            >
              <FacilityCardWIthImg data={itm} />
            </div>
          ))}
        </div>
        <div className="row">
          <div className="col-12 justify-content-center section__cta">
            {/* Pagination */}
            <Pagination />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facilities;
