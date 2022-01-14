import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
console.log(reset);
const GlobalStyle = createGlobalStyle`
  ${reset}

	//전역스타일
	
`;

export default GlobalStyle;
