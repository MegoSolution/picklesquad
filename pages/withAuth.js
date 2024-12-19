import { useEffect } from 'react';
import { useRouter } from 'next/router';

const withAuth = (WrappedComponent) => {
  return (props) => {
    const router = useRouter();

    useEffect(() => {
      const tokens = localStorage.getItem('tokens');
      if (!tokens) {
        router.push('/sign-in');
      }
    }, []);

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;