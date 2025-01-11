import { useState } from 'react';
import SignInBody from './signin/SignInBody';
import SignUpBody from './signup/SignUpBody';

const AuthPage = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const handleToggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <>
      {isSignUp ? (
        <SignUpBody onToggleForm={handleToggleForm} />
      ) : (
        <SignInBody onToggleForm={handleToggleForm} />
      )}
    </>
  );
};

export default AuthPage;