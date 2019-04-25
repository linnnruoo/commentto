import React from "react";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import { Provider } from "react-redux";
import store from "./store";

import "./App.css";
import Home from "./pages/Home";

const theme = createMuiTheme({
  palette: {
    primary: { main: "#202c39" },
    secondary: { main: "#f2d492" }
  },
  typography: { fontFamily: '"Sarabun", sans-serif', useNextVariants: true }
});

const App = () => {
  return (
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <Home />
      </MuiThemeProvider>
    </Provider>
  );
};

export default App;
