const FaqPlanTab = () => {
  return (
    <div
      className="faq__tab-single tab-pane fade"
      id="faqPlan"
      role="tabpanel"
      aria-labelledby="faqPlan-tab"
      tabIndex="0"
    >
      <div className="faq__tab-single__inner">
        <div className="accordion" id="accordionPlan">
          <div className="accordion-item">
            <h5 className="accordion-header" id="headingPlanOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapsePlanOne"
                aria-expanded="true"
                aria-controls="collapsePlanOne"
              >
                Are golf swing trainers worth it?
              </button>
            </h5>
            <div
              id="collapsePlanOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingPlanOne"
              data-bs-parent="#accordionPlan"
            >
              <div className="accordion-body">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&#39;s
                  standard dummy text ever since...
                </p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h5 className="accordion-header" id="headingPlanTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapsePlanTwo"
                aria-expanded="false"
                aria-controls="collapsePlanTwo"
              >
                How do you train for golf?
              </button>
            </h5>
            <div
              id="collapsePlanTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingPlanTwo"
              data-bs-parent="#accordionPlan"
            >
              <div className="accordion-body">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&#39;s
                  standard dummy text ever since...
                </p>
              </div>
            </div>
          </div>
          <div className="accordion-item content__space">
            <h5 className="accordion-header" id="headingPlanThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapsePlanThree"
                aria-expanded="false"
                aria-controls="collapsePlanThree"
              >
                How do beginners train for golf?
              </button>
            </h5>
            <div
              id="collapsePlanThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingPlanThree"
              data-bs-parent="#accordionPlan"
            >
              <div className="accordion-body">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&#39;s
                  standard dummy text ever since...
                </p>
              </div>
            </div>
          </div>
          <div className="accordion-item content__space">
            <h5 className="accordion-header" id="headingPlanFour">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapsePlanFour"
                aria-expanded="false"
                aria-controls="collapsePlanFour"
              >
                How can I train my golf at home?
              </button>
            </h5>
            <div
              id="collapsePlanFour"
              className="accordion-collapse collapse"
              aria-labelledby="headingPlanFour"
              data-bs-parent="#accordionPlan"
            >
              <div className="accordion-body">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&#39;s
                  standard dummy text ever since...
                </p>
              </div>
            </div>
          </div>
          <div className="accordion-item content__space">
            <h5 className="accordion-header" id="headingPlanFive">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapsePlanFive"
                aria-expanded="false"
                aria-controls="collapsePlanFive"
              >
                What is the best golf swing speed trainer?
              </button>
            </h5>
            <div
              id="collapsePlanFive"
              className="accordion-collapse collapse"
              aria-labelledby="headingPlanFive"
              data-bs-parent="#accordionPlan"
            >
              <div className="accordion-body">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&#39;s
                  standard dummy text ever since...
                </p>
              </div>
            </div>
          </div>
          <div className="accordion-item content__space">
            <h5 className="accordion-header" id="headingPlanSix">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapsePlanSix"
                aria-expanded="false"
                aria-controls="collapsePlanSix"
              >
                Is golf forever worth it?
              </button>
            </h5>
            <div
              id="collapsePlanSix"
              className="accordion-collapse collapse"
              aria-labelledby="headingPlanSix"
              data-bs-parent="#accordionPlan"
            >
              <div className="accordion-body">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&#39;s
                  standard dummy text ever since...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqPlanTab;
