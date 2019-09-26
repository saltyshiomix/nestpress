import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
} from '@material-ui/core';
import { ElevationScroll } from '../ElevationScroll';
import { Link } from '../../../../Link';
import { useMediaQueryDesktop } from '../../../../../lib';

export const WithDesktop = () => {
  const desktop: boolean = useMediaQueryDesktop();

  if (!desktop) {
    return null;
  }

  return (
    <ElevationScroll>
      <AppBar
        style={{
          backgroundColor: 'lime',
          backgroundImage: 'linear-gradient(357.5deg, lime 8%, #000000 50%)',
        }}
      >
        <Toolbar>
          <Link href="/">
            <Typography
              variant="h6"
              style={{
                color: 'lime',
                background: 'linear-gradient(357.5deg, #000000 8%, lime 50%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              NESTPRESS
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  );
};
