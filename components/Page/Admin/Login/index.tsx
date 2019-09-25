import { AdminLoginWithMobile } from './mobile';
import { AdminLoginWithTablet } from './tablet';
import { AdminLoginWithDesktop } from './desktop';

export const AdminLoginPageComponent = () => {
  return (
    <>
      <AdminLoginWithMobile />
      <AdminLoginWithTablet />
      <AdminLoginWithDesktop />
    </>
  );
};
