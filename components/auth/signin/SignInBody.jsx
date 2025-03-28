import { useDispatch } from 'react-redux';
import { login } from '../../../redux/action';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';
import GoogleLoginButton from '../signup/GoogleLoginButton';
import { BASE_URL } from '../../../utils/constants';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';

const SignInBody = ({ onToggleForm }) => {
  const [email, setEmail] = useState('');
  const [forgotPasswordEmail, setForgotPasswordEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [message, setMessage] = useState('');

  const dispatch = useDispatch();
  const router = useRouter();

  const useLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${BASE_URL}/auth/login`, {
        email,
        password,
      });
      dispatch(login(response.data));
      localStorage.setItem('tokens', JSON.stringify(response.data.tokens));
      localStorage.setItem(
        'membership',
        JSON.stringify(response.data.user.membership)
      );
      localStorage.setItem('user', JSON.stringify(response.data.user));
      const redirect = router.query.redirect || '/profile';
      router.push(redirect); // Redirect to the specified page or profile page
    } catch (err) {
      setError('Login failed. Please check your credentials and try again.');
      toast.error('Login failed!');
    }
  };

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    try {
      console.log(forgotPasswordEmail);
      await axios.post(`${BASE_URL}/auth/forgot-password`, { email: forgotPasswordEmail });
      toast.success('A reset password link has been sent to your email.');
    } catch (error) {
      toast.error('Error sending reset password email.');
    }
  };

  return (
    <div>
      <Toaster /> {/* Add Toaster component to render toasts */}
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
                {showForgotPassword ? (
                  <>
                    <h4 className='sign-in-header'>Sign In</h4>
                    <form onSubmit={handleForgotPassword}>
                      <label htmlFor="authEmailIn">Enter Your Email ID</label>
                      <div className="input-single">
                        <input
                          type="email"
                          value={forgotPasswordEmail}
                          onChange={(e) => setForgotPasswordEmail(e.target.value)}
                          placeholder="Enter your email"
                          required />
                      </div>
                      <div className="section__cta text-start">
                        <button type="submit" className="sign-up-button">
                          Send Reset Link
                        </button>
                      </div>
                      {message && <p>{message}</p>}
                      <p className="auth-links secondary-text">
                        <a onClick={() => setShowForgotPassword(false)}>Back to Sign In</a>
                      </p>
                    </form>
                  </>
                ) : (
                  <div>
                    <h4 className='sign-in-header'>Sign In</h4>
                    <p style={{ color: 'black' }}>
                      Don't have an account? 
                      <a onClick={onToggleForm} className="sign-in-link">
                        Sign up
                      </a>
                    </p>
                    <div className="error__inner">
                      {error && <p className="error">{error}</p>}
                    </div>
                    <form action="#" method="post" onSubmit={useLogin}>
                      <div className="input-single">
                        <label htmlFor="authEmailIn">Email</label>
                        <input
                          type="email"
                          name="auth-email-in"
                          id="authEmailIn"
                          required
                          onChange={(e) => setEmail(e.target.value)} />
                      </div>
                      <div className="input-single">
                        <label htmlFor="authPassword">Password</label>
                        <input
                          type="password"
                          name="auth-password"
                          id="authPassword"
                          required
                          onChange={(e) => setPassword(e.target.value)} />
                      </div>
                      <div className="auth-links secondary-text d-flex justify-content-between align-items-center mb-3">
                        <div className="remember-me-container d-flex align-items-center">
                          <input
                            type="checkbox"
                            id="rememberMe"
                            className="me-2"
                          />
                          <label htmlFor="rememberMe" style={{ fontWeight: 'normal', margin: 0 }}>Remember me</label>
                        </div>
                        <a onClick={() => setShowForgotPassword(true)}>Forgot Password?</a>
                      </div>
                      <div className="section__cta text-start">
                        <button type="submit" className="sign-up-button">
                          Sign In
                        </button>
                      </div>
                    </form>
                    <div id="googleSignInButton" className="mt-3"></div>
                    <GoogleLoginButton />
                    <div className="terms-text">
                      <p>
                        By signing in, I agree to the Picklesquad 
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
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignInBody;
