import Footer from "@/components/footer/Footer";
import NavBar from "@/components/navBar/NavBar";
import SignInBody from "@/components/signIn/SignInBody";

export default function SignIn() {
  return (
    <>
      {/* NavBar Secrtion */}
      <NavBar cls="" />

      {/* Sign In Body Secrtion */}
      <SignInBody />

      {/* Footer Secrtion */}
      <Footer />
    </>
  );
}

SignIn.getLayout = function getLayout(page) {
  return <>{page}</>;
};
