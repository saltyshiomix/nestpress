import {
  AdminLoginWithMobile,
  AdminLoginWithTablet,
  AdminLoginWithDesktop,
} from './Responsive';

export const AdminLoginPageComponent = () => {
  return (
    <>
      <AdminLoginWithMobile />
      <AdminLoginWithTablet />
      <AdminLoginWithDesktop />
    </>
  );
};
