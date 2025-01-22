const { default: BookingForm } = require("./BookingForm");

const BookingBody = () => {
  return (
    <section className="booking booking--main booking-page-section">
      <div className="container">
        <div className="row justify-content-center section__row">
          <BookingForm />
        </div>
      </div>
    </section>
  );
};

export default BookingBody;
