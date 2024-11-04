const ContactForm = () => {
  return (
    <section className="section contact-form">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <div className="section__header">
              <h2 className="section__header-title">Get in touch with us.</h2>
              <p>
                Fill up the form and our team will get back to you within 24
                hours
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-xl-8">
            <div className="contact-form__inner">
              <form action="#" method="post">
                <div className="input-group">
                  <div className="input-single">
                    <label htmlFor="contactFirstName">First name</label>
                    <input
                      type="text"
                      name="contact-first-name"
                      id="contactFirstName"
                      required
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div className="input-single">
                    <label htmlFor="contactLastName">Last name</label>
                    <input
                      type="text"
                      name="contact-last-name"
                      id="contactLastName"
                      required
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>
                <div className="input-group">
                  <div className="input-single">
                    <label htmlFor="contactEmail">Email</label>
                    <input
                      type="email"
                      name="contact-email"
                      id="contactEmail"
                      required
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="input-single">
                    <label htmlFor="contactPhone">Phone</label>
                    <input
                      type="text"
                      name="contact-phone"
                      id="contactPhone"
                      required
                      placeholder="Enter your phone"
                    />
                  </div>
                </div>
                <div className="input-single">
                  <label htmlFor="contactMessage">Message</label>
                  <textarea
                    name="contact-message"
                    id="contactMessage"
                    cols="30"
                    rows="4"
                    placeholder="I would like to get in touch with you..."
                  ></textarea>
                </div>
                <div className="section__cta">
                  <button type="submit" className="cmn-button">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
