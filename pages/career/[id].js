import { useRouter } from 'next/router';
import NavBar from "@/components/navBar/NavBar";
import Footer from "@/components/footer/Footer";
import Preloader from "@/components/preloader/Preloader";
import CareerDetail from "@/components/career/CareerDetail";

export default function CareerDetailPage() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      {/* Preloader */}
      <Preloader />

      {/* NavBar Section */}
      <NavBar cls="" />

      {/* Career Detail Section */}
      <CareerDetail id={id} />

      {/* Footer */}
      <Footer />
    </>
  );
}

CareerDetailPage.getLayout = function getLayout(page) {
  return <>{page}</>;
}; 