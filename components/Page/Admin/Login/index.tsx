import React from 'react';
import {
  WithMobile,
  WithTablet,
  WithDesktop,
} from './Responsive';

export const AdminLoginPageComponent = () => {
  return (
    <React.Fragment>
      <WithMobile />
      <WithTablet />
      <WithDesktop />
    </React.Fragment>
  );
};
