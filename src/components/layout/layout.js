import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Header from "./header";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import blue from "@material-ui/core/colors/blue";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: blue[500],
    }
  },
});

export default function Layout(props) {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <Container fixed>
          <Header />
          {props.children}
        </Container>
      </ThemeProvider>
    </React.Fragment>
  );
}
