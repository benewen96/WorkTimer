import React from 'react';
import PropTypes from 'prop-types';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import colors from '../colors.json';

const createTheme = secondary => createMuiTheme({
  palette: {
    primary: {
      light: '#49443b',
      main: '#130c0e',
      dark: '#000000',
      contrastText: '#fff',
    },
    secondary,
  },
});

const UserTheme = props => (
  <MuiThemeProvider theme={createTheme(colors[props.theme])}>
    {props.children}
  </MuiThemeProvider>
);


export default UserTheme;
