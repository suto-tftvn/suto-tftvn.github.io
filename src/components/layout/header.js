import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
// import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
// import { Redirect } from 'react-router';
import { useRouter } from "../../until/hook/useRouter";
import Container from "@material-ui/core/Container";
import Hidden from '@material-ui/core/Hidden';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height:'64px',
    position: 'relative',
    zIndex: 9
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  menuItem: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: 'larger',
    fontWeight: '300',
    height: '60px',
    padding: '4px 18px',
    lineHeight: '60px',
    overflow: 'hidden',
    position: 'relative',
    "&:hover": {
      // backgroundColor: '#2196f3',
      textDecoration: 'underline',
    },
    "&:hover::after": {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      transition: 'all 0.35s'
    },
    '&::after': {
      left: 0,
      right: 0,
      top: "-100%",
      bottom: "100%",
      content: "''",
      background: '#2196f3',
      position: 'absolute',
      zIndex: '-1',
      padding: '0.85em 0.75em',
      display: 'block',
    }
  },
  menuItemActive: {
    paddingBottom: '0px',
    borderBottom: '4px solid #2196f3',
  },
  logo: {
    textDecoration: 'none',
    color: '#fff'
  },
  mainNav: {
    height: '100vh',
    content: "''",
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: '-15px',
    background: '#022140',
    transformOrigin: '0 0',
    transform: 'skew(-16deg) translateX(-122%)',
    opacity: 0,
    zIndex: '-1',
    visibility: 'hidden',
    transition: 'all .375s',
    '&.isOpen': {
      opacity: 1,
      zIndex: 100,
      visibility: 'visible',
      transform: 'skew(-16deg) translateX(-22%)',
    },
    '& ul': {
      marginTop: '50px',
      display: 'inline-flex',
      flexDirection: 'column',
      height: '93%',
      alignItems: 'flex-end',
      transform: 'translateX(-10%) skew(0deg)',
      listStyle: 'none',
      width: '100%'
    },
    '& li': {
      transform: 'skew(16deg) translateX(-50%)',
      opacity: 0,
      transition: 'all .375s',
    },
    '&.isOpen li': {
      transform: 'skew(16deg)',
      opacity: 1,
    },
    '& li:nth-child(1)': {
      transition: 'all 275ms 225ms'
    },
    '& li:nth-child(2)': {
      transition: 'all 275ms 225ms'
    },
    '& li:nth-child(3)': {
      transition: 'all 275ms 225ms'
    },
    '& li:nth-child(4)': {
      transition: 'all 275ms 225ms'
    },
    '& li:nth-child(5)': {
      transition: 'all 275ms 225ms'
    },
    '& .menuItemMobile': {
      color: '#BDBDBD',
      textDecoration: 'none',
      fontSize: 'larger',
      fontWeight: '500',
      height: '60px',
      padding: '4px 18px',
      lineHeight: '60px',
      overflow: 'hidden',
      position: 'relative',
    },
    '& .menuItemActiveMobile': {
      color: '#FFF',
      fontWeight: 'bold',
      textDecoration: 'underline'
    }
  }
}));

export default function Header(props) {
  const classes = useStyles();
  const router = useRouter();
  const [showMenuMobile, setShowMenuMobile] = useState(false);

  const checkRouter = (checkText) => {
    let res = false;
    let pathname = router.pathname;
    let arrPath = pathname.split('/');
    if(arrPath[1] && checkText.indexOf(arrPath[1])!==-1){
        res = true;
    }
    return res
  }

  const changeMenuMobileStatus = () => {
    console.log('test',showMenuMobile);
    setShowMenuMobile(!showMenuMobile);
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
          <Hidden smDown>
            <Container maxWidth="lg">
            <Toolbar id="back-to-top-anchor">
              <Typography variant="h6" className={classes.title}>
                <Link to='/' className={classes.logo}>
                  TFTVN
                </Link>
              </Typography>
              <Link className={classes.menuItem} to='/thu-vien'>Đội hình</Link>
              <Link className={classes.menuItem + ' ' +(checkRouter('/xep-team') ? classes.menuItemActive : '')} to='/xep-team'>Xếp team</Link>
              <Link className={classes.menuItem + ' ' +(checkRouter('/tuong') ? classes.menuItemActive : '')} to='/tuong'>Tướng</Link>
              <Link className={classes.menuItem + ' ' +(checkRouter('/trang-bi') ? classes.menuItemActive : '')} to='/trang-bi'>Trang bị</Link>
              <Link className={classes.menuItem + ' ' +(checkRouter('/thu-vien') ? classes.menuItemActive : '')} to='/thu-vien/tuong'>Thư viện</Link>
            </Toolbar>
            </Container>
          </Hidden>
          <Hidden mdUp>
            <Toolbar id="back-to-top-anchor">
              <Typography variant="h6" className={classes.title}>
                <Link to='/' className={classes.logo}>
                  TFTVN
                </Link>
              </Typography>
              <IconButton aria-label="delete" style={{color:'#fff'}} onClick={() => changeMenuMobileStatus()}>
                <MenuIcon fontSize="large" />
              </IconButton>
            </Toolbar>
            <div className={classes.mainNav+(showMenuMobile ? ' isOpen' : '')}>
              <ul>
                <li>
                  <Link className={'menuItemMobile'} to='/thu-vien' onClick={() => setShowMenuMobile(false)}>Đội hình</Link>
                </li>
                <li>
                  <Link className={'menuItemMobile'+(checkRouter('/xep-team') ? ' menuItemActiveMobile' : '')} to='/xep-team' onClick={() => setShowMenuMobile(false)}>Xếp team</Link></li>
                <li>
                  <Link className={'menuItemMobile'+(checkRouter('/tuong') ? ' menuItemActiveMobile' : '')} to='/tuong' onClick={() => setShowMenuMobile(false)}>Tướng</Link></li>
                <li>
                  <Link className={'menuItemMobile'+(checkRouter('/trang-bi') ? ' menuItemActiveMobile' : '')} to='/trang-bi' onClick={() => setShowMenuMobile(false)}>Trang bị</Link></li>
                <li>
                  <Link className={'menuItemMobile'+(checkRouter('/thu-vien') ? ' menuItemActiveMobile' : '')} to='/thu-vien/tuong' onClick={() => setShowMenuMobile(false)}>Thư viện</Link></li>
              </ul>
            </div>
          </Hidden>
      </AppBar>
    </div>
  );
}
