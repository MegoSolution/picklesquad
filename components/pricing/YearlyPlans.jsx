import pricingPlanDataYearly from "@/data/pricingPlanDataYearly";
import PricingCard from "../card/PricingCard";

const YearlyPlans = () => {
  return (
    <div
      className="plan-table tab-pane fade"
      id="plan-yearly"
      role="tabpanel"
      aria-labelledby="plan-yearly-tab"
      tabIndex="0"
    >
      <div className="row justify-content-center section__row">
        {pricingPlanDataYearly.map((plan) => (
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
  );
};

export default YearlyPlans;
