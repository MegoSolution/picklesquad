import trainingsData from "@/data/trainingsData";
import TrainingCard from "../card/TrainingCard";
import Pagination from "../pagination/Pagination";

const Trainings = () => {
  return (
    <section
      className="section training training--main wow fadeInUp"
      data-wow-duration="0.4s"
    >
      <div className="container">
        <div className="row justify-content-center section__row">
          {trainingsData.map((training) => (
            <div key={training.id} className="col-md-6 col-xl-4 section__col">
              {/* Training Card */}
              <TrainingCard training={training} />
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

export default Trainings;
