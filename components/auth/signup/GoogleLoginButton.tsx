import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../../redux/action';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { useRouter } from 'next/router';
import { BASE_URL } from '../../../utils/constants';
import toast, { Toaster } from 'react-hot-toast';

const GoogleLoginButton: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();

  const handleGoogleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        const response = await axios.post(BASE_URL + '/auth/google-login', {
          token: tokenResponse.access_token,
        });

        const { user, tokens } = response.data;
        dispatch(login(response.data));
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('tokens', JSON.stringify(tokens));

        toast.success('Login Successful');

        setTimeout(() => {
          router.push('/booking');
        }, 2000);
      } catch (error) {
        console.error('Google login failed:', error);
      }
    },
    onError: () => console.error('Google login failed'),
  });

  const googleButtonStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    color: '#757575',
    backgroundColor: isHovered ? '#f7f7f7' : 'white',
    border: '1px solid #D9D9D9',
    borderRadius: '20px',
    cursor: 'pointer',
    gap: '10px',
    transition: 'background-color 0.3s',
  };

  const googleIconStyle: React.CSSProperties = {
    width: '20px',
    height: '20px',
  };

  return (
    <>
      <button
        onClick={() => handleGoogleLogin()}
        style={googleButtonStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src="https://developers.google.com/identity/images/g-logo.png"
          alt="Google logo"
          style={googleIconStyle}
        />
        Sign in with Google
      </button>
      <Toaster />
    </>
  );
};

export default GoogleLoginButton;
