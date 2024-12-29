import Banner from '../components/BookingHistory/Banner';
import BookingHistoryBody from '../components/BookingHistory/BookingHistoryBody';

// Helper function to generate dates
export default function Booking() {
  return (
    <>
      {/* Banner Section */}
      <Banner />
      {/* Booking Form */}
      <BookingHistoryBody />
    </>
  );
}
