import React from "react"
import ReactDOM from "react-dom"
import App from "./Components/App.js"
import {MuiThemeProvider} from '@material-ui/core/styles';

import theme from './theme'

// for injection of MUITheme
function Main() {
  return (
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  );
}

// for react-hot-loader
if (module.hot) {
  module.hot.accept();
}

const rootElement = document.getElementById("root")
ReactDOM.render(<Main/>, rootElement)




