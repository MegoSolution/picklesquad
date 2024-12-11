import { useDispatch } from 'react-redux';
import { login } from '../../../redux/action';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';
import GoogleLoginButton from "../SignUp/GoogleLoginButton";
import axios from 'axios';

const BASE_URL = 'http://localhost:3000/v1';

const SignInBody = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const dispatch = useDispatch();
  const router = useRouter();

  const useLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${BASE_URL}/auth/login`, { email, password });
      dispatch(login(response.data));
      localStorage.setItem('tokens', JSON.stringify(response.data.tokens));
      router.push('/booking'); // Redirect to the dashboard page
    } catch (err) {
      setError('Login failed. Please check your credentials and try again.');
    }
  };

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
              <div className="error__inner">
                {error && <p className="error">{error}</p>}
              </div>
              <form action="#" method="post" onSubmit={useLogin}>
                <div className="input-single">
                  <label htmlFor="authEmailIn">Enter Your Email ID</label>
                  <input
                    type="email"
                    name="auth-email-in"
                    id="authEmailIn"
                    required
                    placeholder="Your email ID here"
                    onChange={(e) => setEmail(e.target.value)}
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
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <p className="forget secondary-text">
                  <Link href="/contact-us">Forgot Password?</Link>
                </p>
                <div className="section__cta text-start">
                  <button
                    type="submit"
                    className="sign-up-button"
                  >
                    Sign In
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

export default SignInBody;
