import { useDispatch } from 'react-redux';
import { logout } from '../../redux/action';
import { useRouter } from 'next/router';

export const useLogout = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const logoutUser = () => {
    localStorage.removeItem('tokens');
    localStorage.removeItem('membership');
    localStorage.removeItem('user');
    dispatch(logout());
    router.push('/sign-in');
  };

  return logoutUser;
};

const SignOutButton = () => {
  const logoutUser = useLogout();

  return (
    <button className="cmn-button cmn-button--tertiary" onClick={logoutUser}>
      Logout
    </button>
  );
};

export default SignOutButton;