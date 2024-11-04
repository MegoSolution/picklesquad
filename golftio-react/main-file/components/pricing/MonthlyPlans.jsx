import pricingPlanDataMonthly from "@/data/pricingPlanDataMonthly";
import PricingCard from "../card/PricingCard";

const MonthlyPlans = () => {
  return (
    <div
      className="plan-table tab-pane fade show active"
      id="plan-monthly"
      role="tabpanel"
      aria-labelledby="plan-monthly-tab"
      tabIndex="0"
    >
      <div className="row justify-content-center section__row tab-content">
        {pricingPlanDataMonthly.map((plan) => (
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

export default MonthlyPlans;
