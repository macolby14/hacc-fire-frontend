import { createContext } from 'react';

const AuthContext = createContext({
  isLoggedIn: false,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setIsLoggedIn: (bool: boolean) => {},
});

export default AuthContext;
