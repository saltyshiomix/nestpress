import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  useMediaQuery,
} from '@material-ui/core';
import { ElevationScroll } from '../ElevationScroll';
import { Link } from '../../../../Link';

export const WithTablet = () => {
  const tablet: boolean = useMediaQuery('(min-width:481px) and (max-width: 839px)');

  if (!tablet) {
    return null;
  }

  return (
    <ElevationScroll>
      <AppBar
        style={{
          backgroundColor: 'lime',
          backgroundImage: 'linear-gradient(355deg, lime 8%, #000000 54%)',
        }}
      >
        <Toolbar>
          <Link href="/">
            <Typography
              variant="h6"
              style={{
                color: 'lime',
                background: 'linear-gradient(355deg, #000000 8%, lime 54%)',
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
