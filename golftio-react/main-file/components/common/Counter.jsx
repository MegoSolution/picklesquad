const Counter = () => {
  return (
    <section className="section counter">
      <div className="container">
        <div className="row section__row">
          <div className="col-sm-6 col-lg-3 section__col">
            <div className="counter__card">
              <div className="counter__card-thumb">
                <i className="golftio-users"></i>
              </div>
              <div className="counter__card-content">
                <h2>
                  {/* <span className="odometer" data-odometer-final="850"></span>{" "} */}
                  <span>850 +</span>
                </h2>
                <p className="primary-text">Active Member</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3 section__col">
            <div className="counter__card">
              <div className="counter__card-thumb">
                <i className="golftio-shot-ground"></i>
              </div>
              <div className="counter__card-content">
                <h2>
                  {/* <span className="odometer" data-odometer-final="70"></span>{" "} */}
                  <span>70 +</span>
                </h2>
                <p className="primary-text">Professional Trainer</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3 section__col">
            <div className="counter__card">
              <div className="counter__card-thumb">
                <i className="golftio-trophy"></i>
              </div>
              <div className="counter__card-content">
                <h2>
                  {/* <span className="odometer" data-odometer-final="50"></span>{" "} */}
                  <span>50 +</span>
                </h2>
                <p className="primary-text">Award Winning</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3 section__col">
            <div className="counter__card">
              <div className="counter__card-thumb">
                <i className="golftio-user-shield"></i>
              </div>
              <div className="counter__card-content">
                <h2>
                  {/* <span className="odometer" data-odometer-final="60"></span>{" "} */}
                  <span>60 +</span>
                </h2>
                <p className="primary-text">Available Field</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Counter;
