import Banner from "@/components/location/Banner";
import LocationBody from "@/components/location/LocationBody";
import withAuth from "@/pages/withAuth";

// Helper function to generate dates
function Location() {
  return (
    <>
      {/* Banner Section */}
      <Banner />

      {/* Booking Form */}
      <LocationBody />
    </>
  );
}

export default withAuth(Location);