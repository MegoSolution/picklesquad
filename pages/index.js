import BigBanner from '@/components/common/BigBanner';
import Footer from '@/components/footer/Footer';
import About from '@/components/home/About';
import NavBar from '@/components/navBar/NavBar';
import Preloader from '@/components/preloader/Preloader';
import WhatsAppButton from '@/components/scrollToTop/ScrollToTop';
import OurFeatures from '@/components/home/OurFeatures';
import OurOutlets from '@/components/home/OurOutlets';
import JoinSquad from '@/components/home/JoinSquad';

export default function Home() {
  return (
    <>
      {/* Preloader */}
      <Preloader />

      {/* NavBar Secrtion */}
      <NavBar cls="" />

      {/* Big Banner Secrtion */}
      <BigBanner />

      {/* About Section */}
      <About />

      {/* Court Rental Secrtion */}
      {/* <CourtRental /> */}

      {/* Coach Session Secrtion */}
      {/* <CoachSession /> */}

      {/* Pricing Plan Secrtion */}
      {/* <PrivateEvent /> */}

      <OurFeatures />

      <OurOutlets />

      {/* Pricing Plan Secrtion */}
      {/* <MembershipBody /> */}

      <JoinSquad />

      <Footer />

      {/* Scroll To Top */}
      <WhatsAppButton />
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return <>{page}</>;
};
