import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  /* @import url(//db.onlinewebfonts.com/c/37086b994764dba84b2ee0f1083bfeed?family=SB+Sans+Interface); */

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
