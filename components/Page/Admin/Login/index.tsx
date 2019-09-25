import { AdminLoginWithMobile } from './mobile';
import { AdminLoginWithTablet } from './tablet';
import { AdminLoginWithDesktop } from './desktop';

export const AdminLogin = () => {
  return (
    <>
      <AdminLoginWithMobile />
      <AdminLoginWithTablet />
      <AdminLoginWithDesktop />
    </>
  );
};
