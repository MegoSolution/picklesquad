const SupportSearch = () => {
  return (
    <section
      className="section support-form wow fadeInUp"
      data-wow-duration="0.4s"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <div className="section__header">
              <h5 className="section__header-sub-title">Search</h5>
              <h2 className="section__header-title">
                Need any help, then search here
              </h2>
              <p>
                
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8 col-xl-6">
            <form action="#" method="post">
              <div className="input-single">
                <input
                  type="text"
                  name="support-search"
                  id="supportSearch"
                  placeholder="Enter search term..."
                />
              </div>

              <button type="submit" className="cmn-button">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportSearch;
