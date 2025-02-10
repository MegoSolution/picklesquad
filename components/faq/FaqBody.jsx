import FaqClubTab from "./FaqClubTab";
import FaqFacilityTab from "./FaqFacilityTab";
import FaqPoliciesTab from "./FaqPoliciesTab";
import FaqGettingStartedTab from "./FaqGettingStartedTab";
import FaqBookingTab from "./FaqBookingTab";
import FaqServicesTab from "./FaqServicesTab";
import FaqOthersTab from "./FaqOthersTab";

const FaqBody = () => {
  return (
    <section className="faq section">
      <div className="container">
        <div className="section__header">
          <h3>Frequently Asked Questions</h3>
        </div>
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
                  <i className="fa-solid fa-house"></i> General
                </button>
              </div>
              <div role="presentation">
                <button
                  className="faq-tab-btn"
                  id="faqGettingStarted-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#faqGettingStarted"
                  type="button"
                  role="tab"
                  aria-controls="faqGettingStarted"
                  aria-selected="false"
                >
                  <i className="fa-solid fa-circle-info"></i> Getting Started
                </button>
              </div>
              <div role="presentation">
                <button
                  className="faq-tab-btn"
                  id="faqBooking-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#faqBooking"
                  type="button"
                  role="tab"
                  aria-controls="faqBooking"
                  aria-selected="false"
                >
                  <i className="fa-solid fa-calendar-check"></i> Bookings & Reservations
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
                  <i className="fa-solid fa-building"></i> Facility & Equipment
                </button>
              </div>
              <div role="presentation">
                <button
                  className="faq-tab-btn"
                  id="faqPolicies-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#faqPolicies"
                  type="button"
                  role="tab"
                  aria-controls="faqPolicies"
                  aria-selected="false"
                >
                  <i className="fa-solid fa-clipboard-list"></i> Policies
                </button>
              </div>
              <div role="presentation">
                <button
                  className="faq-tab-btn"
                  id="faqServices-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#faqServices"
                  type="button"
                  role="tab"
                  aria-controls="faqServices"
                  aria-selected="false"
                >
                  <i className="fa-solid fa-handshake"></i> Services
                </button>
              </div>
              <div role="presentation">
                <button
                  className="faq-tab-btn"
                  id="faqOthers-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#faqOthers"
                  type="button"
                  role="tab"
                  aria-controls="faqOthers"
                  aria-selected="false"
                >
                  <i className="fa-solid fa-circle-question"></i> Others
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-8 col-xl-6 section__col">
            <div className="faq__tab tab-content" id="faq-tabContent">
              {/* Faq Club Tab */}
              <FaqClubTab />

              {/* Faq Getting Started Tab */}
              <FaqGettingStartedTab />

              {/* Faq Booking Tab */}
              <FaqBookingTab />

              {/* Faq Facility Tab */}
              <FaqFacilityTab />

              {/* Faq Policies Tab */}
              <FaqPoliciesTab />

              {/* Faq Services Tab */}
              <FaqServicesTab />

              {/* Faq Others Tab */}
              <FaqOthersTab />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqBody;
