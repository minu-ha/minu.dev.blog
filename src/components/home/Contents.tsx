import React, { FC } from 'react';
import Introduce from 'components/home/Introduce';
import PostList from 'components/home/PostList';
import * as SC from './Contents.styled';

const Contents: FC = () => {
  return (
    <SC.ContentsStyled>
      <Introduce />
      <PostList />
    </SC.ContentsStyled>
  );
};

export default Contents;
