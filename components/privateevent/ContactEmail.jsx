const ContactEmail = ({ cls = "" }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    // Get the form values
    const name = e.target["user-name"].value;
    const phone = e.target["user-phone"].value;
    const email = e.target["user-email"].value;
    const pax = e.target["user-pax"].value || "N/A";
    const date = e.target["user-date"].value || "N/A";
    const occasion = e.target["user-occasion"].value || "N/A";
    const message = e.target["user-message"].value || "N/A";

    // Format the WhatsApp message
    const whatsappMessage = `Hello,\n\nHere are the details submitted for private event inquiry:\n\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\nNumber of Pax: ${pax}\nDate: ${date}\nOccasion: ${occasion}\nMessage: ${message}`;

    // Redirect to WhatsApp
    const whatsappNumber = "60123164698";
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappLink, "_blank");
  };

  return (
    <section id="Contact"  className={`section join-club ${cls}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="section__content">
              <h5 className="section__content-sub-title">Contact Us</h5>
              <h2 className="section__content-title">Tell Us About Your Event</h2>
              <div className="join-club__form">
                <form onSubmit={handleSubmit} name="joinClubForm">
                  <div className="input-group">
                    <div className="input-single">
                      <input
                        type="text"
                        name="user-name"
                        id="userName"
                        required
                        placeholder="Your Name *"
                      />
                    </div>
                    <div className="input-single">
                      <input
                        type="text"
                        name="user-phone"
                        id="userPhone"
                        required
                        placeholder="Your Phone *"
                      />
                    </div>
                  </div>
                  <div className="input-group">
                    <div className="input-single">
                      <input
                        type="email"
                        name="user-email"
                        id="userEmail"
                        required
                        placeholder="Your Email *"
                      />
                    </div>
                    <div className="input-single">
                      <input
                        type="text"
                        name="user-pax"
                        id="userPax"
                        placeholder="Number of Pax "
                      />
                    </div>
                  </div>
                  <div className="input-group">
                  <div className="input-single">
                    <input
                      type="date"
                      name="user-date"
                      id="userDate"
                      required
                      placeholder="Select Date *"
                    />
                  </div>
                  <div className="input-single">
                    <input
                      type="text"
                      name="user-occasion"
                      id="userOccasion"
                      placeholder="What is the reason for booking?"
                    />
                  </div>
                  </div>
                  <div className="input-single">
                    <textarea
                      name="user-message"
                      id="userMessage"
                      placeholder="Remarks"
                    ></textarea>
                  </div>
                  <div className="button-container">
  <button type="submit" className="btn btn-primary first-time-btn">
    Submit Now
  </button>
</div>

                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactEmail;
