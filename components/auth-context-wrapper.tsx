import { useState } from 'react';

import AuthContext from '../context';

const AuthContextWrapper = ({ children }: {children: React.ReactNode}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // overrides defaults in AuthContext. Uses useState getter and setter
  const defaultAuthContext = {
    isLoggedIn,
    setIsLoggedIn,
  };

  return (
    <AuthContext.Provider value={defaultAuthContext}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextWrapper;
