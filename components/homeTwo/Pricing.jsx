import pricingPlanData from "@/data/pricingPlanData";
import PricingCard from "../card/PricingCard";

const Pricing = () => {
  return (
    <section className="section pricing wow fadeInUp" data-wow-duration="0.4s">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-10 col-lg-6 col-xl-7">
            <div className="section__header">
              <h5 className="section__header-sub-title">Pricing Plan</h5>
              <h2 className="section__header-title">
                Exclusive offer Choose our offer now
              </h2>
              <p>
                Golftio Sports Club is a golf club with a history that goes back
                to XX century. From a cricket club to soccer tournaments,
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center section__row">
          {pricingPlanData.map((plan) => (
            <div
              key={plan.id}
              className="col-sm-10 col-md-6 col-lg-4 section__col"
            >
              {/* Pricing Card */}
              <PricingCard data={plan} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
