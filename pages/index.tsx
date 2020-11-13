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
        <Box display="flex" alignContent="center" justifyContent="center">
          <Typography variant="h1">HACC - Archives</Typography>
        </Box>
      </main>
    </div>
  );
}
