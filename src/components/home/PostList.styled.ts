import styled from 'styled-components';

export const PostListStyled = styled.ul`
  width: 100%;
`;

export const Container = styled.li`
  display: flex;
  width: 100%;
`;

export const PostImage = styled.img`
  width: 60%;
  height: 1000px;
  object-fit: cover;
  background-color: #fff;
`;

export const PostContents = styled.div`
  width: 40%;
`;

export const PostMeta = styled.p`
  width: 100%;
  display: flex;
  padding-top: 100px;
  padding-left: 50px;
  color: gray;
`;

export const PostWriter = styled.span`
  padding-right: 50px;
`;
export const PostDate = styled.span`
  padding-right: 50px;
`;
export const PostComments = styled.span`
  padding-right: 50px;
`;
export const PostTitle = styled.h2`
  padding-left: 50px;
  padding-top: 30px;
  font-size: 4vw;
  font-weight: 300;
  line-height: 1.1;
  text-decoration-color: #f4bf2c;
  text-decoration: underline;
`;
export const PostSummary = styled.p`
  padding-top: 30px;
  padding-left: 50px;
  color: gray;
`;
