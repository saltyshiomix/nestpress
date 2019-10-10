import {
  Theme,
  makeStyles,
  createStyles,
} from '@material-ui/core/styles';
import {
  CssBaseline,
  Toolbar,
  Container,
} from '@material-ui/core';
import { AppBar } from './AppBar';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: '100vh',
      overflow: 'scroll',
      backgroundColor: '#000',
      backgroundImage: 'linear-gradient(30deg, #111 12%, transparent 12.5%, transparent 87%, #111 87.5%, #111), linear-gradient(150deg, #111 12%, transparent 12.5%, transparent 87%, #111 87.5%, #111), linear-gradient(30deg, #111 12%, transparent 12.5%, transparent 87%, #111 87.5%, #111), linear-gradient(150deg, #111 12%, transparent 12.5%, transparent 87%, #111 87.5%, #111), linear-gradient(60deg, #333 25%, transparent 25.5%, transparent 75%, #333 75%, #333), linear-gradient(60deg, #222 25%, transparent 25.5%, transparent 75%, #222 75%, #222)',
      backgroundPosition: `0 0, 0 0, ${theme.spacing(21)}px ${theme.spacing(36.8)}px, ${theme.spacing(21)}px ${theme.spacing(36.8)}px, 0 0, ${theme.spacing(21)}px ${theme.spacing(36.8)}px`,
      backgroundSize: theme.spacing(21, 36.8),
    },
  }),
);

export const AdminLayout = (props) => {
  const classes = useStyles({});

  const { children } = props;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar />
      <Toolbar />
      <Container>
        {children}
      </Container>
    </div>
  );
};
