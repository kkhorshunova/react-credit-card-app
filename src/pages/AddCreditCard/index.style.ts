import styled, {css} from 'styled-components';
import {Form} from 'formik';
import Grid from 'components/Grid/Grid';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 450px;
  margin: 0 auto;
`;

export const HalfWidthInputWrapper = styled.div`
  width: 100%;

  ${({theme: {up, breakpoints}}) => css`
    ${up(breakpoints.sm)} {
      width: calc(50% - 10px);
    }
  `
}
`;

export const ButtonContainer = styled(Grid)`
  margin: 20px 0;

  & button {
    margin: 0 10px;
  }
`