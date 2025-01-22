import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { BASE_URL } from '../../../utils/constants';
import toast, { Toaster } from 'react-hot-toast';

const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const router = useRouter();
  const { token } = router.query;

  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error('Passwords do not match.');
      return;
    }
    try {
      console.log(token);
      console.log(password);
      await axios.post(`${BASE_URL}/auth/reset-password?token=${token}`, {
        password: password,
      });
      toast.success('Password has been reset successfully.');
      router.push('/sign-in');
    } catch (error) {
      toast.error('Error resetting password.');
    }
  };

  return (
    <>
      <section
        className="section section--space-bottom authentication auth-page authentication--alt wow fadeInUp"
        data-wow-duration="0.4s"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-xxl-6">
              <div className="authentication__wrapper">
                <h4 className="sign-in-header">Reset Password</h4>
                <form onSubmit={handleResetPassword}>
                  <div className="input-single">
                    <label htmlFor="newPassword">Enter New Password</label>
                    <input
                      type="password"
                      id="newPassword"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter new password"
                      required
                    />
                  </div>
                  <div className="input-single">
                    <label htmlFor="confirmPassword">
                      Confirm New Password
                    </label>
                    <input
                      type="password"
                      id="confirmPassword"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="Confirm new password"
                      required
                    />
                  </div>
                  <div className="section__cta text-start">
                    <button type="submit" className="sign-up-button">
                      Reset Password
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Toaster />
    </>
  );
};

export default ResetPassword;
