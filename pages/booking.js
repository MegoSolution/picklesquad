import Banner from "@/components/booking/Banner";
import BookingBody from "@/components/booking/BookingBody";

// Helper function to generate dates
export default function Booking() {
  return (
    <>
      {/* Banner Section */}
      <Banner />

      {/* Booking Form */}
      <BookingBody />
    </>
  );
}