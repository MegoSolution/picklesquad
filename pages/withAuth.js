import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import {
  BASE_URL,
} from '../utils/constants';

const isTokenExpired = (token) => {
  try {
    const decodedToken = JSON.parse(atob(token.split('.')[1]));
    const currentTime = Math.floor(Date.now() / 1000);
    return decodedToken.exp < currentTime;
  } catch (error) {
    console.error('Error decoding token:', error);
    return true;
  }
};

const refreshAccessToken = async (refreshToken) => {
  try {
    const response = await axios.post(`${BASE_URL}/auth/refresh-tokens`, {
      refreshToken,
    });
    localStorage.setItem('tokens', JSON.stringify(response.data.tokens));
    return response.data.tokens.access.token;
  } catch (error) {
    console.error('Failed to refresh token:', error);
    localStorage.removeItem('tokens');
    localStorage.removeItem('user');
    return null;
  }
};

const withAuth = (WrappedComponent, allowedRoles = []) => {
  const AuthComponent = (props) => {
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    useEffect(() => {
      const tokens = JSON.parse(localStorage.getItem('tokens'));
      const storedUser = JSON.parse(localStorage.getItem('user'));

      if (!tokens || !storedUser) {
        router.replace('/sign-in'); // Use `replace` to prevent back navigation
        return;
      }

      const { access, refresh } = tokens;
      if (isTokenExpired(access.token)) {
        refreshAccessToken(refresh.token).then((newAccessToken) => {
          if (!newAccessToken) {
            router.replace('/sign-in');
          } else {
            setUser(storedUser);
            setLoading(false);
          }
        });
      } else {
        setUser(storedUser);
        setLoading(false);
      }
    }, []);

    if (loading) return <div>Loading...</div>;

    return <WrappedComponent {...props} />;
  };

  // Preserve `getLayout` correctly
  AuthComponent.getLayout = WrappedComponent.getLayout || ((page) => page);

  return AuthComponent;
};

export default withAuth;

