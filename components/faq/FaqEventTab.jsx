const FaqEventTab = () => {
  return (
    <div
      className="faq__tab-single tab-pane fade"
      id="faqEvent"
      role="tabpanel"
      aria-labelledby="faqEvent-tab"
      tabIndex="0"
    >
      <div className="faq__tab-single__inner">
        <div className="accordion" id="accordionEvent">
          <div className="accordion-item">
            <h5 className="accordion-header" id="headingEventOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseEventOne"
                aria-expanded="true"
                aria-controls="collapseEventOne"
              >
                Are golf swing trainers worth it?
              </button>
            </h5>
            <div
              id="collapseEventOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingEventOne"
              data-bs-parent="#accordionEvent"
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
            <h5 className="accordion-header" id="headingEventTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseEventTwo"
                aria-expanded="false"
                aria-controls="collapseEventTwo"
              >
                How do you train for golf?
              </button>
            </h5>
            <div
              id="collapseEventTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingEventTwo"
              data-bs-parent="#accordionEvent"
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
            <h5 className="accordion-header" id="headingEventThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseEventThree"
                aria-expanded="false"
                aria-controls="collapseEventThree"
              >
                How do beginners train for golf?
              </button>
            </h5>
            <div
              id="collapseEventThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingEventThree"
              data-bs-parent="#accordionEvent"
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
            <h5 className="accordion-header" id="headingEventFour">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseEventFour"
                aria-expanded="false"
                aria-controls="collapseEventFour"
              >
                How can I train my golf at home?
              </button>
            </h5>
            <div
              id="collapseEventFour"
              className="accordion-collapse collapse"
              aria-labelledby="headingEventFour"
              data-bs-parent="#accordionEvent"
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
            <h5 className="accordion-header" id="headingEventFive">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseEventFive"
                aria-expanded="false"
                aria-controls="collapseEventFive"
              >
                What is the best golf swing speed trainer?
              </button>
            </h5>
            <div
              id="collapseEventFive"
              className="accordion-collapse collapse"
              aria-labelledby="headingEventFive"
              data-bs-parent="#accordionEvent"
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
            <h5 className="accordion-header" id="headingEventSix">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseEventSix"
                aria-expanded="false"
                aria-controls="collapseEventSix"
              >
                Is golf forever worth it?
              </button>
            </h5>
            <div
              id="collapseEventSix"
              className="accordion-collapse collapse"
              aria-labelledby="headingEventSix"
              data-bs-parent="#accordionEvent"
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

export default FaqEventTab;
