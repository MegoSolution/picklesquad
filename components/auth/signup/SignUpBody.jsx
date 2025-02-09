import Link from 'next/link';
import GoogleLoginButton from './GoogleLoginButton';
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { BASE_URL } from '../../../utils/constants';

const SignUpBody = ({ onToggleForm }) => {
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
      localStorage.setItem(
        'membership',
        JSON.stringify(response.data.user.membership)
      );
      localStorage.setItem('user', JSON.stringify(response.data.user));
      const redirect = router.query.redirect || '/profile';
      router.push(redirect); // Redirect to the specified page or profile page
    } catch (err) {
      setError(
        'Registration failed. Please try again. Please make sure that your password is at least 8 characters long and contains at least one letter and one number.'
      );
    }
  };

  return (
    <section
      className="section section--space-bottom authentication auth-page authentication--alt wow fadeInUp"
      data-wow-duration="0.4s"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-xxl-6">
          <Link href="/">
            <img className="sign-in-logo" src="/images/Picklesquad_image/logo-07.png" alt="Logo" />
          </Link>
            <div className="authentication__wrapper">
            <h4 className='sign-in-header'>Sign Up</h4>
              <div className="error__message">{error && <p>{error}</p>}</div>
              <form action="#" method="post" onSubmit={handleSignUp}>
                <label htmlFor="authName">Name</label>
                <div className="input-single">
                  <input
                    type="text"
                    name="auth-name"
                    id="authName"
                    required
                    placeholder="Your name here"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <label htmlFor="authEmail">Email</label>
                <div className="input-single">
                  <input
                    type="email"
                    name="auth-email"
                    id="authEmail"
                    required
                    placeholder="Your email ID here"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <label htmlFor="authPassword">Password</label>
                <div className="input-single">

                  <input
                    type="password"
                    name="auth-password"
                    id="authPassword"
                    required
                    placeholder="Your password here"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <label htmlFor="authConfirmPassword">
                  Password
                </label>
                <div className="input-single">
                  <input
                    type="password"
                    name="auth-confirm-password"
                    id="authConfirmPassword"
                    required
                    placeholder="Confirm your password"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
                <p className="auth-links secondary-text">
                  <a onClick={onToggleForm} style={{ cursor: 'pointer' }}>
                    Already have an account? Sign In
                  </a>
                </p>
                <div className="section__cta text-start">
                  <button type="submit" className="sign-up-button">
                    Sign Up
                  </button>
                </div>
              </form>
              <div id="googleSignInButton" className="mt-3"></div>
              <GoogleLoginButton />
              <div className="terms-text">
                <p>
                  By signing up, I agree to the Picklesquad 
                  <a href="/terms-conditions" target="_blank" rel="noopener noreferrer">
                    Terms of Use
                  </a> 
                  and 
                  <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">
                    Privacy Policy.
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUpBody;
