const { default: BookingHistoryForm } = require("./BookingHistoryForm");

const BookingHistoryBody = () => {
  return (
    <section className="booking-history booking-history--main section">
      <div className="container">
        <div className="row justify-content-center section__row">
          <BookingHistoryForm />
        </div>
      </div>
    </section>
  );
};

export default BookingHistoryBody;
