import BigBanner from '@/components/common/BigBanner';
import Footer from '@/components/footer/Footer';
import About from '@/components/home/About';
import CoachSession from '@/components/home/CoachSession';
import PrivateEvent from '@/components/home/PrivateEvent';

import PricingPlan from '@/components/home/PricingPlan';
import NavBar from '@/components/navBar/NavBar';
import Preloader from '@/components/preloader/Preloader';
import WhatsAppButton from '@/components/scrollToTop/ScrollToTop';
import CourtRental from '@/components/home/CourtRental';
import MembershipBody from '@/components/membership/MembershipBody';
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
