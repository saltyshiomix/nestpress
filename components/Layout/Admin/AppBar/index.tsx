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
import { Link } from '../../..';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: 'rgba(0,0,0,.2)',
      backgroundImage: 'linear-gradient(357.5deg, rgba(0,0,0,0) 0%, rgba(0,0,0,.24) 100%)',
    },
    title: {
      color: '#eee',
      background: 'linear-gradient(0deg, #333 0%, #eee 48%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      '&:hover': {
        WebkitTextFillColor: '#eee',
        textShadow: '2.4px 2.4px 0 #000',
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
            href="/admin"
            as="/admin"
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