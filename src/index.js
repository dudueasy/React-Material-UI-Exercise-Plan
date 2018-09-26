import React from "react"
import ReactDOM from "react-dom"
import App from "./Components/App.js"
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';


// create a  MUITheme
const theme = createMuiTheme({
   palette: {
    primary: {
      main: '#e53935',
    },
    secondary: {
      main: '#3f51b5',
    },
  },
});



console.log("a theme object looks like this: \n", theme)

// for injection of MUITheme
function Main() {
  return (
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  );
}

// for react-hot-loader
if(module.hot) {
  module.hot.accept();
}

const rootElement = document.getElementById("root")
ReactDOM.render(<Main />, rootElement)




