import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Header from "./header";
import { createMuiTheme, ThemeProvider, makeStyles  } from "@material-ui/core/styles";
import green from "@material-ui/core/colors/green";
import lightBlue from "@material-ui/core/colors/lightBlue";
import { renderRoutes } from 'react-router-config';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: green[700],
    },
    secondary: {
      main: lightBlue[600]
    }
  },
  greenPrimary: green[700]
});

const useStyles = makeStyles((theme) => ({
  mainNav: {
    // transformOrigin: '0 0',
    // transform: 'skew(-14deg) translateX(-120%)',
    // transition: 'all .275s .1s',
    // position: 'absolute',
    // top: 0,
    // right: 0,
    // left: 0,
    // bottom: 0,
    textAlign: 'center',
    background: '#FFF',
    // opacity: 0,
    // zIndex: '-1',
    // visibility: 'hidden',
    '&::before': {
      content: "''",
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: '-15px',
      background: '#FEDC2A',
      transform: 'skew(-14deg) translateX(0)'
    }
  }
}));

export default function Layout(props) {
  const classes = useStyles();
  // console.log(props);
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <Header router={props.route} />
        <Container maxWidth="lg">
          <div style={{height:'150px'}}>
          </div>
          {/* {props.route} */}
          {renderRoutes(props.route.routes)}
        </Container>
        {/* <div className={classes.mainNav}>
          
        </div> */}
      </ThemeProvider>
    </React.Fragment>
  );
}
