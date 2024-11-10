const FaqShopTab = () => {
  return (
    <div
      className="faq__tab-single tab-pane fade"
      id="faqShop"
      role="tabpanel"
      aria-labelledby="faqShop-tab"
      tabIndex="0"
    >
      <div className="faq__tab-single__inner">
        <div className="accordion" id="accordionShop">
          <div className="accordion-item">
            <h5 className="accordion-header" id="headingShopOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseShopOne"
                aria-expanded="true"
                aria-controls="collapseShopOne"
              >
                Are golf swing trainers worth it?
              </button>
            </h5>
            <div
              id="collapseShopOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingShopOne"
              data-bs-parent="#accordionShop"
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
            <h5 className="accordion-header" id="headingShopTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseShopTwo"
                aria-expanded="false"
                aria-controls="collapseShopTwo"
              >
                How do you train for golf?
              </button>
            </h5>
            <div
              id="collapseShopTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingShopTwo"
              data-bs-parent="#accordionShop"
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
            <h5 className="accordion-header" id="headingShopThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseShopThree"
                aria-expanded="false"
                aria-controls="collapseShopThree"
              >
                How do beginners train for golf?
              </button>
            </h5>
            <div
              id="collapseShopThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingShopThree"
              data-bs-parent="#accordionShop"
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
            <h5 className="accordion-header" id="headingShopFour">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseShopFour"
                aria-expanded="false"
                aria-controls="collapseShopFour"
              >
                How can I train my golf at home?
              </button>
            </h5>
            <div
              id="collapseShopFour"
              className="accordion-collapse collapse"
              aria-labelledby="headingShopFour"
              data-bs-parent="#accordionShop"
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
            <h5 className="accordion-header" id="headingShopFive">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseShopFive"
                aria-expanded="false"
                aria-controls="collapseShopFive"
              >
                What is the best golf swing speed trainer?
              </button>
            </h5>
            <div
              id="collapseShopFive"
              className="accordion-collapse collapse"
              aria-labelledby="headingShopFive"
              data-bs-parent="#accordionShop"
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
            <h5 className="accordion-header" id="headingShopSix">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseShopSix"
                aria-expanded="false"
                aria-controls="collapseShopSix"
              >
                Is golf forever worth it?
              </button>
            </h5>
            <div
              id="collapseShopSix"
              className="accordion-collapse collapse"
              aria-labelledby="headingShopSix"
              data-bs-parent="#accordionShop"
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

export default FaqShopTab;
