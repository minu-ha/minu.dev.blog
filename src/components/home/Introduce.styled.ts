import styled from 'styled-components';

export const IntroduceStyled = styled.section`
  width: 100%;
  height: 750px;
  display: flex;
  justify-content: end;
`;

export const Container = styled.div`
  width: 60%;
`;

export const SubHeading = styled.span`
  position: relative;
  top: 140px;
  left: 20px;
  letter-spacing: 3px;
  font-size: 15px;

  ::after {
    position: absolute;
    bottom: -2px;
    right: 2px;
    content: '';
    width: 50px;
    height: 1px;
    background: #111111;
  }
`;

export const Heading = styled.h1`
  position: relative;
  top: 150px;
  width: 100%;
  color: #444444;
  font-weight: 700;
  font-size: 14vw;
  line-height: 1.2;
`;

export const InnerHeading = styled.span`
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: black;
`;

export const DotHeading = styled.span`
  color: #f4bf2c;
`;

export const Descriptions = styled.div`
  position: relative;
  top: 150px;
  width: 100%;
  display: flex;
  justify-content: center;
  font-weight: 100;
`;

export const SelfIntro = styled.h2`
  color: #444444;
  font-size: 1.5vw;
`;
