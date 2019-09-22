import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  palette: {
    text: {
      primary: '#dcdcdc',
      secondary: '#00ff00', // lime
      disabled: '#696969',
      hint: '#ff00ff', // fuchsia
    },
    primary: {
      main: '#00ff00', // lime
    },
    secondary: {
      main: '#ffff00',
    },
    error: {
      main: '#dc143c',
    },
    background: {
      default: '#000000',
    },
  },
});
