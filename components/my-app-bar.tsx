import { useState } from 'react';
import {
  AppBar, Container, Typography, Button, Menu, MenuItem, IconButton,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
// import Image from 'next/image';

import Link from './link';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  container: {
    flexGrow: 1,
    display: 'flex',
    alignContent: 'center',
  },
  title: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

const pages = [
  { text: 'Home', link: '/' },
];

export default function MyAppBar() {
  const classes = useStyles();

  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState<null | HTMLElement>(null);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {pages.map((page) => (
        <MenuItem key={page.text} onClick={handleMobileMenuClose}>
          <Link href={page.link}>{page.text}</Link>
        </MenuItem>
      ))}
    </Menu>
  );

  return (
    <>
      <AppBar className={classes.root} position="sticky">
        <Container className={classes.container}>
          <Typography className={classes.title} variant="h6" align="center"><Link color="inherit" href="/">HACC - Archives</Link></Typography>
          <div className={classes.sectionDesktop}>
            {pages.map((page) => (
              <Button key={page.text} color="inherit" component={Link} href={page.link}>
                {page.text}
              </Button>
            ))}
          </div>
          <div className={classes.sectionMobile}>
            <IconButton color="inherit" onClick={handleMobileMenuOpen}>
              <MenuIcon />
            </IconButton>
          </div>
        </Container>
      </AppBar>
      {renderMobileMenu}
    </>
  );
}
