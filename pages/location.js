import LocationBody from "@/components/location/LocationBody";
import withAuth from "@/pages/withAuth";

// Helper function to generate dates
function Location() {
  return (
    <>
      {/* Booking Form */}
      <LocationBody />
    </>
  );
}

export default withAuth(Location);