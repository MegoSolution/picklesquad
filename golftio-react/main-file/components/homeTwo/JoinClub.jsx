const JoinClub = () => {
  return (
    <section className="section join-club">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="section__content">
              <h5 className="section__content-sub-title">Join Club</h5>
              <h2 className="section__content-title">Join our club</h2>
              <div className="join-club__form">
                <form action="#" method="post" name="joinClubForm">
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
                        name="user-url"
                        id="userUrl"
                        placeholder="Website URL "
                      />
                    </div>
                  </div>
                  <div className="input-single">
                    <textarea
                      name="user-message"
                      id="userMessage"
                      placeholder="Message"
                    ></textarea>
                  </div>
                  <button type="submit" className="cmn-button">
                    Submit Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinClub;
