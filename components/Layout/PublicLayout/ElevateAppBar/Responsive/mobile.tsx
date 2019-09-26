import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
} from '@material-ui/core';
import { ElevationScroll } from '../../../ElevationScroll';
import { Link } from '../../../../Link';
import { useMediaQueryMobile } from '../../../../../lib';

export const WithMobile = () => {
  const mobile: boolean = useMediaQueryMobile();

  if (!mobile) {
    return null;
  }

  return (
    <ElevationScroll>
      <AppBar
        style={{
          backgroundColor: 'lime',
          backgroundImage: 'linear-gradient(353deg, lime 8%, #000000 50%)',
        }}
      >
        <Toolbar>
          <Link href="/">
            <Typography
              variant="h6"
              style={{
                color: 'lime',
                background: 'linear-gradient(353deg, #000000 8%, lime 50%)',
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
