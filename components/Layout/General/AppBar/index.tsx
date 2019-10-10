import {
  Theme,
  makeStyles,
  createStyles,
} from '@material-ui/core/styles';
import {
  Typography,
  AppBar as MuiAppBar,
  Toolbar,
} from '@material-ui/core';
import { ElevationScroll } from '../../ElevationScroll';
import { Link } from '../../../Link';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: 'rgba(255,255,255,.05)',
      backdropFilter: 'contrast(1) blur(2px)',
    },
    title: {
      color: '#d8d8d8',
      textShadow: '2.4px 2.4px 0 #000',
      '&:hover': {
        color: '#fff',
        textShadow: '3px 3px 0 #000',
      },
    },
  }),
);

export const AppBar = () => {
  const classes = useStyles({});

  return (
    <ElevationScroll>
      <MuiAppBar className={classes.root}>
        <Toolbar>
          <Link
            href="/"
            as="/"
            style={{ textDecoration: 'none' }}
          >
            <Typography
              className={classes.title}
              variant="h6"
            >
              NESTPRESS
            </Typography>
          </Link>
        </Toolbar>
      </MuiAppBar>
    </ElevationScroll>
  );
};
