import React, { FC, ReactNode } from 'react';
import * as SC from './Footer.styled';
import { List, UnorderedList } from './Footer.styled';

export interface FooterProps {
  children?: ReactNode;
}

const Footer: FC<FooterProps> = props => {
  const { children } = props;
  return (
    <SC.FooterStyled>
      <SC.Line />
      <SC.FooterContents>
        <SC.FooterContent>
          <SC.Title>M I N U .</SC.Title>
          <SC.Description>
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia.
          </SC.Description>
        </SC.FooterContent>
        <SC.FooterContent>
          <SC.Title>EXPLORE</SC.Title>
          <SC.UnorderedList>
            <SC.List>about</SC.List>
            <SC.List>about2</SC.List>
            <SC.List>about3</SC.List>
          </SC.UnorderedList>
        </SC.FooterContent>
        <SC.FooterContent>
          <SC.Title>HAVE A QUESTIONS ?</SC.Title>
          <SC.UnorderedList>
            <SC.List>
              203 Fake St. Mountain View, San Francisco, California, USA
            </SC.List>
            <SC.List>+2 392 3929 210</SC.List>
            <SC.List>info@yourdomain.com</SC.List>
          </SC.UnorderedList>
        </SC.FooterContent>
      </SC.FooterContents>
      <SC.Copyright>
        Copyright © 2022 All rights reserved | This template is made with by
        Colorlib
      </SC.Copyright>
    </SC.FooterStyled>
  );
};

export default Footer;
