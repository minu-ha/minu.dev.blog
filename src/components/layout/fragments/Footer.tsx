import React, { FC, ReactNode } from 'react';

export interface FooterProps {
  children?: ReactNode;
}

const Footer: FC<FooterProps> = props => {
  const { children } = props;
  return <div />;
};

export default Footer;
