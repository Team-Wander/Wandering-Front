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
        semi:{
          fontSize: string;
          fontWeight: string,
          lineHeight: string;
        },
        reg:{
          fontSize: string;
          fontWeight: string,
          lineHeight: string;
        }
      };
      h2: {
        semi:{
          fontSize: string;
          fontWeight: string,
          lineHeight: string;
        },
        reg:{
          fontSize: string;
          fontWeight: string,
          lineHeight: string;
        }
      };
      h3: {
        semi:{
          fontSize: string;
          fontWeight: string,
          lineHeight: string;
        },
        reg:{
          fontSize: string;
          fontWeight: string,
          lineHeight: string;
        }
      };
      h4: {
        semi:{
          fontSize: string;
          fontWeight: string,
          lineHeight: string;
        },
        reg:{
          fontSize: string;
          fontWeight: string,
          lineHeight: string;
        }
      };
      m1: {
        semi:{
          fontSize: string;
          fontWeight: string,
          lineHeight: string;
        },
        reg:{
          fontSize: string;
          fontWeight: string,
          lineHeight: string;
        }
      };
      m2: {
        semi:{
          fontSize: string;
          fontWeight: string,
          lineHeight: string;
        },
        reg:{
          fontSize: string;
          fontWeight: string,
          lineHeight: string;
        }
      };
      m3: {
        semi:{
          fontSize: string;
          fontWeight: string,
          lineHeight: string;
        },
        reg:{
          fontSize: string;
          fontWeight: string,
          lineHeight: string;
        }
      };
      label: {
        semi:{
          fontSize: string;
          fontWeight: string,
          lineHeight: string;
        },
        reg:{
          fontSize: string;
          fontWeight: string,
          lineHeight: string;
        }
      };
    };
  }
}
