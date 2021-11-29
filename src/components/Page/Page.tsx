import React from 'react';
import styled, {css} from 'styled-components';

const MainContainer = styled.div`
  margin: 0 auto;
  padding: 10px;
  
  h1 {
    margin: 15px 0 45px;
    text-align: center;
  }

  ${({theme: {up, breakpoints}}) => css`
    ${up(breakpoints.sm)} {
      max-width: 750px;
    }

    ${up(breakpoints.md)} {
      max-width: 1024px;
    }
  `
}
`;

interface PageProps {
  title: string;
  children: React.ReactNode;
}

const Page = ({title, children}: PageProps) =>
  <MainContainer>
    <h1>{title}</h1>
    {children}
  </MainContainer>

export default Page;