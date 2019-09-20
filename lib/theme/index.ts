import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  palette: {
    text: {
      primary: '#ffffff', // white
      secondary: '#00ff00', // lime
      disabled: '#696969', // dimgray
      hint: '#ffff00', // yellow
    },
    primary: {
      main: '#4b0082', // indigo
    },
    secondary: {
      main: '#00ff00', // lime
    },
    error: {
      main: '#dc143c', // crimson
    },
    background: {
      default: '#000000', // black
    },
  },
});
