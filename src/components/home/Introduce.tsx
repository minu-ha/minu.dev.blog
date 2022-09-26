import React, { FC, ReactNode } from 'react';
import * as SC from './Introduce.styled';

export interface IntroduceProps {
  children?: ReactNode;
}

const Introduce: FC<IntroduceProps> = props => {
  const { children } = props;
  return (
    <SC.IntroduceStyled>
      <SC.Container>
        <SC.SubHeading>A PERSONAL BLOG</SC.SubHeading>
        <SC.Heading>
          M<SC.InnerHeading>in</SC.InnerHeading>u
          <SC.DotHeading>.</SC.DotHeading>
        </SC.Heading>
        <SC.Descriptions>
          <SC.SelfIntro>
            I am a Blogger & PhotoGrapher <br /> Based in us
          </SC.SelfIntro>
        </SC.Descriptions>
      </SC.Container>
    </SC.IntroduceStyled>
  );
};

export default Introduce;
