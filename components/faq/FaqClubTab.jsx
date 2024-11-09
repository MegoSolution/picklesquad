const FaqClubTab = () => {
  return (
    <div
      className="faq__tab-single tab-pane fade active show"
      id="faqClub"
      role="tabpanel"
      aria-labelledby="faqClub-tab"
      tabIndex="0"
    >
      <div className="faq__tab-single__inner">
        <div className="accordion" id="accordionClub">
          <div className="accordion-item">
            <h5 className="accordion-header" id="headingClubOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseClubOne"
                aria-expanded="true"
                aria-controls="collapseClubOne"
              >
                Are golf swing trainers worth it?
              </button>
            </h5>
            <div
              id="collapseClubOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingClubOne"
              data-bs-parent="#accordionClub"
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
            <h5 className="accordion-header" id="headingClubTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseClubTwo"
                aria-expanded="false"
                aria-controls="collapseClubTwo"
              >
                How do you train for golf?
              </button>
            </h5>
            <div
              id="collapseClubTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingClubTwo"
              data-bs-parent="#accordionClub"
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
            <h5 className="accordion-header" id="headingClubThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseClubThree"
                aria-expanded="false"
                aria-controls="collapseClubThree"
              >
                How do beginners train for golf?
              </button>
            </h5>
            <div
              id="collapseClubThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingClubThree"
              data-bs-parent="#accordionClub"
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
            <h5 className="accordion-header" id="headingClubFour">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseClubFour"
                aria-expanded="false"
                aria-controls="collapseClubFour"
              >
                How can I train my golf at home?
              </button>
            </h5>
            <div
              id="collapseClubFour"
              className="accordion-collapse collapse"
              aria-labelledby="headingClubFour"
              data-bs-parent="#accordionClub"
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
            <h5 className="accordion-header" id="headingClubFive">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseClubFive"
                aria-expanded="false"
                aria-controls="collapseClubFive"
              >
                What is the best golf swing speed trainer?
              </button>
            </h5>
            <div
              id="collapseClubFive"
              className="accordion-collapse collapse"
              aria-labelledby="headingClubFive"
              data-bs-parent="#accordionClub"
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
            <h5 className="accordion-header" id="headingClubSix">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseClubSix"
                aria-expanded="false"
                aria-controls="collapseClubSix"
              >
                Is golf forever worth it?
              </button>
            </h5>
            <div
              id="collapseClubSix"
              className="accordion-collapse collapse"
              aria-labelledby="headingClubSix"
              data-bs-parent="#accordionClub"
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

export default FaqClubTab;
