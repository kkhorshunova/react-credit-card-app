import styled, {css} from 'styled-components';

import Grid from '../Grid/Grid';
import {BaseButton} from '../Buttons/Buttons';

export const FiltersBarWrapper = styled(Grid)`
  margin: 0 0 20px;
  padding: 10px;
  background: #F0F0F0;
  border-radius: 5px;
  flex-direction: column;
  align-items: center;

  ${({theme: {up, breakpoints}}) => css`
    ${up(breakpoints.sm)} {
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-end;
      flex-wrap: nowrap;
    }

    ${up(breakpoints.md)} {
      justify-content: flex-start;
    }
  `
  }
`;

export const FilterItem = styled(Grid)`
  width: 100%;
  max-width: 250px;
  margin: 0 15px 20px 0;

  ${({theme: {up, breakpoints}}) => css`
    ${up(breakpoints.sm)} {
      width: auto;
      margin: 0 10px 10px;
    }
  `
  }
`;

export const ExpirationDateFilter = styled(BaseButton)`
  width: 100%;
  min-height: 35px;
  margin: 5px 0 0;
  padding: 0 25px;
  color: #000;
  background: #fff;
  border: 1px solid #c3c3c3;

  & svg {
    position: absolute;
    margin: 0 10px 0 5px;
  }
`;
