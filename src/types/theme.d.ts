import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      bg: string,
      bgLight: string,
      bgHoverButton: string,
      primary: string,
      secondary: string
      text: string
    }
  }
}