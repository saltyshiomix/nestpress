import {
  ReactElement,
  cloneElement,
} from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  useScrollTrigger,
} from '@material-ui/core';

interface ElevateAppBarProps {
  children: ReactElement;
}

const ElevationScroll = (props: ElevateAppBarProps) => {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });
  return cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

export const ElevateAppBar = () => {
  return (
    <ElevationScroll>
      <AppBar
        style={{
          backgroundColor: 'lime',
          backgroundImage: 'linear-gradient(350deg, lime 0%, #000000 68%)',
        }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            color="primary"
          >
            NESTPRESS
          </Typography>
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  );
};
