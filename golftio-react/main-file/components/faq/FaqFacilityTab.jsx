const FaqFacilityTab = () => {
  return (
    <div
      className="faq__tab-single tab-pane fade"
      id="faqFacility"
      role="tabpanel"
      aria-labelledby="faqFacility-tab"
      tabIndex="0"
    >
      <div className="faq__tab-single__inner">
        <div className="accordion" id="accordionFacility">
          <div className="accordion-item">
            <h5 className="accordion-header" id="headingFacilityOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFacilityOne"
                aria-expanded="true"
                aria-controls="collapseFacilityOne"
              >
                Are golf swing trainers worth it?
              </button>
            </h5>
            <div
              id="collapseFacilityOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingFacilityOne"
              data-bs-parent="#accordionFacility"
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
            <h5 className="accordion-header" id="headingFacilityTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFacilityTwo"
                aria-expanded="false"
                aria-controls="collapseFacilityTwo"
              >
                How do you train for golf?
              </button>
            </h5>
            <div
              id="collapseFacilityTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingFacilityTwo"
              data-bs-parent="#accordionFacility"
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
            <h5 className="accordion-header" id="headingFacilityThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFacilityThree"
                aria-expanded="false"
                aria-controls="collapseFacilityThree"
              >
                How do beginners train for golf?
              </button>
            </h5>
            <div
              id="collapseFacilityThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingFacilityThree"
              data-bs-parent="#accordionFacility"
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
            <h5 className="accordion-header" id="headingFacilityFour">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFacilityFour"
                aria-expanded="false"
                aria-controls="collapseFacilityFour"
              >
                How can I train my golf at home?
              </button>
            </h5>
            <div
              id="collapseFacilityFour"
              className="accordion-collapse collapse"
              aria-labelledby="headingFacilityFour"
              data-bs-parent="#accordionFacility"
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
            <h5 className="accordion-header" id="headingFacilityFive">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFacilityFive"
                aria-expanded="false"
                aria-controls="collapseFacilityFive"
              >
                What is the best golf swing speed trainer?
              </button>
            </h5>
            <div
              id="collapseFacilityFive"
              className="accordion-collapse collapse"
              aria-labelledby="headingFacilityFive"
              data-bs-parent="#accordionFacility"
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
            <h5 className="accordion-header" id="headingFacilitySix">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFacilitySix"
                aria-expanded="false"
                aria-controls="collapseFacilitySix"
              >
                Is golf forever worth it?
              </button>
            </h5>
            <div
              id="collapseFacilitySix"
              className="accordion-collapse collapse"
              aria-labelledby="headingFacilitySix"
              data-bs-parent="#accordionFacility"
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

export default FaqFacilityTab;
