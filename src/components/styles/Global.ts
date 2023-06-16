import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

  * {
    box-sizing: border-box;
  }

  body {
    background: #f4f4ff;
    color: #212830;
    font-family: 'SB Sans Interface', sans-serif;
    font-size: 20px;
    font-weight: 400;
    line-height: 20px;
}
`;

export default GlobalStyles;