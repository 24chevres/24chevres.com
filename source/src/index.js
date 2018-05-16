import React from 'react';
import ReactDOM from 'react-dom';
import 'typeface-roboto';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import EasterEgg from './components/EasterEgg';
import Homepage from './components/Homepage';
import AppBar from './components/AppBar';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#69BAC1', contrastText: '#3C3C3C' },
    secondary: { main: '#74D78E', contrastText: '#4C4C4C'},
    error: { main: '#FFC189', dark: '#cc857b' },
  },
  overrides: {
    MuiTypography: {
      root: {
        color: '!important #0d0d0d',
      },
    },
  },
});

const Index = () => (
  <MuiThemeProvider theme={theme}>
    <AppBar />
    <Homepage />
    <EasterEgg />
  </MuiThemeProvider>
);

ReactDOM.render(<Index />, document.getElementById('app'));
