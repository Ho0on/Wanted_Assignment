import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
console.log(reset);
const GlobalStyle = createGlobalStyle`
  ${reset}
	font-family: sans-serif;
`;

export default GlobalStyle;
