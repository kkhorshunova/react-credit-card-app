import styled from 'styled-components';
import Grid from '../Grid/Grid';

export const CardContainer = styled(Grid)`
  width: 300px;
  min-height: 180px;
  background: linear-gradient(to top right, #3399ff 0%, #99ccff 100%);
  border-radius: 10px;

  &:hover {
    cursor: pointer;
  }
`;

export const CardContent = styled.div`
  padding: 15px 25px;
`;

export const CardName = styled.p`
  max-width: 70%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-transform: uppercase;
`;

export const CardNumberWrapper = styled.div`
  margin: 20px 0 10px;
`;

export const CardTypeWrapper = styled(Grid)`
  height: 44px;
`;

export const MagnetLine = styled.div`
  height: 40px;
  margin: 25px 0;
  background: black;
`;

export const CVV = styled.span`
  padding: 0 5px;
  font-size: 18px;
`;