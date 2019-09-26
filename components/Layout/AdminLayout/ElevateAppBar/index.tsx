import React from 'react';
import {
  WithMobile,
  WithTablet,
  WithDesktop,
} from './Responsive';

export const ElevateAppBar = () => {
  return (
    <React.Fragment>
      <WithMobile />
      <WithTablet />
      <WithDesktop />
    </React.Fragment>
  );
};
