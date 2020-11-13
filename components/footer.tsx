import { Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Link from './link';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    minHeight: '20vh',
    display: 'flex',
    marginTop: theme.spacing(5),
  },
  container: {
    flexGrow: 1,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignContent: 'center',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column-reverse',
    },
  },
  footerBox: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      marginTop: theme.spacing() * 2,
    },
  },
  iconButton: {
    color: theme.palette.primary.contrastText,
  },
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <footer className={classes.root}>
      <Container className={classes.container}>
        <div className={classes.footerBox}>
          <Typography variant="subtitle1"><Link href="/contact" color="inherit">Contact Us</Link></Typography>
          <Typography>
            <Link
              href="mailto:placeholder_email@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              color="inherit"
            >
              placeholder_email@gmail.com
            </Link>
          </Typography>
        </div>
      </Container>
    </footer>
  );
}
