const { default: LocationForm } = require("./LocationForm");

const LocationBody = () => {
  return (
    <section className="booking booking--main section">
      <div className="container">
        <div className="row justify-content-center section__row">
          <LocationForm />
        </div>
      </div>
    </section>
  );
};

export default LocationBody;
