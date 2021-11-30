import styled from 'styled-components';
import {ErrorMessage as Message} from 'formik';

import Grid from '../Grid/Grid';

export const InputWrapper = styled(Grid)`
  position: relative;
  width: 100%;
  padding: 0 0 30px;
`;

export const Input = styled.input`
  width: 100%;
  min-height: 35px;
  margin: 5px 0 0;
  padding: 0 10px;
  border: 1px solid #c3c3c3;
  border-radius: 5px;
  font-size: 16px;
`;

export const Select = styled.select`
  width: 100%;
  min-height: 35px;
  margin: 5px 0 0;
  padding: 0 10px;
  background: #fff;
  border: 1px solid #c3c3c3;
  border-radius: 5px;
  font-size: 16px;
  
  &:invalid {
    color: #666;
  }
  option {
    color: #000;
  }
  
`;

export const ErrorMessage = styled(Message)`
  position: absolute;
  bottom: 15px;
  padding: 0 10px;
  color: red;
  font-size: 12px;
`;

export const Label = styled.label`
  padding: 0 10px;
`;

export const RequiredMark = styled.span`
  color: #FF5733;
`;