import FaqClubTab from "./FaqClubTab";
import FaqEventTab from "./FaqEventTab";
import FaqFacilityTab from "./FaqFacilityTab";
import FaqPlanTab from "./FaqPlanTab";
import FaqShopTab from "./FaqShopTab";
import FaqTrainingTab from "./FaqTrainingTab";

const FaqBody = () => {
  return (
    <section className="faq section">
      <div className="container">
        <div className="row justify-content-center section__row">
          <div className="col-lg-4 col-xl-4 section__col">
            <div
              className="faq__tab-btns wow fadeInUp"
              data-wow-duration="0.4s"
              id="faq-tab"
              role="tablist"
            >
              <div role="presentation">
                <button
                  className="faq-tab-btn active"
                  id="faqClub-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#faqClub"
                  type="button"
                  role="tab"
                  aria-controls="faqClub"
                  aria-selected="true"
                >
                  <i className="golftio-ball"></i> Golf Club
                </button>
              </div>
              <div role="presentation">
                <button
                  className="faq-tab-btn"
                  id="faqFacility-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#faqFacility"
                  type="button"
                  role="tab"
                  aria-controls="faqFacility"
                  aria-selected="false"
                >
                  <i className="golftio-flag"></i> Facility
                </button>
              </div>
              <div role="presentation">
                <button
                  className="faq-tab-btn"
                  id="faqTraining-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#faqTraining"
                  type="button"
                  role="tab"
                  aria-controls="faqTraining"
                  aria-selected="false"
                >
                  <i className="golftio-shot-down"></i> Training
                </button>
              </div>
              <div role="presentation">
                <button
                  className="faq-tab-btn"
                  id="faqEvent-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#faqEvent"
                  type="button"
                  role="tab"
                  aria-controls="faqEvent"
                  aria-selected="false"
                >
                  <i className="golftio-flag-shot"></i> Event
                </button>
              </div>
              <div role="presentation">
                <button
                  className="faq-tab-btn"
                  id="faqShop-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#faqShop"
                  type="button"
                  role="tab"
                  aria-controls="faqShop"
                  aria-selected="false"
                >
                  <i className="golftio-sticks"></i> Shop
                </button>
              </div>
              <div role="presentation">
                <button
                  className="faq-tab-btn"
                  id="faqPlan-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#faqPlan"
                  type="button"
                  role="tab"
                  aria-controls="faqPlan"
                  aria-selected="false"
                >
                  <i className="golftio-file"></i> Pricing Plan
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-8 col-xl-6 section__col">
            <div className="faq__tab tab-content" id="faq-tabContent">
              {/* Faq Club Tab */}
              <FaqClubTab />

              {/* Faq Facility Tab */}
              <FaqFacilityTab />

              {/* Faq Training Tab */}
              <FaqTrainingTab />

              {/* Faq Event Tab */}
              <FaqEventTab />

              {/* Faq Shop Tab */}
              <FaqShopTab />

              {/* Faq Plan Tab */}
              <FaqPlanTab />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqBody;
