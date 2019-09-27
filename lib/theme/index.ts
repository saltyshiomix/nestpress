import {
  Theme,
  createMuiTheme,
} from '@material-ui/core/styles';

export const theme: Theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#00ff00',
    },
    secondary: {
      main: '#ffff00',
    },
    text: {
      primary: '#f5f5f5',
      secondary: '#00ff00',
      disabled: '#d7d7d7',
      hint: '#ffff00',
    },
  },
});
