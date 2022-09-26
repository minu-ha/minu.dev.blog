import React, { FC } from 'react';
import Link from 'next/link';
import Path from 'models/path';
import * as SC from './Navigation.styled';

const Navigation: FC = () => {
  return (
    <SC.NavigationStyled>
      <SC.Container>
        <SC.Home>
          <Link href={Path.INDEX}>M I N U .</Link>
        </SC.Home>
        <SC.Pages>
          <SC.Page>
            <Link href={Path.INDEX}>blog</Link>
          </SC.Page>
          <SC.Page>
            <Link href={Path.INDEX}>about</Link>
          </SC.Page>
          <SC.Page>
            <Link href={Path.INDEX}>contact</Link>
          </SC.Page>
        </SC.Pages>
      </SC.Container>
    </SC.NavigationStyled>
  );
};

export default Navigation;
