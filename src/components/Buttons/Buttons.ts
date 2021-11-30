import styled from 'styled-components';

const BaseButton = styled.button`
  min-width: 115px;
  min-height: 40px;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  text-transform: uppercase;
  
  &:hover {
    cursor: pointer;
  }
`;

const SuccessButton = styled(BaseButton)`
  background: #32CD32;
`;

const CancelButton = styled(SuccessButton)`
  background: #FF5733;
`;

const IconButton = styled(BaseButton)`
  min-width: unset;
  min-height: unset;
  color: black;
`;

export {
  BaseButton,
  SuccessButton,
  CancelButton,
  IconButton
};