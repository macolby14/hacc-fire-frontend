import Head from 'next/head';
import { Box, Typography } from '@material-ui/core';
// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles((theme) => ({
//   autoSideMargin: {
//     margin: theme.spacing('auto', 'auto'),
//   },
//   marginTop: {
//     marginTop: theme.spacing() * 2,
//   },
//   marginTopDouble: {
//     marginTop: theme.spacing() * 4,
//   },
// }));

export default function Home() {
  // const classes = useStyles();
  return (
    <div>
      <Head>
        <title>HACC - Archives</title>
      </Head>
      <main>
        <Box display="flex" alignContent="center" justifyContent="center" flexDirection="column">
          <Typography variant="h2" align="center">Hawaii State Archives</Typography>
          <Typography variant="h4" align="center"> Crowdsourcing Documentation</Typography>
          <Typography variant="h6" align="center">Help us transcribe the Hawaii State Archives</Typography>
          <Typography variant="h6" align="center">Login with Google to get started</Typography>
        </Box>
      </main>
    </div>
  );
}
