import Link from "next/link";

const SupportAection = () => {
  return (
    <section className="section support wow fadeInUp" data-wow-duration="0.4s">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <div className="section__header">
              <h5 className="section__header-sub-title">Support</h5>
              <h2 className="section__header-title">How can we help you?</h2>
              <p>
                Golftio Sports Club is a golf club with a history that goes back
                to XX century. From a cricket club to soccer tournaments,
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center section__row">
          <div className="col-sm-10 col-md-6 col-xl-4 section__col">
            <div className="support__single">
              <div className="support__single-thumb">
                <i className="golftio-file"></i>
              </div>
              <div className="support__single-content">
                <h5>Documentation</h5>
                <p className="secondary-text">
                  On the other hand, we denounce with righteous indignation and
                  dislike men
                </p>
                <Link
                  href="/support"
                  className="cmn-button cmn-button--secondary"
                >
                  Download
                </Link>
              </div>
            </div>
          </div>
          <div className="col-sm-10 col-md-6 col-xl-4 section__col">
            <div className="support__single">
              <div className="support__single-thumb">
                <i className="golftio-file"></i>
              </div>
              <div className="support__single-content">
                <h5>Change Log</h5>
                <p className="secondary-text">
                  On the other hand, we denounce with righteous indignation and
                  dislike men
                </p>
                <Link
                  href="/support"
                  className="cmn-button cmn-button--secondary"
                >
                  Download
                </Link>
              </div>
            </div>
          </div>
          <div className="col-sm-10 col-md-6 col-xl-4 section__col">
            <div className="support__single">
              <div className="support__single-thumb">
                <i className="golftio-file"></i>
              </div>
              <div className="support__single-content">
                <h5>Help process</h5>
                <p className="secondary-text">
                  On the other hand, we denounce with righteous indignation and
                  dislike men
                </p>
                <Link
                  href="/support"
                  className="cmn-button cmn-button--secondary"
                >
                  Download
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportAection;
