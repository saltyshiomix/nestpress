import {
  Theme,
  makeStyles,
  createStyles,
} from '@material-ui/core/styles';
import {
  Typography,
  Button,
  AppBar as MuiAppBar,
  Toolbar,
} from '@material-ui/core';
import { ElevationScroll } from '../../ElevationScroll';
import { Link } from '../../..';
import { Http } from '../../../../lib';

const http = new Http();

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: 'rgba(0,0,0,.2)',
      backgroundImage: 'linear-gradient(357.5deg, rgba(0,0,0,0) 0%, rgba(0,0,0,.24) 100%)',
    },
    title: {
      color: '#d8d8d8',
      textShadow: '2.4px 2.4px 0 #000',
      '&:hover': {
        color: '#fff',
        textShadow: '3px 3px 0 #000',
      },
    },
    logout: {
      position: 'absolute',
      right: theme.spacing(4),
    },
  }),
);

export const AppBar = () => {
  const classes = useStyles({});

  const onClick = async (e: React.MouseEvent) => {
    e.preventDefault();
    const isLoggedOut: boolean = await http.post('api/auth/logout');
    if (isLoggedOut) {
      location.href = '/admin/login';
    }
  };

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
          <Button
            className={classes.logout}
            color="primary"
            onClick={onClick}
          >
            LOGOUT
          </Button>
        </Toolbar>
      </MuiAppBar>
    </ElevationScroll>
  );
};
