const PrivacyPolicyBody = () => {
  return (
    <section
      className="section privacy-policy wow fadeInUp"
      data-wow-duration="0.4s"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10 col-xl-8">
            <div className="privacy-policy__inner">
              {/* Privacy Policy */}
              <div className="privacy-policy__single">
                <h5>Privacy Policy</h5>
                <p className="secondary-text">
                  PickleSquad values your privacy and ensures that all personal data is handled securely in compliance with legal standards.
                </p>
              </div>
              <hr />

              {/* Data Collection and Usage */}
              <div className="privacy-policy__single">
                <h5>Data Collection and Usage</h5>
                <p className="secondary-text">
                  • PickleSquad collects personal identification information (e.g., name, contact details, payment information) necessary for service delivery.
                </p>
                <p className="secondary-text">
                  • All personal data is processed in compliance with the Malaysian Personal Data Protection Act (PDPA).
                </p>
                <p className="secondary-text">
                  • By using PickleSquad services, you consent to the collection, storage, and processing of your personal data as per this Privacy Policy.
                </p>
              </div>
              <hr />

              {/* Data Protection */}
              <div className="privacy-policy__single">
                <h5>Data Protection</h5>
                <p className="secondary-text">
                  • PickleSquad will never share your personal data with third parties for marketing purposes without explicit consent.
                </p>
                <p className="secondary-text">
                  • Data is stored securely and used only for service delivery.
                </p>
              </div>
              <hr />

              {/* User Rights */}
              <div className="privacy-policy__single">
                <h5>User Rights</h5>
                <p className="secondary-text">
                  • Users may inquire about their data collected by PickleSquad and request corrections or deletions.
                </p>
              </div>
              <hr />

              {/* Contact Information */}
              <div className="privacy-policy__single">
                <h5>Contact Information</h5>
                <p className="secondary-text">
                  For questions or concerns, please contact us:
                </p>
                <p className="secondary-text">
                  • Email: picklesquad624@gmail.com
                </p>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicyBody;
