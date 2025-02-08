import AuthPage from '@/components/auth/AuthPage';
import Footer from '@/components/footer/Footer';
import NavBar from '@/components/navBar/NavBar';
import { GoogleOAuthProvider } from '@react-oauth/google';

export default function SignIn() {
  return (
    <>
      <GoogleOAuthProvider clientId="58880361690-dtpoqfr38r9n53dnmvvt2dul0fhfkml4.apps.googleusercontent.com">

        {/* Auth Page Section */}
        <AuthPage />

      </GoogleOAuthProvider>
    </>
  );
}

SignIn.getLayout = function getLayout(page) {
  return <>{page}</>;
};
