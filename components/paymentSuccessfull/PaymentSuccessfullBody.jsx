import Link from "next/link";

const PaymentSuccessfullBody = () => {
  return (
    <section
      className="section section--space-bottom payment-success wow fadeInUp"
      data-wow-duration="0.4s"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="payment-success__inner">
              <div className="payment-success__header">
                <i className="fa-solid fa-circle-check"></i>
                <h3>Payment Successful</h3>
                <p className="primary-text">
                  We are processing the same and you will be notified via email.
                </p>
              </div>
              <div className="payment-success__body">
                <ul>
                  <li>
                    <span>Transactions ID</span>
                    <span>CDFF123476359</span>
                  </li>
                  <li>
                    <span>Date</span>
                    <span>22-12-2022</span>
                  </li>
                  <li>
                    <span>Mode of Payment</span>
                    <span>Credit Card</span>
                  </li>
                  <li>
                    <span>Transaction Status</span>
                    <span>Success</span>
                  </li>
                  <li>
                    <span>Customer Name</span>
                    <span>Wade Warren</span>
                  </li>
                  <li>
                    <span>Mobile No</span>
                    <span>(406) 555-0120</span>
                  </li>
                  <li>
                    <span>Subject</span>
                    <span>White Gloves</span>
                  </li>
                  <li>
                    <span>Payment Amount</span>
                    <span>$235.00</span>
                  </li>
                </ul>
              </div>
              <div className="payment-success__footer">
                <div className="payment-success__footer-inner">
                  <Link href="/">
                    <i className="fa-solid fa-download"></i> Download
                  </Link>
                  <Link href="/">
                    <i className="fa-solid fa-print"></i> Print Receipt
                  </Link>
                  <Link href="/">
                    <i className="fa-solid fa-envelope"></i> Download
                  </Link>
                </div>
                <Link href="/" className="cmn-button">
                  Back To Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentSuccessfullBody;
