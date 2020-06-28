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
    padding: '0 18px',
    lineHeight: '60px',
    "&:hover": {
      backgroundColor: '#2196f3',
      textDecoration: 'underline',
    }
  },
  menuItemActive: {
    borderBottom: '4px solid #2196f3',
  }
}));

export default function Header(props) {
  const classes = useStyles();
  const router = useRouter();
  console.log(router);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Logo
          </Typography>
          <Button color="secondary" variant="contained">Đội hình</Button>
          <Button color="secondary" variant="contained">Roll Giả lập</Button>
          <Button color="secondary" variant="contained">Tướng</Button>
          <Button color="secondary" variant="contained">Trang bị</Button>
          <Link className={classes.menuItem + ' ' +classes.menuItemActive} to='/thu-vien'>Thư viện</Link>
          <Button color="secondary" variant="contained">Changelog</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
