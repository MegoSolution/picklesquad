const FaqTrainingTab = () => {
  return (
    <div
      className="faq__tab-single tab-pane fade"
      id="faqTraining"
      role="tabpanel"
      aria-labelledby="faqTraining-tab"
      tabIndex="0"
    >
      <div className="faq__tab-single__inner">
        <div className="accordion" id="accordionTraining">
          <div className="accordion-item">
            <h5 className="accordion-header" id="headingTrainingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTrainingOne"
                aria-expanded="true"
                aria-controls="collapseTrainingOne"
              >
                Are golf swing trainers worth it?
              </button>
            </h5>
            <div
              id="collapseTrainingOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingTrainingOne"
              data-bs-parent="#accordionTraining"
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
            <h5 className="accordion-header" id="headingTrainingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTrainingTwo"
                aria-expanded="false"
                aria-controls="collapseTrainingTwo"
              >
                How do you train for golf?
              </button>
            </h5>
            <div
              id="collapseTrainingTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTrainingTwo"
              data-bs-parent="#accordionTraining"
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
            <h5 className="accordion-header" id="headingTrainingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTrainingThree"
                aria-expanded="false"
                aria-controls="collapseTrainingThree"
              >
                How do beginners train for golf?
              </button>
            </h5>
            <div
              id="collapseTrainingThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingTrainingThree"
              data-bs-parent="#accordionTraining"
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
            <h5 className="accordion-header" id="headingTrainingFour">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTrainingFour"
                aria-expanded="false"
                aria-controls="collapseTrainingFour"
              >
                How can I train my golf at home?
              </button>
            </h5>
            <div
              id="collapseTrainingFour"
              className="accordion-collapse collapse"
              aria-labelledby="headingTrainingFour"
              data-bs-parent="#accordionTraining"
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
            <h5 className="accordion-header" id="headingTrainingFive">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTrainingFive"
                aria-expanded="false"
                aria-controls="collapseTrainingFive"
              >
                What is the best golf swing speed trainer?
              </button>
            </h5>
            <div
              id="collapseTrainingFive"
              className="accordion-collapse collapse"
              aria-labelledby="headingTrainingFive"
              data-bs-parent="#accordionTraining"
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
            <h5 className="accordion-header" id="headingTrainingSix">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTrainingSix"
                aria-expanded="false"
                aria-controls="collapseTrainingSix"
              >
                Is golf forever worth it?
              </button>
            </h5>
            <div
              id="collapseTrainingSix"
              className="accordion-collapse collapse"
              aria-labelledby="headingTrainingSix"
              data-bs-parent="#accordionTraining"
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

export default FaqTrainingTab;
