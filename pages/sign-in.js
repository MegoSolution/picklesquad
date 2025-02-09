import AuthPage from '@/components/auth/AuthPage';
import SignInLayout from '@/components/layout/SignInLayout';
import { GoogleOAuthProvider } from '@react-oauth/google';

function SignIn() {
  return (
    <>
      <GoogleOAuthProvider clientId="58880361690-dtpoqfr38r9n53dnmvvt2dul0fhfkml4.apps.googleusercontent.com">

        {/* Auth Page Section */}
        <AuthPage />

      </GoogleOAuthProvider>
    </>
  );
}

// Preserve `getLayout` properly
SignIn.getLayout = function getLayout(page) {
  return <SignInLayout>{page}</SignInLayout>;
};

export default SignIn;
