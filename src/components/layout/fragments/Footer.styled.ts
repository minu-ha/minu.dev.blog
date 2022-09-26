import styled from 'styled-components';

export const FooterStyled = styled.div`
  width: 100%;
  height: 500px;
`;

export const Line = styled.div`
  width: 100%;
  height: 50px;
  margin-top: 50px;
  background-color: #f4bf2c;
`;

export const FooterContents = styled.ul`
  display: flex;
  justify-content: space-around;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  max-width: 1400px;
  height: 400px;
`;
export const FooterContent = styled.li`
  width: 100%;
  padding-top: 50px;
`;

export const Title = styled.h2`
  width: 100%;
  font-weight: 700;
  font-size: 2rem;
`;

export const Description = styled.p`
  width: 70%;
  font-weight: 300;
  font-size: 1rem;
  padding-top: 40px;
`;

export const Copyright = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
  font-weight: 300;
  color: gray;
  background-color: #d5d5d5;
`;

export const UnorderedList = styled.ul`
  width: 100%;
  padding-top: 30px;
`;

export const List = styled.li`
  width: 100%;
  font-weight: 300;
  font-size: 1rem;
  line-height: 40px;
`;
