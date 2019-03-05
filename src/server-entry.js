import React from 'react'
import App from './Components/App'

import {SheetsRegistry} from 'react-jss/lib/jss';
import JssProvider from 'react-jss/lib/JssProvider';
import {
  MuiThemeProvider,
  createMuiTheme,
  createGenerateClassName,
} from '@material-ui/core/styles';


// process to build a MUI App for SSR


const sheetsRegistry = new SheetsRegistry();

// Create a sheetsManager instance.
const sheetsManager = new Map();

// Create a theme instance.

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

// Create a new class name generator.
const generateClassName = createGenerateClassName();

const MUIApp = (
  <JssProvider registry={sheetsRegistry} generateClassName={generateClassName}>
    <MuiThemeProvider theme={theme} sheetsManager={sheetsManager}>
      <App/>
    </MuiThemeProvider>
  </JssProvider>
)

export default MUIApp

