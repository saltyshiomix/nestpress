import useMediaQuery from '@material-ui/core/useMediaQuery';
import { LoginWithMobile } from './mobile';
import { LoginWithTablet } from './tablet';
import { LoginWithDesktop } from './desktop';

const Login = () => {
  const mobile: boolean = useMediaQuery('(max-width:480px)');
  const tablet: boolean = useMediaQuery('(min-width:481px) and (max-width: 839px)');
  const desktop: boolean = useMediaQuery('(min-width:840px)');

  if (mobile) {
    return <LoginWithMobile />;
  }
  if (tablet) {
    return <LoginWithTablet />;
  }
  if (desktop) {
    return <LoginWithDesktop />;
  }
  return null;
};

export default Login;
