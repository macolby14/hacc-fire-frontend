import { Button } from '@material-ui/core';
import { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';

import AuthContext from '../context';

export default function AuthButton() {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem('loggedIn') === 'true') {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  // TODO - Need to fetch and handle failures to login
  const toggleAuth = () => {
    if (isLoggedIn) {
      setIsLoggedIn(false);
      localStorage.setItem('loggedIn', 'false');
      router.push(`${process.env.NEXT_PUBLIC_HOST}:${process.env.NEXT_PUBLIC_HOST_PORT}/auth/logout`);
    } else {
      setIsLoggedIn(true);
      localStorage.setItem('loggedIn', 'true');
      router.push(`${process.env.NEXT_PUBLIC_HOST}:${process.env.NEXT_PUBLIC_HOST_PORT}/auth/google`);
    }
  };

  const text = isLoggedIn ? 'Logout' : 'Login';

  return (
    <Button color="primary" variant="contained" onClick={toggleAuth} disableElevation disableRipple>{text}</Button>
  );
}
