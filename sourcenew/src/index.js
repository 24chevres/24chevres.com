import React from 'react';
import ReactDOM from 'react-dom';
import 'typeface-roboto';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import EasterEgg from './components/EasterEgg';
import Homepage from './components/Homepage';
import AppBar from './components/AppBar';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#98ffb0', contrastText: '#4c4c4c' },
    secondary: { main: '#9aceff' },
    tertiary: { main: '#bfff98', dark: '#98cc79' },
    error: { main: '#ffa79a', dark: '#cc857b' },
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

// TODO share in PR
// https://medium.freecodecamp.org/part-1-react-app-from-scratch-using-webpack-4-562b1d231e75
