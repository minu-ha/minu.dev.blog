import React, { FC, ReactNode } from 'react';
import * as SC from './PostList.styled';
import { HOME_IMAGES } from '../../models/HomeImage';

export interface PostListProps {
  children?: ReactNode;
}

const PostList: FC<PostListProps> = props => {
  const { children } = props;
  return (
    <SC.PostListStyled>
      {HOME_IMAGES.map(({ id, src }) => (
        <SC.Container key={id}>
          <SC.PostImage src={src} />
          <SC.PostContents>
            <SC.PostMeta>
              <SC.PostWriter>ADMIN</SC.PostWriter>
              <SC.PostDate>JAN. 30. 2021</SC.PostDate>
              <SC.PostComments>3 COMMENTS</SC.PostComments>
            </SC.PostMeta>
            <SC.PostTitle>Writing A Novel with A Heart</SC.PostTitle>
            <SC.PostSummary>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean.
            </SC.PostSummary>
          </SC.PostContents>
        </SC.Container>
      ))}
    </SC.PostListStyled>
  );
};

export default PostList;
