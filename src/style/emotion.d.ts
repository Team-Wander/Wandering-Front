import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    color: {
      main: string;
      black: string;
      white: string;
      gray: {
        900: string;
        800: string;
        700: string;
        600: string;
        500: string;
        400: string;
        300: string;
        200: string;
        100: string;
      };
      system: string;
    };
    fontStyle: {
      h1: {
        fontSize: string;
        lineHeight: string;
      };
      h2: {
        fontSize: string;
        lineHeight: string;
      };
      h3: {
        fontSize: string;
        lineHeight: string;
      };
      h4: {
        fontSize: string;
        lineHeight: string;
      };
      m1: {
        fontSize: string;
        lineHeight: string;
      };
      m2: {
        fontSize: string;
        lineHeight: string;
      };
      m3: {
        fontSize: string;
        lineHeight: string;
      };
      label: {
        fontSize: string;
        lineHeight: string;
      };
    };
  }
}
