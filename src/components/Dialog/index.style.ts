import styled, {css} from 'styled-components';

import Grid from '../Grid/Grid';

export const Modal = styled(Grid)`
  padding: 45px 25px 25px;
  background: #fff;
  width: 75%;

  ${({theme: {up, breakpoints}}) => css`
    ${up(breakpoints.sm)} {
      width: 60%;
    }

    ${up(breakpoints.lg)} {
      width: 40%;
    }
  `
  }
`;

export const ButtonsWrapper = styled(Grid)`
  width: 100%;
  margin: 45px 0 0;

  & button {
    margin: 10px 5px;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

