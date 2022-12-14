import styled from 'styled-components';

export const NavigationStyled = styled.nav`
  position: fixed;
  width: 100%;
  height: 100px;
  background-color: #f4bf2c;
  z-index: 100;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1400px;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  display: flex;

  a {
    text-decoration: none;
    color: #000;
  }
`;

export const Home = styled.div`
  width: 150px;
  height: 100%;
  font-size: 2rem;
  font-weight: 700;
  display: flex;
  align-items: center;
`;

export const Pages = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: end;
`;

export const Page = styled.li`
  margin-top: auto;
  margin-bottom: auto;
  padding-left: 50px;
  padding-right: 20px;
  font-size: 1rem;
  text-transform: uppercase;
`;
