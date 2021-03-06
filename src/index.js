import React from 'react';
import App from './Components/App.js';
import {MuiThemeProvider, createMuiTheme, createGenerateClassName} from '@material-ui/core/styles';

import JssProvider from 'react-jss/lib/JssProvider';

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


// for injection of MUITheme
export default class Main extends React.Component {
  componentDidMount() {
    const jssStyles = document.getElementById('jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    const generateClassName = createGenerateClassName();

    return (
      <JssProvider generateClassName={generateClassName}>
        <MuiThemeProvider theme={theme}>
          <App/>
        </MuiThemeProvider>
      </JssProvider>
    );
  }
}
