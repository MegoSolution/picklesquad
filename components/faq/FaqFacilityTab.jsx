const FaqFacilityTab = () => {
  return (
    <div
      className="tab-pane fade"
      id="faqFacility"
      role="tabpanel"
      aria-labelledby="faqFacility-tab"
    >
      <div className="faq__tab-single__inner">
        <div className="accordion" id="accordionFacility">
          <div className="accordion-item">
            <h5 className="accordion-header mt-0" id="headingFacilityOne">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFacilityOne"
                aria-expanded="false"
                aria-controls="collapseFacilityOne"
              >
                Are there shower and locker facilities?
              </button>
            </h5>
            <div
              id="collapseFacilityOne"
              className="accordion-collapse collapse"
              aria-labelledby="headingFacilityOne"
              data-bs-parent="#accordionFacility"
            >
              <div className="accordion-body">
                <p>Yes, we provide <strong>shower facilities</strong> for your convenience. However, lockers are not available at the moment.</p>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h5 className="accordion-header mt-4" id="headingFacilityTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFacilityTwo"
                aria-expanded="false"
                aria-controls="collapseFacilityTwo"
              >
                Is parking available?
              </button>
            </h5>
            <div
              id="collapseFacilityTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingFacilityTwo"
              data-bs-parent="#accordionFacility"
            >
              <div className="accordion-body">
                <p>Yes! All our locations offer <strong>ample parking on-site</strong>. If the main parking area is full, additional spaces are available along the roadside nearby.</p>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h5 className="accordion-header mt-4" id="headingFacilityThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFacilityThree"
                aria-expanded="false"
                aria-controls="collapseFacilityThree"
              >
                Can I rent or purchase equipment at PickleSquad?
              </button>
            </h5>
            <div
              id="collapseFacilityThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingFacilityThree"
              data-bs-parent="#accordionFacility"
            >
              <div className="accordion-body">
                <p>Absolutely! We offer <strong>PickleSquad-branded paddle rentals</strong> and sell our own <strong>tournament-grade 40-hole outdoor pickleballs</strong> to enhance your game.</p>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h5 className="accordion-header mt-4" id="headingFacilityFour">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFacilityFour"
                aria-expanded="false"
                aria-controls="collapseFacilityFour"
              >
                Do you have a pro shop for gear and apparel?
              </button>
            </h5>
            <div
              id="collapseFacilityFour"
              className="accordion-collapse collapse"
              aria-labelledby="headingFacilityFour"
              data-bs-parent="#accordionFacility"
            >
              <div className="accordion-body">
                <p>Definitely! Our pro shop is part of <strong>Phase 2 of our expansion plan</strong>. Stay tuned for updates and the official launch—coming soon! Check for updates here.</p>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h5 className="accordion-header mt-4" id="headingFacilityFive">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFacilityFive"
                aria-expanded="false"
                aria-controls="collapseFacilityFive"
              >
                Is Wi-Fi available at the facility?
              </button>
            </h5>
            <div
              id="collapseFacilityFive"
              className="accordion-collapse collapse"
              aria-labelledby="headingFacilityFive"
              data-bs-parent="#accordionFacility"
            >
              <div className="accordion-body">
                <p>Currently, we do not provide Wi-Fi at our locations. We encourage players to <strong>stay active, connect with others, and enjoy the game</strong> without distractions!</p>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h5 className="accordion-header mt-4" id="headingFacilitySix">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFacilitySix"
                aria-expanded="false"
                aria-controls="collapseFacilitySix"
              >
                Do you have a pickleball ball machine for practice?
              </button>
            </h5>
            <div
              id="collapseFacilitySix"
              className="accordion-collapse collapse"
              aria-labelledby="headingFacilitySix"
              data-bs-parent="#accordionFacility"
            >
              <div className="accordion-body">
                <p>Yes! Our <strong>ball machine</strong> is available for rental—just request it at the counter, and our team will assist you.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqFacilityTab;
