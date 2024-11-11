const { default: BookingForm } = require("./BookingForm");

const BookingBody = () => {
  return (
    <section className="booking booking--main section">
      <div className="container">
        <div className="row justify-content-center section__col">
          <BookingForm />
        </div>
      </div>
    </section>
  );
};

export default BookingBody;
