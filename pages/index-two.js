import Counter from "@/components/common/Counter";
import JoinClubOne from "@/components/common/JoinClubOne";
import Sponsor from "@/components/common/Sponsor";
import Testimonial from "@/components/common/Testimonial";
import Footer from "@/components/footer/Footer";
import About from "@/components/homeTwo/About";
import BigBanner from "@/components/homeTwo/BigBanner";
import Club from "@/components/homeTwo/Club";
import OurTeam from "@/components/homeTwo/OurTeam";
import Overview from "@/components/homeTwo/Overview";
import Pricing from "@/components/homeTwo/Pricing";
import ProfessionalShop from "@/components/homeTwo/ProfessionalShop";
import Training from "@/components/homeTwo/Training";
import NavBar from "@/components/navBar/NavBar";
import Preloader from "@/components/preloader/Preloader";
import ScrollToTop from "@/components/scrollToTop/ScrollToTop";

export default function HomeTwo() {
  return (
    <>
      {/* Preloader */}
      <Preloader />

      {/* NavBar Secrtion */}
      <NavBar cls="" />

      {/* Big anner Secrtion */}
      <BigBanner />

      {/* Overview Secrtion */}
      <Overview />

      {/* About Secrtion */}
      <About />

      {/* Club Secrtion */}
      <Club />

      {/* Training Secrtion */}
      <Training />

      {/* Counter Secrtion */}
      <Counter />

      {/* Pricing Secrtion */}
      <Pricing />

      {/* Testimonial Secrtion */}
      <Testimonial />

      {/* Professional Shop Secrtion */}
      <ProfessionalShop />

      {/* Our Team Secrtion */}
      <OurTeam />

      {/* Join Club One Secrtion */}
      <JoinClubOne />

      {/* Sponsor Secrtion */}
      <Sponsor />

      {/* Footer Secrtion */}
      <Footer />

      {/* Scroll To Top */}
      <ScrollToTop />
    </>
  );
}

HomeTwo.getLayout = function getLayout(page) {
  return <>{page}</>;
};
