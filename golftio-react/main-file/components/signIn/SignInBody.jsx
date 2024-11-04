import Link from "next/link";

const SignInBody = () => {
  return (
    <section
      className="section section--space-bottom authentication authentication--alt wow fadeInUp"
      data-wow-duration="0.4s"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-xxl-6">
            <div className="authentication__wrapper">
              <h4>Sign in to Golftio</h4>
              <p>Sign in to your account and Join our club</p>
              <form action="#" method="post">
                <div className="input-single">
                  <label htmlFor="authEmailIn">Enter Your Email ID</label>
                  <input
                    type="email"
                    name="auth-email-in"
                    id="authEmailIn"
                    required
                    placeholder="Your email ID here"
                  />
                </div>
                <div className="input-single">
                  <label htmlFor="authPassword">Enter Password</label>
                  <input
                    type="password"
                    name="auth-password"
                    id="authPassword"
                    required
                    placeholder="Enter Your Password"
                  />
                </div>
                <p className="forget secondary-text">
                  <Link href="/contact-us">Forgot Password?</Link>
                </p>
                <div className="section__cta text-start">
                  <button type="submit" className="cmn-button">
                    Sign In
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignInBody;
