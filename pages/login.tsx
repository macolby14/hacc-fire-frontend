import { Button } from '@material-ui/core';
import Link from '../components/link';

export default function Login() {
  return (
    <>
      <h1>Login Page</h1>
      {/* contained as any because variant is also on Next Link */}
      <Button component={Link} href="http://localhost:8000/auth/google" color="primary" variant={'contained' as any}>Log In with Google</Button>
    </>
  );
}
