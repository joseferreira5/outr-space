import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  :root {
    box-sizing: border-box;
    font-size: 16px;

    @media screen and (min-width: 320px) {
      font-size: calc(16px + 6 * ((100vw - 320px) / 680));
    }
    @media screen and (min-width: 1000px) {
      font-size: 22px;
    }
  }
  
  *,
  ::before,
  ::after {
    box-sizing: inherit;
  }

  body {
    background-color: ${props => props.theme.darkShade};
    font-family: "Roboto", sans-serif;
    color: #000000;
  }
`;

export default GlobalStyle;
