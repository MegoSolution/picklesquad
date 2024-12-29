import BigBanner from "@/components/common/BigBanner";
import Shop from "@/components/common/Shop";
import Team from "@/components/common/Team";
import TestimonialOne from "@/components/common/TestimonialOne";
import Footer from "@/components/footer/Footer";
import About from "@/components/home/About";
import Event from "@/components/home/Event";
import CoachSession from "@/components/home/CoachSession";
import PrivateEvent from "@/components/home/PrivateEvent";
import Programmes from "@/components/home/Programmes";
import JoinClub from "@/components/home/JoinClub";
import OurClub from "@/components/home/OurClub";
import PricingPlan from "@/components/home/PricingPlan";
import Training from "@/components/home/Training";
import NavBar from "@/components/navBar/NavBar";
import Preloader from "@/components/preloader/Preloader";
import ScrollToTop from "@/components/scrollToTop/ScrollToTop";
import CourtRental from "@/components/home/CourtRental";

export default function Home() {
  return (
    <>
      {/* Preloader */}
      <Preloader />

      {/* NavBar Secrtion */}
      <NavBar cls="" />

      {/* Big Banner Secrtion */}
      <BigBanner />

      {/* About Secrtion */}
      <About />

      {/* Coach Session Secrtion */}
      <CoachSession />
      
      {/* Pricing Plan Secrtion */}
      <PrivateEvent />

      {/* Programmes Secrtion */}
      <Programmes />

      {/* Pricing Plan Secrtion */}
      <PricingPlan />

      {/* Court Rental Secrtion */}
      <CourtRental />
      {/* Our Club Secrtion */}
      

      {/* Training Secrtion */}
      

      {/* Event Secrtion */}
      

      {/* Join Club Secrtion */}
      

      {/* Team Section */}
      

      {/* Testimonial One Secrtion */}
     

      {/* Shop Secrtion */}
      

      {/* Footer Secrtion */}
      <Footer />

      {/* Scroll To Top */}
      <ScrollToTop />
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return <>{page}</>;
};
