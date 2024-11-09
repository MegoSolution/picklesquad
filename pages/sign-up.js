import Footer from "@/components/footer/Footer";
import NavBar from "@/components/navBar/NavBar";
import SignUpBody from "@/components/signUp/SignUpBody";

export default function SignUp() {
  return (
    <>
      {/* NavBar Secrtion */}
      <NavBar cls="" />

      {/* SignUp Body Secrtion */}
      <SignUpBody />

      {/* Footer Secrtion */}
      <Footer />
    </>
  );
}

SignUp.getLayout = function getLayout(page) {
  return <>{page}</>;
};
