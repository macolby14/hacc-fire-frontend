import { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import AuthContext from '../context';

export default function AuthOnlyWrapper({ children }: {children: React.ReactNode}) {
  const { isLoggedIn } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (!isLoggedIn) {
      console.log('Is not logged in');
      router.push('/login');
    }
    console.log('isLoggedIn');
    console.log(isLoggedIn);
  }, []);

  return (<>{children}</>);
}
