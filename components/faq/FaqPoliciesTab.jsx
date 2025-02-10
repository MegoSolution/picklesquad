const FaqPoliciesTab = () => {
  return (
    <div
      className="tab-pane fade"
      id="faqPolicies"
      role="tabpanel"
      aria-labelledby="faqPolicies-tab"
    >
      <div className="faq__tab-single__inner">
        <div className="accordion" id="accordionPolicies">
          <div className="accordion-item">
            <h5 className="accordion-header mt-0" id="headingPoliciesOne">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapsePoliciesOne"
                aria-expanded="false"
                aria-controls="collapsePoliciesOne"
              >
                Cancellation Policy
              </button>
            </h5>
            <div
              id="collapsePoliciesOne"
              className="accordion-collapse collapse"
              aria-labelledby="headingPoliciesOne"
              data-bs-parent="#accordionPolicies"
            >
              <div className="accordion-body">
                <p>Court bookings are <strong>non-cancellable</strong>; however, they can be <strong>transferred to another person</strong> if needed. Exceptions may be considered in cases of hazardous weather or extenuating circumstances.</p>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h5 className="accordion-header mt-4" id="headingPoliciesTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapsePoliciesTwo"
                aria-expanded="false"
                aria-controls="collapsePoliciesTwo"
              >
                Late Arrival Policy
              </button>
            </h5>
            <div
              id="collapsePoliciesTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingPoliciesTwo"
              data-bs-parent="#accordionPolicies"
            >
              <div className="accordion-body">
                <p><strong>For court rentals</strong>, reservations begin promptly at the scheduled time, and late arrivals will not receive an extension. Fees will not be prorated for lost time. If you need to reschedule due to unforeseen circumstances, please email <strong>picklesquad624@gmail.com</strong> as soon as possible. We will do our best to accommodate your request if the court is available after your original booking, but rescheduling is not guaranteed.</p>
                <p><strong>For group lessons</strong>, punctuality is essential. Late arrivals will not be permitted to join once the lesson has started, and the session will be marked as a No-Show with no refunds or credits issued.</p>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h5 className="accordion-header mt-4" id="headingPoliciesThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapsePoliciesThree"
                aria-expanded="false"
                aria-controls="collapsePoliciesThree"
              >
                No-Show Policy
              </button>
            </h5>
            <div
              id="collapsePoliciesThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingPoliciesThree"
              data-bs-parent="#accordionPolicies"
            >
              <div className="accordion-body">
                <p>If you fail to check in within <strong>15 minutes</strong> of your reserved court, group lesson, or private lesson start time, your booking will be forfeited and charged in full. While we understand that unforeseen situations may arise, we encourage you to notify us in advance in case of emergencies so we can assess your situation at our discretion.</p>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h5 className="accordion-header mt-4" id="headingPoliciesFour">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapsePoliciesFour"
                aria-expanded="false"
                aria-controls="collapsePoliciesFour"
              >
                Refund Policy
              </button>
            </h5>
            <div
              id="collapsePoliciesFour"
              className="accordion-collapse collapse"
              aria-labelledby="headingPoliciesFour"
              data-bs-parent="#accordionPolicies"
            >
              <div className="accordion-body">
                <p>All sales for <strong>court rentals, group lesson packages, and private lesson packages</strong> are final and non-refundable.</p>
                <p>For any inquiries or special requests, please contact us at <strong>picklesquad624@gmail.com</strong>.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqPoliciesTab; 