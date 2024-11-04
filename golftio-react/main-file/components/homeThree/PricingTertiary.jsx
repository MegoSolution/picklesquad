import pricingPlanDataMonthly from "@/data/pricingPlanDataMonthly";
import pricingPlanDataYearly from "@/data/pricingPlanDataYearly";
import PricingCardTwo from "../card/PricingCardTwo";

const PricingTertiary = () => {
  return (
    <section
      className="section pricing pricing--secondary pricing--tertiary wow fadeInUp"
      data-wow-duration="0.4s"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <div className="section__header">
              <h5 className="section__header-sub-title">Pricing Plan</h5>
              <h2 className="section__header-title">Choose our offer</h2>
              <p>
                Golftio Sports Club is a golf club with a history that goes back
                to XX century. From a cricket club to soccer tournaments,
              </p>
              <div
                className="toggle-plan toggle-plan-alt"
                id="pricing-tab"
                role="tablist"
              >
                <div role="presentation">
                  <button
                    className="plan-toggle-two active"
                    id="planMonthly-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#planMonthly"
                    type="button"
                    role="tab"
                    aria-controls="planMonthly"
                    aria-selected="true"
                  >
                    Per Month
                  </button>
                </div>
                <div role="presentation">
                  <button
                    className="plan-toggle-two"
                    id="planYearly-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#planYearly"
                    type="button"
                    role="tab"
                    aria-controls="planYearly"
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
            <div
              className="plan-table-two tab-pane fade show active"
              //   id="planMonthly"
              id="planMonthly"
              role="tabpanel"
              aria-labelledby="planMonthly-tab"
              tabIndex="0"
            >
              <div className="row justify-content-center section__row">
                {pricingPlanDataMonthly.map((itm, i) => (
                  <div
                    key={itm.id}
                    className="col-sm-10 col-md-6 col-lg-4 section__col"
                  >
                    <PricingCardTwo
                      data={itm}
                      cls={`${i === 1 ? "pricing__card--active" : ""}`}
                      btnCls={`${i !== 1 ? "cmn-button--secondary" : ""}`}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div
              className="plan-table-two tab-pane fade"
              // id="planYearly"
              id="planYearly"
              role="tabpanel"
              aria-labelledby="planYearly-tab"
              tabIndex="0"
            >
              <div className="row justify-content-center section__row">
                {pricingPlanDataYearly.map((itm, i) => (
                  <div
                    key={itm.id}
                    className="col-sm-10 col-md-6 col-lg-4 section__col"
                  >
                    <PricingCardTwo
                      data={itm}
                      cls={`${i === 1 ? "pricing__card--active" : ""}`}
                      btnCls={`${i !== 1 ? "cmn-button--secondary" : ""}`}
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

export default PricingTertiary;
