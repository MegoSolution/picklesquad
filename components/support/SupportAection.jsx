import Link from "next/link";

const SupportSection = () => {
  return (
    <section className="section support wow fadeInUp" data-wow-duration="0.4s">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <div className="section__header">
              <h5 className="section__header-sub-title">Support</h5>
              <h2 className="section__header-title">How can we help you?</h2>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-xl-8">
              <div className="privacy-policy__inner">
                <div className="privacy-policy__single">
                  <h5>General Support</h5>
                  <p className="secondary-text">
                    • By accessing or using the services offered by PickleSquad,
                    you agree to comply with and be bound by these Terms and Conditions. <br />
                    If you do not agree with any part of these terms, refrain from using our services.
                  </p>
                  <p className="secondary-text">
                    • PickleSquad reserves the right to modify these Terms and Conditions at any time. <br />
                    Changes will be posted on this page and will take immediate effect. <br />
                    It is your responsibility to review the terms regularly.
                  </p>
                  <p className="secondary-text">
                    • This Agreement is legally binding and constitutes a contract between you (the customer) and PickleSquad.
                  </p>
                </div>
                <hr />
                <div className="privacy-policy__single">
                  <h5>Booking and Reservation Support</h5>
                  <p className="secondary-text">
                    • All bookings (court usage, coaching, private events) must be made via the official website or booking system. <br />
                    Full payment is required to confirm bookings, made through the payment methods provided on the website.
                  </p>
                  <p className="secondary-text">
                    • Cancellations must be made:
                  </p>
                  <ul>
                    <li>At least 24 hours in advance for court bookings.</li>
                    <li>At least 7 days in advance for private events.</li>
                  </ul>
                  <p className="secondary-text">
                    • Cancellations within the specified period will incur a cancellation fee of up to 50% of the booking amount.
                  </p>
                  <p className="secondary-text">
                    • If PickleSquad cancels due to unforeseen circumstances (e.g., facility unavailability), <br />
                    you will receive a full refund or the option to reschedule.
                  </p>
                  <p className="secondary-text">
                    • No-shows or failure to cancel within the stipulated time frame will result in no refund, <br />
                    and full payment will be retained.
                  </p>
                </div>
                <hr />
                <div className="privacy-policy__single">
                  <h5>Event and Court Support</h5>
                  <p className="secondary-text">
                    • Courts are available on a first-come, first-served basis unless reserved. <br />
                    Courts must be vacated promptly at the end of the booking period.
                  </p>
                  <p className="secondary-text">
                    • All users must adhere to PickleSquad’s safety and court rules. <br />
                    Violations may result in removal from the premises without refund.
                  </p>
                  <p className="secondary-text">
                    • PickleSquad is not liable for injuries sustained during court or facility use. <br />
                    Participation is at your own risk.
                  </p>
                  <p className="secondary-text">
                    • Disruptive behavior or actions impacting others’ safety or experience are strictly prohibited.
                  </p>
                </div>
                <hr />
                <div className="privacy-policy__single">
                  <h5>Private Events</h5>
                  <p className="secondary-text">
                    • A non-refundable deposit is required 7 days in advance. <br />
                    Full payment is due 7 days before the event.
                  </p>
                  <p className="secondary-text">
                    • A refundable damage deposit may be required, <br />
                    which will be refunded after post-event venue inspection.
                  </p>
                  <p className="secondary-text">
                    • Overcrowding beyond the venue's maximum capacity may result in the event's cancellation.
                  </p>
                  <p className="secondary-text">
                    • Guests at events must follow all PickleSquad rules and safety regulations.
                  </p>
                </div>
                <hr />
                <div className="privacy-policy__single">
                  <h5>Payment and Refund Support</h5>
                  <p className="secondary-text">
                    • All payments must be completed before services are rendered, <br />
                    processed through secure channels on the official website.
                  </p>
                  <p className="secondary-text">
                    • Prices are listed in RM and are subject to change. <br />
                    Price changes will not affect existing bookings.
                  </p>
                  <p className="secondary-text">
                    • Refunds for cancellations are available if made within the stipulated timeframes: <br />
                    24 hours for courts and 7 days for events.
                  </p>
                  <p className="secondary-text">
                    • Cancellations less than 7 days in advance for private events <br />
                    will result in partial forfeiture of the deposit.
                  </p>
                  <p className="secondary-text">
                    • Additional charges may apply if extra services are requested beyond the original booking scope.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;
