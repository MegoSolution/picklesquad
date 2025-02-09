import NavBar from "@/components/navBar/NavBar";
import Footer from "@/components/footer/Footer";
import Preloader from "@/components/preloader/Preloader";
import WhatsAppButton from "@/components/scrollToTop/ScrollToTop";
import CareerBanner from "@/components/career/CareerBanner";
import CareerPositions from "@/components/career/CareerPositions";
import CareerBenefits from "@/components/career/CareerBenefits";
import CareerJoinUs from "@/components/career/CareerJoinUs";

export default function Career() {
  return (
    <>
      {/* Preloader */}
      <Preloader />

      {/* NavBar Section */}
      <NavBar cls="" />

      {/* Career Banner Section */}
      <CareerBanner />

      {/* Open Positions Section */}
      <CareerPositions />

      {/* Benefits Section */}
      <CareerBenefits />

      {/* Join Us Section */}
      <CareerJoinUs />

      {/* Footer */}
      <Footer />

      {/* Scroll To Top */}
      <WhatsAppButton />
    </>
  );
}

Career.getLayout = function getLayout(page) {
  return <>{page}</>;
}; 