import { useDispatch } from 'react-redux';
import { logout } from '../../redux/action';
import { useRouter } from 'next/router';

const handleLogout = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const logoutUser = () => {
    localStorage.removeItem('tokens');
    localStorage.removeItem('user');
    dispatch(logout());
    router.push('/sign-in');
  };

  return (
    <button className="cmn-button cmn-button--tertiary" onClick={logoutUser}>Logout</button>
  );
};

export default handleLogout;