const FaqBookingTab = () => {
  return (
    <div
      className="tab-pane fade"
      id="faqBooking"
      role="tabpanel"
      aria-labelledby="faqBooking-tab"
    >
      <div className="faq__tab-single__inner">
        <div className="accordion" id="accordionBooking">
          <div className="accordion-item">
            <h5 className="accordion-header mt-0" id="headingBookingOne">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseBookingOne"
                aria-expanded="false"
                aria-controls="collapseBookingOne"
              >
                How do I make a reservation?
              </button>
            </h5>
            <div
              id="collapseBookingOne"
              className="accordion-collapse collapse"
              aria-labelledby="headingBookingOne"
              data-bs-parent="#accordionBooking"
            >
              <div className="accordion-body">
                <p>All court bookings must be made <strong>online</strong>. Simply visit our website, click "<strong>Book Now</strong>" at the top right corner, and create an account before securing your slot.</p>
                <p>Court reservations open <strong>7 days in advance</strong>, so be sure to plan ahead—especially during peak hours—to get your preferred time slot! (Or join our membership to book up to <strong>2 weeks in advance</strong>.)</p>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h5 className="accordion-header mt-4" id="headingBookingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseBookingTwo"
                aria-expanded="false"
                aria-controls="collapseBookingTwo"
              >
                Can I walk in, or do I need to book in advance?
              </button>
            </h5>
            <div
              id="collapseBookingTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingBookingTwo"
              data-bs-parent="#accordionBooking"
            >
              <div className="accordion-body">
                <p><strong>Walk-ins are welcome!</strong> However, we highly recommend reserving your court in advance to secure your spot, especially during busy hours. If you drop by without a booking, our friendly crew will do their best to accommodate you based on court availability.</p>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h5 className="accordion-header mt-4" id="headingBookingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseBookingThree"
                aria-expanded="false"
                aria-controls="collapseBookingThree"
              >
                What are the rates for court rentals and coaching sessions?
              </button>
            </h5>
            <div
              id="collapseBookingThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingBookingThree"
              data-bs-parent="#accordionBooking"
            >
              <div className="accordion-body">
                <p>Our rates vary depending on the location and hours (<strong>peak or non-peak</strong>). Whether you're renting a court or signing up for a coaching session, you can find the full pricing details on our <a href="#">Pricing Page</a>.</p>
                <p>Feel free to bring along family and friends to share the court at no extra cost—just split the rental fee among players!</p>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h5 className="accordion-header mt-4" id="headingBookingFour">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseBookingFour"
                aria-expanded="false"
                aria-controls="collapseBookingFour"
              >
                What should I do when I arrive?
              </button>
            </h5>
            <div
              id="collapseBookingFour"
              className="accordion-collapse collapse"
              aria-labelledby="headingBookingFour"
              data-bs-parent="#accordionBooking"
            >
              <div className="accordion-body">
                <p>Head to the <strong>check-in counter</strong> and present your booking confirmation. Our team will guide you to your court—just sit back, warm up, and get ready to play!</p>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h5 className="accordion-header mt-4" id="headingBookingFive">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseBookingFive"
                aria-expanded="false"
                aria-controls="collapseBookingFive"
              >
                What if I arrive late?
              </button>
            </h5>
            <div
              id="collapseBookingFive"
              className="accordion-collapse collapse"
              aria-labelledby="headingBookingFive"
              data-bs-parent="#accordionBooking"
            >
              <div className="accordion-body">
                <p><strong>Court Rental:</strong> Your booking will not be extended if you arrive late, and no refunds or prorated fees will be given.</p>
                <p><strong>Group Lessons:</strong> If you arrive after the session has started, you will not be allowed to join, and your booking will be marked as a no-show with no refunds.</p>
                <p>To avoid any issues, we recommend arriving at least <strong>15 minutes early</strong> before your session.</p>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h5 className="accordion-header mt-4" id="headingBookingSix">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseBookingSix"
                aria-expanded="false"
                aria-controls="collapseBookingSix"
              >
                Can I book courts for private events?
              </button>
            </h5>
            <div
              id="collapseBookingSix"
              className="accordion-collapse collapse"
              aria-labelledby="headingBookingSix"
              data-bs-parent="#accordionBooking"
            >
              <div className="accordion-body">
                <p>Yes! We offer private event bookings for <strong>corporate gatherings, birthday celebrations, exclusive tournaments</strong>, and more. Get in touch with us to customize your event experience.</p>
                <p>Check it out and fill in the form <a href="#">here</a>.</p>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h5 className="accordion-header mt-4" id="headingBookingSeven">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseBookingSeven"
                aria-expanded="false"
                aria-controls="collapseBookingSeven"
              >
                What payment methods do you accept?
              </button>
            </h5>
            <div
              id="collapseBookingSeven"
              className="accordion-collapse collapse"
              aria-labelledby="headingBookingSeven"
              data-bs-parent="#accordionBooking"
            >
              <div className="accordion-body">
                <p>We are a <strong>cashless facility</strong>, and we accept:</p>
                <ul>
                  <li>✔ <strong>FPX Online Banking</strong></li>
                  <li>✔ <strong>E-Wallets</strong> (Touch 'n Go, GrabPay, etc.)</li>
                  <li>✔ <strong>Debit & Credit Cards</strong></li>
                </ul>
                <p>We also accept cash on-site but highly recommend using e-payment for a faster and more convenient experience.</p>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h5 className="accordion-header mt-4" id="headingBookingEight">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseBookingEight"
                aria-expanded="false"
                aria-controls="collapseBookingEight"
              >
                How long can I reserve a court for?
              </button>
            </h5>
            <div
              id="collapseBookingEight"
              className="accordion-collapse collapse"
              aria-labelledby="headingBookingEight"
              data-bs-parent="#accordionBooking"
            >
              <div className="accordion-body">
                <p>Court bookings range from <strong>1 to 4 hours</strong> per session. Each account can reserve a maximum of <strong>2 courts</strong> at a time.</p>
                <p>For larger bookings (more than 2 courts per session), it will be considered a Private Event, and different rates will apply. To inquire, contact us at <strong>picklesquad624@gmail.com</strong>.</p>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h5 className="accordion-header mt-4" id="headingBookingNine">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseBookingNine"
                aria-expanded="false"
                aria-controls="collapseBookingNine"
              >
                What happens if it rains?
              </button>
            </h5>
            <div
              id="collapseBookingNine"
              className="accordion-collapse collapse"
              aria-labelledby="headingBookingNine"
              data-bs-parent="#accordionBooking"
            >
              <div className="accordion-body">
                <p>No worries! Our courts are <strong>covered</strong>, so your game won't be affected by rain. Since weather conditions won't impact play, bookings are non-refundable and cannot be rescheduled.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqBookingTab; 