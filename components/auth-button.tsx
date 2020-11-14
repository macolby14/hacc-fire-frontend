import { Button } from '@material-ui/core';
import { useContext } from 'react';
import { useRouter } from 'next/router';

import AuthContext from '../context';

export default function AuthButton() {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const router = useRouter();

  // TODO - Need to fetch and handle failures to login
  const toggleAuth = () => {
    if (isLoggedIn) {
      setIsLoggedIn(false);
      router.push('http://localhost:8000/auth/logout');
    } else {
      setIsLoggedIn(true);
      router.push('http://localhost:8000/auth/google');
    }
  };

  const text = isLoggedIn ? 'Logout' : 'Login';

  return (
    <Button color="primary" variant="contained" onClick={toggleAuth}>{text}</Button>
  );
}
