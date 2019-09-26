import {
  Typography,
  AppBar as MuiAppBar,
  Toolbar,
} from '@material-ui/core';
import { ElevationScroll } from '../../ElevationScroll';
import { Link } from '../../..';

export const AppBar = () => {
  return (
    <ElevationScroll>
      <MuiAppBar
        style={{
          backgroundColor: 'rgba(0,0,0,.2)',
          backgroundImage: 'linear-gradient(357.5deg, rgba(0,0,0,0) 0%, rgba(0,0,0,.24) 100%)',
        }}
      >
        <Toolbar>
          <Link
            href="/admin"
            as="/admin"
          >
            <Typography
              variant="h6"
              style={{
                color: 'snow',
                background: 'linear-gradient(0deg, #444 12%, snow 50%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              NESTPRESS
            </Typography>
          </Link>
        </Toolbar>
      </MuiAppBar>
    </ElevationScroll>
  );
};
