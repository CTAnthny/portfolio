import { createGlobalStyle } from 'styled-components'
import PreloaderStyles from './preloaderStyles.jsx'
import theme, { colors } from './theme.jsx'

const GlobalStyles = createGlobalStyle`
html {
	margin-right: 0!important;
	height: 100%;
}

body {
	margin: 0;
	padding: 0;
	height: 100%;
	border: none;
	font-family: ${theme.typography.fontFamily};
	font-size: ${theme.typography.fontSize};
	color: ${colors.darkGray};
	background: ${colors.blushBlack};
	letter-spacing: 0em;
	font-weight: ${theme.typography.fontWeight};
	-webkit-font-smoothing: antialiased;
	-webkit-text-size-adjust: 100%;
}

.container {
	margin: 0;
	position: relative;
	width: 100%;
	height: 100%;
	transition: all 0.4s ease 0s;
	-moz-transition: all 0.4s ease 0s;
	-webkit-transition: all 0.4s ease 0s;
	-o-transition: all 0.4s ease 0s;
}

h1, h2, h3, h4, h5, h6 {
  color: white;
  font-weight: 700;
}

p {
  line-height: 1.7;
}

a {
	color: ${colors.darkGray};
	text-decoration: none;
	opacity: 1;
	outline: none;
}

a:hover {
	text-decoration: none;
	color: ${colors.green};
}

${PreloaderStyles};
`
export default GlobalStyles;
