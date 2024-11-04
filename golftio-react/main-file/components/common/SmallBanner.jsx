const SmallBanner = ({ title = "", children }) => {
  return (
    <section className="banner--inner">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="banner--inner__content">
              <h2>{title}</h2>
            </div>
          </div>
          <div className="col-md-6">
            {/* Breadcrumb */}
            {children}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmallBanner;
