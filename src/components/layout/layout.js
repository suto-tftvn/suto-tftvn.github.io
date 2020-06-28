import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Header from "./header";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
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
});

export default function Layout(props) {
  console.log(props);
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <Container fixed>
          <Header router={props.route} />
          <div style={{height:'150px'}}>

          </div>
          {/* {props.route} */}
          {renderRoutes(props.route.routes)}
        </Container>
      </ThemeProvider>
    </React.Fragment>
  );
}
