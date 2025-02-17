import { useEffect } from 'react';
import { useRouter } from 'next/router';
import BookingBody from "@/components/booking/BookingBody";
import withAuth from "@/pages/withAuth";
import NavBar from "@/components/navBar/NavBar";
import Footer from "@/components/footer/Footer";

function Booking() {
  const router = useRouter();

  useEffect(() => {
    if (!router.query.locationId) {
      router.replace('/location');
    }
  }, [router]);

  return (
    <>
      {/* NavBar Section */}
      <NavBar cls="" />

      {/* Booking Form */}
      <BookingBody />

      {/* Footer */}
      <Footer />
    </>
  );
}

export default withAuth(Booking);