import Banner from "@/components/booking/Banner";
import BookingBody from "@/components/booking/BookingBody";
import withAuth from "@/pages/withAuth";

// Helper function to generate dates
function Booking() {
  return (
    <>
      {/* Banner Section */}
      <Banner />

      {/* Booking Form */}
      <BookingBody />
    </>
  );
}

export default withAuth(Booking);