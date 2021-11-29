import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    breakpoints: {
      [key: string]: number;
    };
    up: (breakpoint: number) => string;
    down: (breakpoint: number) => string;
  }
}