import {
  WithMobile,
  WithTablet,
  WithDesktop,
} from './Responsive';

export const AdminLoginPageComponent = () => {
  return (
    <>
      <WithMobile />
      <WithTablet />
      <WithDesktop />
    </>
  );
};
