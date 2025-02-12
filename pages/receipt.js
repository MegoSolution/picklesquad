import Banner from '@/components/booking/Banner';
import ReceiptBody from '@/components/payment/ReceiptBody';
import withAuth from '@/pages/withAuth';

// Helper function to generate dates
function Booking() {
  return (
    <>
      {/* Banner Section */}
      <Banner />

      {/* Booking Form */}
      <ReceiptBody />
    </>
  );
}

export default withAuth(Booking);
