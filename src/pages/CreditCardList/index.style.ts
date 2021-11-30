import styled, {css} from 'styled-components';
import {Link} from 'react-router-dom';

import Grid from 'components/Grid/Grid';
import {BaseButton} from '../../components/Buttons/Buttons';

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

export const FiltersBarWrapper = styled(Grid)`
  margin: 0 0 20px;
  padding: 10px; 
  background: #F0F0F0;
  border-radius: 5px;
  flex-direction: column;
  align-items: center;
  
  & > div {
    width: 100%;
    max-width: 250px;
    margin: 0 15px 20px 0;
  }

  ${({theme: {up, breakpoints}}) => css`
    ${up(breakpoints.sm)} {
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-end;

      & > div {
        width: auto;
        margin: 0 15px 10px 0;
      }
    }

    ${up(breakpoints.md)} {
      justify-content: flex-start;
    }
  `
  }
`;

export const ExpirationDateFilter = styled(BaseButton)`
  width: 100%;
  min-height: 35px;
  padding: 0 25px;
  color: #000;
  background: #fff;
  border: 1px solid #c3c3c3;
  
  & svg {
    position: absolute;
    margin: 0 10px 0 5px;
  }
`;
