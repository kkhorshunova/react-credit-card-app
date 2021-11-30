import styled, {css} from 'styled-components';

export const MainContainer = styled.div`
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