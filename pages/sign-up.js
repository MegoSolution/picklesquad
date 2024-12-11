import Footer from "@/components/footer/Footer";
import NavBar from "@/components/navBar/NavBar";
import SignUpBody from "@/components/auth/signup/SignUpBody";
import { GoogleOAuthProvider } from '@react-oauth/google'; 


export default function SignUp() {
  return (
    <>
    <GoogleOAuthProvider clientId="58880361690-dtpoqfr38r9n53dnmvvt2dul0fhfkml4.apps.googleusercontent.com">
      {/* NavBar Secrtion */}
      <NavBar cls="" />

      {/* SignUp Body Secrtion */}
      <SignUpBody />

      {/* Footer Secrtion */}
      <Footer />
    </GoogleOAuthProvider>
    </>
  );
}

SignUp.getLayout = function getLayout(page) {
  return <>{page}</>;
};
