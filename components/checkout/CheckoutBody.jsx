import Link from "next/link";
import { useState } from "react";
import Select from "../common/Select";

const country = [
  { id: 1, name: "USA" },
  { id: 2, name: "Aus" },
  { id: 3, name: "UK" },
  { id: 4, name: "NED" },
];

const CheckoutBody = () => {
  const [checkedValue, setCheckedValue] = useState("cCard");
  const [payment, setPayment] = useState("pay-method");

  const onChangeHandler = (e) => {
    const targetItem = e.target;
    setCheckedValue(targetItem.id);
    setPayment(targetItem.value);
  };

  return (
    <div className="section checkout">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <form action="#" method="post">
              <div className="row section__row">
                <div className="col-md-5 col-lg-4 col-xl-3 section__col">
                  <div
                    className="checkout__radio wow fadeInUp"
                    data-wow-duration="0.4s"
                  >
                    <p className="primary-text">Select any one</p>
                    <div className="checkout__radio-wrapper">
                      <div className="checkout__radio-single">
                        <input
                          type="radio"
                          id="cCard"
                          name="pay-method"
                          value="Credit/Debit Cards"
                          checked={checkedValue === "cCard" ? true : false}
                          onChange={onChangeHandler}
                        />
                        <label htmlFor="cCard">Credit/Debit Cards</label>
                      </div>
                      <div className="checkout__radio-single">
                        <input
                          type="radio"
                          id="paypal"
                          name="pay-method"
                          value="PayPal"
                          checked={checkedValue === "paypal" ? true : false}
                          onChange={onChangeHandler}
                        />
                        <label htmlFor="paypal">PayPal</label>
                      </div>
                      <div className="checkout__radio-single">
                        <input
                          type="radio"
                          id="payoneer"
                          name="pay-method"
                          value="Payoneer"
                          checked={checkedValue === "payoneer" ? true : false}
                          onChange={onChangeHandler}
                        />
                        <label htmlFor="payoneer">Payoneer</label>
                      </div>
                      <div className="checkout__radio-single">
                        <input
                          type="radio"
                          id="visa"
                          name="pay-method"
                          value="Visa"
                          checked={checkedValue === "visa" ? true : false}
                          onChange={onChangeHandler}
                        />
                        <label htmlFor="visa">Visa</label>
                      </div>
                      <div className="checkout__radio-single">
                        <input
                          type="radio"
                          id="mastercard"
                          name="pay-method"
                          value="Mastercard"
                          checked={checkedValue === "mastercard" ? true : false}
                          onChange={onChangeHandler}
                        />
                        <label htmlFor="mastercard">Mastercard</label>
                      </div>
                      <div className="checkout__radio-single">
                        <input
                          type="radio"
                          id="fastPay"
                          name="pay-method"
                          value="Fastpay"
                          checked={checkedValue === "fastPay" ? true : false}
                          onChange={onChangeHandler}
                        />
                        <label htmlFor="fastPay">Fastpay</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-7 col-lg-8 col-xl-9 section__col">
                  <div className="checkout__single-wrapper">
                    <div className="checkout__single">
                      <h5>Billing address</h5>
                      <div className="checkout__single-form">
                        <div className="input-group">
                          <div className="input-single">
                            <input
                              type="text"
                              name="user-first-name"
                              id="userFirstName"
                              required
                              placeholder="First Name"
                            />
                          </div>
                          <div className="input-single">
                            <input
                              type="text"
                              name="user-last-name"
                              id="userLastName"
                              required
                              placeholder="Last Name"
                            />
                          </div>
                        </div>
                        <div className="input-group">
                          <div className="input-single">
                            <input
                              type="email"
                              name="user-check-email"
                              id="userCheckEmail"
                              required
                              placeholder="Your Email"
                            />
                          </div>
                          <div className="input-single">
                            <Select data={country} />
                          </div>
                        </div>
                        <div className="input-single">
                          <textarea
                            name="user-address"
                            id="userAddress"
                            placeholder="Address"
                          ></textarea>
                        </div>
                      </div>
                    </div>
                    <div className="checkout__single">
                      <h5>Payment Methods</h5>
                      <div className="checkout__single-form">
                        <p className="payment">{payment}</p>
                        <div className="input-single">
                          <label htmlFor="userCardNumber">Card number</label>
                          <input
                            type="number"
                            name="user-card-number"
                            id="userCardNumber"
                            placeholder="2456 1665 5155 5151"
                          />
                        </div>
                        <div className="input-group">
                          <div className="input-single">
                            <label htmlFor="userCardDate">Expiry date</label>
                            <input
                              type="text"
                              name="user-card-date"
                              id="userCardDate"
                              required
                              placeholder="DD/MM/YY"
                            />
                          </div>
                          <div className="input-single">
                            <label htmlFor="userCvc">CVC / CVV</label>
                            <input
                              type="text"
                              maxLength="3"
                              name="user-card-cvc"
                              id="userCvc"
                              required
                              placeholder="3 Digits"
                            />
                          </div>
                        </div>
                        <div className="input-single">
                          <label htmlFor="userCardName">Name on card</label>
                          <input
                            type="text"
                            name="user-card-name"
                            id="userCardName"
                            placeholder="J. smith"
                          />
                        </div>
                        <div className="input-single input-check">
                          <input
                            type="checkbox"
                            name="save-for-next"
                            id="saveForNext"
                          />
                          <label htmlFor="saveForNext">
                            Save for my next payment
                          </label>
                        </div>
                      </div>
                      <div className="text-center cta-btn">
                        <Link
                          href="/payment-successfull"
                          className="cmn-button"
                        >
                          Payment Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutBody;
