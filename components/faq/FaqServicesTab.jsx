const FaqServicesTab = () => {
  return (
    <div
      className="tab-pane fade"
      id="faqServices"
      role="tabpanel"
      aria-labelledby="faqServices-tab"
    >
      <div className="faq__tab-single__inner">
        <div className="accordion" id="accordionServices">
          <div className="accordion-item">
            <h5 className="accordion-header mt-0" id="headingServicesOne">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseServicesOne"
                aria-expanded="false"
                aria-controls="collapseServicesOne"
              >
                Is there a membership program?
              </button>
            </h5>
            <div
              id="collapseServicesOne"
              className="accordion-collapse collapse"
              aria-labelledby="headingServicesOne"
              data-bs-parent="#accordionServices"
            >
              <div className="accordion-body">
                <p>Yes! We offer a <strong>monthly membership subscription</strong> packed with exclusive benefits, including <strong>free paddle rentals, birthday month perks, discounted court rentals</strong>, and more. Join the squad today and elevate your pickleball experience!</p>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h5 className="accordion-header mt-4" id="headingServicesTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseServicesTwo"
                aria-expanded="false"
                aria-controls="collapseServicesTwo"
              >
                Do you offer trial sessions or introductory packages?
              </button>
            </h5>
            <div
              id="collapseServicesTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingServicesTwo"
              data-bs-parent="#accordionServices"
            >
              <div className="accordion-body">
                <p>Currently, we do not offer trial sessions. However, we have <strong>introductory coaching classes for beginners</strong> to help you kickstart your pickleball journey with proper guidance and techniques.</p>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h5 className="accordion-header mt-4" id="headingServicesThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseServicesThree"
                aria-expanded="false"
                aria-controls="collapseServicesThree"
              >
                Do you provide coaching for players?
              </button>
            </h5>
            <div
              id="collapseServicesThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingServicesThree"
              data-bs-parent="#accordionServices"
            >
              <div className="accordion-body">
                <p>Absolutely! Our <strong>professional coaching team</strong> offers a range of lessons, from beginner to amateur levels. If you prefer a more personalized approach, our <strong>private coaching sessions</strong> provide a tailored one-on-one experience to refine your skills at your own pace.</p>
                <p>For more details, visit our <a href="programmes">Coaching Page</a>.</p>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h5 className="accordion-header mt-4" id="headingServicesFour">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseServicesFour"
                aria-expanded="false"
                aria-controls="collapseServicesFour"
              >
                Do you host regular tournaments or social events?
              </button>
            </h5>
            <div
              id="collapseServicesFour"
              className="accordion-collapse collapse"
              aria-labelledby="headingServicesFour"
              data-bs-parent="#accordionServices"
            >
              <div className="accordion-body">
                <p>Yes! We frequently organize <strong>tournaments, social events, and community meet-ups</strong> to bring players together and build a thriving pickleball community.</p>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h5 className="accordion-header mt-4" id="headingServicesFive">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseServicesFive"
                aria-expanded="false"
                aria-controls="collapseServicesFive"
              >
                How can I participate in upcoming events?
              </button>
            </h5>
            <div
              id="collapseServicesFive"
              className="accordion-collapse collapse"
              aria-labelledby="headingServicesFive"
              data-bs-parent="#accordionServices"
            >
              <div className="accordion-body">
                <p>Stay updated by following us on <a href="https://www.instagram.com/picklesquad.my/">Instagram</a> and checking our <a href="privateevent">Events Page</a>. Spots may be limited, so be sure to register early!</p>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h5 className="accordion-header mt-4" id="headingServicesSix">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseServicesSix"
                aria-expanded="false"
                aria-controls="collapseServicesSix"
              >
                Can I host a private event or corporate team-building session at PickleSquad?
              </button>
            </h5>
            <div
              id="collapseServicesSix"
              className="accordion-collapse collapse"
              aria-labelledby="headingServicesSix"
              data-bs-parent="#accordionServices"
            >
              <div className="accordion-body">
                <p>Of course! We offer private event bookings for <strong>corporate team-building, birthdays, exclusive tournaments</strong>, and more. Our team will help you customize your event for an unforgettable experience.</p>
                <p>For inquiries, get in touch with us <a href="location">here</a>.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqServicesTab; 