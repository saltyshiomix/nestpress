import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  palette: {
    text: {
      primary: '#ffffff', // white
      secondary: '#00ff00', // lime
      disabled: '#696969', // dimgray
      hint: '#ff00ff', // fuchsia
    },
    primary: {
      main: '#00ff00', // lime
    },
    secondary: {
      main: '#ffff00', // yellow
    },
    error: {
      main: '#dc143c', // crimson
    },
    background: {
      default: '#000000', // black
    },
  },
});
