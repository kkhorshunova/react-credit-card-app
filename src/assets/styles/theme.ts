import {DefaultTheme} from 'styled-components';

const breakpoints = {
  xs: 576,
  sm: 768,
  md: 992,
  lg: 1200,
};

const theme: DefaultTheme = {
  breakpoints,
  up: breakpoint => {
    const upBreakpoint = breakpoint + 0.02
    return `@media (min-width: ${upBreakpoint}px)`
  },
  down: breakpoint => `@media (max-width: ${breakpoint}px)`,
}

export default theme;
