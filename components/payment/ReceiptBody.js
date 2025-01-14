// Parameter Sample -> https://www.picklesquad.com.my/receipt?&status_id=1&order_id=PS-6786814c476c7c315c88f5af-1736868173&transaction_id=173686818850172483&msg=Payment_was_successful&hash=f6de2771a5076418af66a0515c791abf41fd434c0065eb65561794513e1029e7

import {
  resolveBookingIdFromMandateRef,
  convertTo12HourFormat,
} from '@/utils/bookings';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { BASE_URL } from '@/utils/constants';

const ReceiptBody = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const [localStorageDetails, setLocalStorageDetails] = useState({
    user: null,
    tokens: null,
    membership: null,
  });

  const router = useRouter();

  useEffect(() => {
    const fetchData = async (bookingId) => {
      const response = await fetch(`${BASE_URL}/bookings/${bookingId}`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${localStorageDetails.BEARER_TOKEN}`,
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();

      console.log(data);
      setData(data);
      setLoading(false);
    };

    const paymentSuccess = router.query.status_id === '1';

    if (
      !paymentSuccess ||
      !router.query.order_id ||
      !router.query.transaction_id
    ) {
      setLoading(false);
      return;
    }

    setPaymentSuccess(true);

    const bookingId = resolveBookingIdFromMandateRef(router.query.order_id);

    fetchData(bookingId);
  }, [router.query, localStorageDetails.BEARER_TOKEN]);

  useEffect(() => {
    if (localStorage) {
      const tokens = JSON.parse(localStorage.getItem('tokens'));
      const user = JSON.parse(localStorage.getItem('user'));
      const memberId = JSON.parse(localStorage.getItem('membership'));
      const userId = user._id;

      setLocalStorageDetails({
        user: userId,
        tokens: tokens,
        BEARER_TOKEN: tokens?.access?.token || '',
        membership: memberId,
      });
    }
  }, []);

  return (
    <section className="receipt receipt--main section my-5">
      <div className="container">
        <div className="row justify-content-center section__row">
          <div className="col-lg-10 col-md-12 col-sm-12">
            <div className="receipt__content">
              <h2 className="receipt__title mb-2">
                {paymentSuccess ? 'Payment Successful!' : 'Payment Failed!'}
              </h2>
              <div className="receipt__body">
                <h4>
                  {paymentSuccess
                    ? 'Thank you for booking with us. Your order has been received and is currently being processed. We will send you an email once your order has been shipped.'
                    : 'Unfortunately, your payment has failed. Please try again or contact us atsupport@picklesquad.com for assistance.'}
                </h4>

                {/* Card Component to show some booking information */}
                {data && (
                  <div className="my-5">
                    <div className="card-body">
                      <div className="card-body-header">
                        <img
                          src="/images/checked.png"
                          alt="checked"
                          height={'50px'}
                          width={'50px'}
                        />
                        <h5 className="card-body-header-title">
                          Payment Success!
                        </h5>
                        <h4 className="card-body-header-subtitle">
                          Your payment has been received.
                        </h4>
                      </div>

                      <div className="card-body-body-info">
                        <div className="card-body-body-info-item">
                          <p className="card-body-body-info-item-title">
                            Order ID:
                          </p>
                          <p className="card-body-body-info-item-value">
                            {router?.query?.order_id || ''}
                          </p>
                        </div>

                        <div className="card-body-body-info-item">
                          <p className="card-body-body-info-item-title">
                            Booking Date:
                          </p>
                          <p className="card-body-body-info-item-value">
                            {data?.date
                              ? new Date(data.date).toLocaleDateString()
                              : ''}
                          </p>
                        </div>

                        <div className="card-body-body-info-item">
                          <p className="card-body-body-info-item-title">
                            Booking Time:
                          </p>
                          <p className="card-body-body-info-item-value">
                            {data?.startTime && data?.endTime
                              ? `${convertTo12HourFormat(
                                  data.startTime
                                )} - ${convertTo12HourFormat(data.endTime)}`
                              : ''}
                          </p>
                        </div>

                        <div className="card-body-body-info-item">
                          <p className="card-body-body-info-item-title">
                            Court:
                          </p>
                          <p className="card-body-body-info-item-value">
                            {data?.court?.name || 'N/A'}
                          </p>
                        </div>
                      </div>

                      <div className="card-body-body-payment-info">
                        <div className="card-body-body-info-item">
                          <p className="card-body-body-info-item-title">
                            Transaction ID:
                          </p>
                          <p className="card-body-body-info-item-value">
                            {router?.query?.transaction_id || ''}
                          </p>
                        </div>
                        <div className="card-body-body-info-item">
                          <p className="card-body-body-info-item-title">
                            Amount:
                          </p>
                          <p className="card-body-body-info-item-value">
                            {data?.totalCost
                              ? `RM ${data?.totalCost.toFixed(2)}`
                              : 'N/A'}
                          </p>
                        </div>{' '}
                      </div>
                    </div>
                  </div>
                )}

                {!paymentSuccess && (
                  <h4>
                    If you have any questions or concerns, please contact us at
                    support@picklesquad.com.
                  </h4>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReceiptBody;
