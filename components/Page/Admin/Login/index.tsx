import useMediaQuery from '@material-ui/core/useMediaQuery';
import { AdminLoginWithMobile } from './mobile';
import { AdminLoginWithTablet } from './tablet';
import { AdminLoginWithDesktop } from './desktop';

export const AdminLogin = () => {
  const mobile: boolean = useMediaQuery('(max-width:480px)');
  const tablet: boolean = useMediaQuery('(min-width:481px) and (max-width: 839px)');
  const desktop: boolean = useMediaQuery('(min-width:840px)');

  if (mobile) {
    return <AdminLoginWithMobile />;
  }
  if (tablet) {
    return <AdminLoginWithTablet />;
  }
  if (desktop) {
    return <AdminLoginWithDesktop />;
  }
  return null;
};
