import { useRouter } from 'next/router';
import NavBar from "@/components/navBar/NavBar";
import Footer from "@/components/footer/Footer";
import Preloader from "@/components/preloader/Preloader";
import CareerApply from "@/components/career/CareerApply";

export default function CareerApplyPage() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      {/* Preloader */}
      <Preloader />

      {/* NavBar Section */}
      <NavBar cls="" />

      {/* Career Apply Section */}
      <CareerApply id={id} />

      {/* Footer */}
      <Footer />
    </>
  );
}

CareerApplyPage.getLayout = function getLayout(page) {
  return <>{page}</>;
}; 