import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
// import { Redirect } from 'react-router';
import { useRouter } from "../../until/hook/useRouter"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height:'64px'
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
    "&:hover": {
      backgroundColor: '#2196f3',
      textDecoration: 'underline',
    }
  },
  menuItemActive: {
    paddingBottom: '0px',
    borderBottom: '4px solid #2196f3',
  },
  logo: {
    textDecoration: 'none',
    color: '#fff'
  }
}));

export default function Header(props) {
  const classes = useStyles();
  const router = useRouter();
  const checkRouter = (checkText) => {
    let res = false;
    let pathname = router.pathname;
    let arrPath = pathname.split('/');
    if(checkText.indexOf(arrPath[1])!==-1){
        res = true;
    }
    return res
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link to='/' className={classes.logo}>
              TFTVN
            </Link>
          </Typography>
          {/* <Button color="secondary" variant="contained">Đội hình</Button> */}
          {/* <Button color="secondary" variant="contained">Roll Giả lập</Button> */}
          {/* <Button color="secondary" variant="contained">Tướng</Button> */}
          {/* <Button color="secondary" variant="contained">Trang bị</Button> */}
          <Link className={classes.menuItem} to='/thu-vien'>Đội hình</Link>
          <Link className={classes.menuItem + ' ' +(checkRouter('/xep-team') ? classes.menuItemActive : '')} to='/xep-team'>Xếp team</Link>
          <Link className={classes.menuItem + ' ' +(checkRouter('/tuong') ? classes.menuItemActive : '')} to='/tuong'>Tướng</Link>
          <Link className={classes.menuItem + ' ' +(checkRouter('/trang-bi') ? classes.menuItemActive : '')} to='/trang-bi'>Trang bị</Link>
          <Link className={classes.menuItem + ' ' +(checkRouter('/thu-vien') ? classes.menuItemActive : '')} to='/thu-vien/tuong'>Thư viện</Link>
          {/* <Button color="secondary" variant="contained">Changelog</Button> */}
        </Toolbar>
      </AppBar>
    </div>
  );
}
