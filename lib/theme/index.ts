import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

const { augmentColor } = theme.palette;

export const createAugmentColor = (color: string) => augmentColor({ 500: color });

export const brand = {
  primary: {
    main: '#00ff00',
  },
  secondary: {
    main: '#00ff00',
  },
  text: {
    main: '#d8d8d8',
    light: '#ffffff',
  },
  background: {
    main: '#222222',
    light: '#333333',
    dark: '#111111',
  },
};
