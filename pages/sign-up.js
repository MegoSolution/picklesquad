import Footer from "@/components/footer/Footer";
import NavBar from "@/components/navBar/NavBar";
import AuthPage from "@/components/auth/AuthPage";
import { GoogleOAuthProvider } from '@react-oauth/google'; 

export default function SignUp() {
  return (
    <>
      <GoogleOAuthProvider clientId="58880361690-dtpoqfr38r9n53dnmvvt2dul0fhfkml4.apps.googleusercontent.com">

        {/* Auth Page Section */}
        <AuthPage />

      </GoogleOAuthProvider>
    </>
  );
}

SignUp.getLayout = function getLayout(page) {
  return <>{page}</>;
};
