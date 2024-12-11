import Link from "next/link";
import GoogleLoginButton from "./GoogleLoginButton";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const BASE_URL = 'http://localhost:3000/v1';

const SignUpBody = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const router = useRouter();

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    try {
      const response = await axios.post(`${BASE_URL}/auth/register`, {
        name,
        email,
        password,
      });
      localStorage.setItem('tokens', JSON.stringify(response.data.tokens));
      router.push('/booking'); // Redirect to the dashboard page
    } catch (err) {
      setError('Registration failed. Please try again.');
    }
  };

  return (
    <section
      className="section section--space-bottom authentication wow fadeInUp"
      data-wow-duration="0.4s"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-xxl-6">
            <div className="authentication__wrapper">
              <h4>Let's Get Started!</h4>
              <p>Please Enter your Email Address to join our club</p>
              <div className="error__message">
                {error && <p>{error}</p>}
              </div>
              <form action="#" method="post" onSubmit={handleSignUp}>
                <div className="input-single">
                  <label htmlFor="authName">Name</label>
                  <input
                    type="text"
                    name="auth-name"
                    id="authName"
                    required
                    placeholder="John Doe"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="input-single">
                  <label htmlFor="authEmail">Enter Your Email ID</label>
                  <input
                    type="email"
                    name="auth-email"
                    id="authEmail"
                    required
                    placeholder="Your email ID here"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="input-single">
                  <label htmlFor="authPassword">Enter Your Password</label>
                  <input
                    type="password"
                    name="auth-password"
                    id="authPassword"
                    required
                    placeholder="Your password here"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="input-single">
                  <label htmlFor="authConfirmPassword">Confirm Your Password</label>
                  <input
                    type="password"
                    name="auth-confirm-password"
                    id="authConfirmPassword"
                    required
                    placeholder="Confirm your password"
                    onChange={(e) => setConfirmPassword(e.target.value)}
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