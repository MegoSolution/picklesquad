import Footer from "@/components/footer/Footer";
import NavBar from "@/components/navBar/NavBar";
import PaymentSuccessfullBody from "@/components/paymentSuccessfull/PaymentSuccessfullBody";

export default function PaymentSuccessfull() {
  return (
    <>
      {/* NavBar Secrtion */}
      <NavBar cls="" />

      {/* Payment Successfull Body Secrtion */}
      <PaymentSuccessfullBody />

      {/* Footer Secrtion */}
      <Footer />
    </>
  );
}

PaymentSuccessfull.getLayout = function getLayout(page) {
  return <>{page}</>;
};
