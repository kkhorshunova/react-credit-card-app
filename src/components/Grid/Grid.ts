import styled, {css} from 'styled-components';

interface GridProps {
  align?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
  justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around';
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  wrap?: 'wrap' | 'nowrap';
}

const Grid = styled.div<GridProps>`
  display: flex;
  width: 100%;
  ${props => css`
    align-items: ${props.align || 'stretch'};
    justify-content: ${props.justify || 'flex-start'};
    flex-direction: ${props.direction || 'row'};
    flex-wrap: ${props.wrap || 'wrap'};;
  `}
`;

export default Grid;