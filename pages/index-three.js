import Counter from "@/components/common/Counter";
import JoinClub from "@/components/common/JoinClub";
import Shop from "@/components/common/Shop";
import Footer from "@/components/footer/Footer";
import About from "@/components/homeThree/About";
import BigBanner from "@/components/homeThree/BigBanner";
import ClubView from "@/components/homeThree/ClubView";
import Event from "@/components/homeThree/Event";
import Facility from "@/components/homeThree/Facility";
import Gallery from "@/components/homeThree/Gallery";
import PricingTertiary from "@/components/homeThree/PricingTertiary";
import Testimonial from "@/components/homeThree/Testimonial";
import Training from "@/components/homeThree/Training";
import NavBar from "@/components/navBar/NavBar";
import Preloader from "@/components/preloader/Preloader";
import ScrollToTop from "@/components/scrollToTop/ScrollToTop";

export default function HomeThree() {
  return (
    <>
      {/* Preloader */}
      <Preloader />

      {/* NavBar Secrtion */}
      <NavBar cls="" />

      {/* Banner Secrtion */}
      <BigBanner />

      {/* Banner Secrtion */}
      <Facility />

      {/* Banner Secrtion */}
      <About />

      {/* Banner Secrtion */}
      <PricingTertiary />

      {/* Banner Secrtion */}
      <Training />

      {/* Banner Secrtion */}
      <Testimonial />

      {/* Banner Secrtion */}
      <ClubView />

      {/* Banner Secrtion */}
      <Event />

      {/* Banner Secrtion */}
      <Counter />

      {/* Banner Secrtion */}
      <Shop />

      {/* Banner Secrtion */}
      <JoinClub />

      {/* Banner Secrtion */}
      <Gallery />

      {/* Footer Secrtion */}
      <Footer />

      {/* Scroll To Top */}
      <ScrollToTop />
    </>
  );
}

HomeThree.getLayout = function getLayout(page) {
  return <>{page}</>;
};
