import LocationBody from "@/components/location/LocationBody";
import NavBar from "@/components/navBar/NavBar";
import Footer from "@/components/footer/Footer";


import withAuth from "@/pages/withAuth";

// Helper function to generate dates
function Location() {
  return (
    <>
      {/* NavBar Section */}
      <NavBar cls="" />

      {/* Booking Form */}
      <LocationBody />

      {/* Footer */}
      <Footer />
    </>
  );
}

export default withAuth(Location);