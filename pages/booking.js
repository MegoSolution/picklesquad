import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Banner from "@/components/booking/Banner";
import BookingBody from "@/components/booking/BookingBody";
import withAuth from "@/pages/withAuth";

function Booking() {
  const router = useRouter();

  useEffect(() => {
    if (!router.query.locationId) {
      router.replace('/location');
    }
  }, [router]);

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