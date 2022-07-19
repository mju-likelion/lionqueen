import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      text: string;
      placeholder: string;
      primary: {
        black: string;
        skyblue: string;
        brown: string;
        yellow: string;
        orange: string;
        green: string;
        lightgreen: string;
        error: string;
      };
    };
  }
}
