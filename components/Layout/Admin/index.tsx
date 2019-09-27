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
      padding: theme.spacing(4, 2),
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
