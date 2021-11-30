import styled, {css} from 'styled-components';
import {Link} from 'react-router-dom';

import Grid from 'components/Grid/Grid';

export const CardWrapper = styled(Grid)`
  max-width: 300px;
  justify-content: center;
  padding: 10px;
  margin: 10px;
  background: #F0F0F0;
  border-radius: 5px;

  ${({theme: {up, breakpoints}}) => css`
    ${up(breakpoints.sm)} {
      width: calc(50% - 20px);
    }

    ${up(breakpoints.md)} {
      width: calc(33.3% - 20px);
      max-width: 350px;
    }
  `
  }
`;

export const CardHeader = styled(Grid)`
  padding: 0 10px 10px;
  
  & p {
    font-weight: 700;
  }
`;

export const ListWrapper = styled(Grid)`
  justify-content: center;
  ${({theme: {up, breakpoints}}) => css`
    ${up(breakpoints.md)} {
      justify-content: flex-start;
    }
  `
  }
`;

export const AddCardLink = styled(Link)`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  text-decoration: none;
  color: black;
  font-size: 25px;
`;