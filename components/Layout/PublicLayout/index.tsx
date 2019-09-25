import { ReactNode } from 'react';
import {
  CssBaseline,
  Toolbar,
  Container,
} from '@material-ui/core';
import { ElevateAppBar } from './ElevateAppBar';

interface LayoutProps {
  children?: ReactNode,
}

export const PublicLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <CssBaseline />
      <ElevateAppBar />
      <Toolbar />
      <Container>
        {children}
      </Container>
    </>
  );
};
