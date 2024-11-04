import MonthlyPlans from "./MonthlyPlans";
import YearlyPlans from "./YearlyPlans";

const AllPricingPlan = () => {
  return (
    <section className="section pricing wow fadeInUp" data-wow-duration="0.4s">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <div className="section__header">
              <div className="toggle-plan" id="pricing-tab" role="tablist">
                <div role="presentation">
                  <button
                    //   href="#plan-monthly"
                    className="plan-toggle active"
                    id="plan-monthly-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#plan-monthly"
                    type="button"
                    role="tab"
                    aria-controls="plan-monthly"
                    aria-selected="true"
                  >
                    Per Month
                  </button>
                </div>
                <div role="presentation">
                  <button
                    //   href="#plan-yearly"
                    className="plan-toggle"
                    id="plan-yearly-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#plan-yearly"
                    type="button"
                    role="tab"
                    aria-controls="plan-yearly"
                    aria-selected="false"
                  >
                    Per Year
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 tab-content" id="pricing-tabContent">
            {/* Monthly Plans */}
            <MonthlyPlans />

            {/* Yearly Plans */}
            <YearlyPlans />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllPricingPlan;
