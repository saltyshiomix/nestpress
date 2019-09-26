import useMediaQuery from '@material-ui/core/useMediaQuery';

export const useMediaQueryMobile = () => useMediaQuery('(max-width:480px)');

export const useMediaQueryTablet = () => useMediaQuery('(min-width:481px) and (max-width: 839px)');

export const useMediaQueryDesktop = () => useMediaQuery('(min-width:840px)');
