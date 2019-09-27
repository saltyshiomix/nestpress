import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

const { augmentColor } = theme.palette;

export const createAugmentColor = (color: string) => augmentColor({ 500: color });

export const brand = {
  primary: createAugmentColor('#00ff00'), // lime
  secondary: createAugmentColor('#00ff00'), // yellow
  text: createAugmentColor('#d8d8d8'), // white
  background: createAugmentColor('#222222'), // black
};
