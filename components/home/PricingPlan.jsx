import Image from "next/image";
import pricingPlanDataMonthly from "@/data/pricingPlanDataMonthly";
import pricingPlanDataYearly from "@/data/pricingPlanDataYearly";
import PricingCardOne from "../card/PricingCardOne";

const PricingPlan = () => {
  return (
    <section
      className="section pricing pricing--secondary pricing-background wow fadeInUp"
      data-wow-duration="0.4s"
    >
      

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <div className="section__header">
              <h5 className="section__header-sub-title">Pricing Plan</h5>
              <h2 className="section__header-title">Membership Pricing</h2>
              <p>
                Join the PickleSquad family and enjoy exclusive benefits tailored
                to enhance your pickleball experience. From priority court
                bookings to personalized coaching sessions, our membership plans
                cater to all skill levels and ensure you get the most out of every game.
              </p>
              <div
                className="toggle-plan toggle-plan-alt"
                id="pricing-tab"
                role="tablist"
              >
                <div role="presentation">
                  <button
                    className="plan-toggle active"
                    id="plan-monthly-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#plan-monthly"
                    type="button"
                    role="tab"
                    aria-controls="plan-monthly"
                    aria-selected="true"
                  >
                    Monthly
                  </button>
                </div>
                <div role="presentation">
                  <button
                    className="plan-toggle"
                    id="plan-yearly-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#plan-yearly"
                    type="button"
                    role="tab"
                    aria-controls="plan-yearly"
                    aria-selected="false"
                  >
                    Annually
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 tab-content" id="pricing-tabContent">
            <div
              className="plan-table tab-pane fade show active"
              id="plan-monthly"
              role="tabpanel"
              aria-labelledby="plan-monthly-tab"
              tabIndex="0"
            >
              <div className="row justify-content-center section__row">
                {pricingPlanDataMonthly.map((itm, i) => (
                  <div
                    key={itm.id}
                    className="col-sm-10 col-md-6 col-lg-4 section__col"
                  >
                    <PricingCardOne
                      data={itm}
                      cls={`${i == 1 ? "pricing__card--active" : ""}`}
                      btnCls={`${i == 1 ? "cmn-button--secondary" : ""}`}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div
              className="plan-table tab-pane fade"
              id="plan-yearly"
              role="tabpanel"
              aria-labelledby="plan-yearly-tab"
              tabIndex="0"
            >
              <div className="row justify-content-center section__row">
                {pricingPlanDataYearly.map((itm, i) => (
                  <div
                    key={itm.id}
                    className="col-sm-10 col-md-6 col-lg-4 section__col"
                  >
                    <PricingCardOne
                      data={itm}
                      cls={`${i == 1 ? "pricing__card--active" : ""}`}
                      btnCls={`${i == 1 ? "cmn-button--secondary" : ""}`}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPlan;
