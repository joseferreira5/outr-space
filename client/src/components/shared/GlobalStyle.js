import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  :root {
    box-sizing: border-box;
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
