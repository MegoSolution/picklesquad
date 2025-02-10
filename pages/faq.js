import NavBar from "@/components/navBar/NavBar";
import Footer from "@/components/footer/Footer";
import Preloader from "@/components/preloader/Preloader";
import WhatsAppButton from "@/components/scrollToTop/ScrollToTop";
import FaqBody from "@/components/faq/FaqBody";

export default function FAQ() {
  return (
    <>
      {/* Preloader */}
      <Preloader />

      {/* NavBar Section */}
      <NavBar cls="" />

      {/* FAQ Body Section */}
      <FaqBody />

      {/* Footer */}
      <Footer />

      {/* Scroll To Top */}
      <WhatsAppButton />
    </>
  );
}

FAQ.getLayout = function getLayout(page) {
  return <>{page}</>;
}; 