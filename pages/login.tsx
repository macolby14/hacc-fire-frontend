import { Box } from '@material-ui/core';

import AuthButton from '../components/auth-button';

export default function Login() {
  return (
    <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <h1>Please Login to Visit this Page</h1>
      <AuthButton />
    </Box>
  );
}
