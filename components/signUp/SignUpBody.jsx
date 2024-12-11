import Link from "next/link";
import GoogleLoginButton from "./GoogleLoginButton"

const SignUpBody = () => {
  return (
    <section
      className="section section--space-bottom authentication wow fadeInUp"
      data-wow-duration="0.4s"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-xxl-6">
            <div className="authentication__wrapper">
              <h4>Let&#39;s Get Started!</h4>
              <p>Please Enter your Email Address to join our club</p>
              <form action="#" method="post">
                <div className="input-group">
                  <div className="input-single">
                    <label htmlFor="authFirstName">First Name</label>
                    <input
                      type="text"
                      name="auth-first-name"
                      id="authFirstName"
                      required
                      placeholder="Jone"
                    />
                  </div>
                  <div className="input-single">
                    <label htmlFor="authLastName">Last Name</label>
                    <input
                      type="text"
                      name="auth-last-name"
                      id="authLastName"
                      required
                      placeholder="Fisher"
                    />
                  </div>
                </div>
                <div className="input-single">
                  <label htmlFor="authEmail">Enter Your Email ID</label>
                  <input
                    type="email"
                    name="auth-email"
                    id="authEmail"
                    required
                    placeholder="Your email ID here"
                  />
                </div>
                <p>
                  By clicking submit, you agree to{" "}
                  <Link href="/privacy-policy">Terms of Use</Link>,{" "}
                  <Link href="/privacy-policy">Privacy Policy</Link>,{" "}
                  <Link href="/privacy-policy">E-sign</Link> &{" "}
                  <Link href="/privacy-policy">
                    communication Authorization
                  </Link>
                  .
                </p>
                <div className="section__cta text-start">
                  <button type="submit" className="sign-up-button">
                    Sign Up
                  </button>
                </div>
                {/* Google Sign-In Button */}
              </form>
              <div id="googleSignInButton" className="mt-3"></div>
                <GoogleLoginButton />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUpBody;