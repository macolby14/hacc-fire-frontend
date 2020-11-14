// Disable eslint rule for HOC
/* eslint-disable react/jsx-props-no-spreading */
import { useEffect } from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Container, CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';

import MyAppBar from '../components/my-app-bar';
import Footer from '../components/footer';
import theme from '../styles/theme.js';
import AuthContextWrapper from '../components/auth-context-wrapper';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Head>
        <title>HACC - Archives</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <AuthContextWrapper>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <MyAppBar />
          <main>
            <Container maxWidth="lg">
              <Component {...pageProps} />
            </Container>
          </main>
          <Footer />
        </ThemeProvider>
      </AuthContextWrapper>
    </>
  );
}

export default MyApp;
