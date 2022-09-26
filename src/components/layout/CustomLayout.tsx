import React, { FC, ReactNode } from 'react';
import * as SC from './CustomLayout.styled';
import Navigation from './fragments/Navigation';
import Footer from './fragments/Footer';

export interface CustomLayoutProps {
  children?: ReactNode;
}

const CustomLayout: FC<CustomLayoutProps> = props => {
  const { children } = props;
  return (
    <SC.Main>
      <Navigation />
      {children}
      <Footer />
    </SC.Main>
  );
};

export default CustomLayout;
