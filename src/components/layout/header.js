import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Header() {
  const classes = useStyles();

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
          <Button color="secondary" variant="contained">Thư viện</Button>
          <Button color="secondary" variant="contained">Changelog</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
