const FaqOthersTab = () => {
  return (
    <div
      className="tab-pane fade"
      id="faqOthers"
      role="tabpanel"
      aria-labelledby="faqOthers-tab"
    >
      <div className="faq__tab-single__inner">
        <div className="accordion" id="accordionOthers">
          <div className="accordion-item">
            <h5 className="accordion-header mt-0" id="headingOthersOne">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOthersOne"
                aria-expanded="false"
                aria-controls="collapseOthersOne"
              >
                Do you have a newsletter or social media channels for updates?
              </button>
            </h5>
            <div
              id="collapseOthersOne"
              className="accordion-collapse collapse"
              aria-labelledby="headingOthersOne"
              data-bs-parent="#accordionOthers"
            >
              <div className="accordion-body">
                <p>Yes! Stay informed about our latest updates, events, and exclusive offers by signing up for an account—simply click the <strong>Sign In/Sign Up</strong> button at the top right corner of our website. We'll keep you updated via email, or you can follow us on our <a href="https://www.instagram.com/picklesquad.my/">social media channels</a> for real-time announcements.</p>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h5 className="accordion-header mt-4" id="headingOthersTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOthersTwo"
                aria-expanded="false"
                aria-controls="collapseOthersTwo"
              >
                Where can I provide feedback or suggestions?
              </button>
            </h5>
            <div
              id="collapseOthersTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingOthersTwo"
              data-bs-parent="#accordionOthers"
            >
              <div className="accordion-body">
                <p>We value your input! You can share your feedback by filling out the form below or leaving us a <a href="https://g.page/r/CQv78Vg_kz-pEB0/review">Google review</a>. Your suggestions help us improve and enhance your experience at PickleSquad!</p>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h5 className="accordion-header mt-4" id="headingOthersThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOthersThree"
                aria-expanded="false"
                aria-controls="collapseOthersThree"
              >
                Can I bring kids or pets?
              </button>
            </h5>
            <div
              id="collapseOthersThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingOthersThree"
              data-bs-parent="#accordionOthers"
            >
              <div className="accordion-body">
                <p>We welcome young players! However, <strong>infants and toddlers must be accompanied by a supervising adult</strong> at all times. Older children who can look after themselves are welcome to relax in our communal area.</p>
                <p>As for pets, unfortunately, they are <strong>not allowed</strong> on our premises. We appreciate your understanding, as we strive to maintain a welcoming and inclusive environment for all members of our community.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqOthersTab; 