import Banner from '@/components/bookingHistory/Banner';
import BookingHistoryBody from '@/components/bookingHistory/BookingHistoryBody';
import withAuth from "@/pages/withAuth";


function BookingHistory() {
  return (
    <>
      {/* Banner Section */}
      <Banner />

      {/* Booking Form */}
      <BookingHistoryBody />
    </>
  );
}

export default withAuth(BookingHistory);
