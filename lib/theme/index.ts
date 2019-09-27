import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

const { augmentColor } = theme.palette;

export const createAugmentColor = (color: string) => augmentColor({ 500: color });

export const brand = {
  // lime
  primary: {
    main: '#00ff00',
  },
  // yellow
  secondary: {
    main: '#00ff00',
  },
  // white
  text: {
    main: '#d8d8d8',
    light: '#ffffff',
  },
  // black
  background: {
    main: '#222222',
    light: '#333333',
    dark: '#111111',
  },
};
