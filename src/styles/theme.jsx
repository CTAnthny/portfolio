import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import 'typeface-poppins';

export const colors = {
  green: '#5ac24e',
  lightGray: '#c9c9c9',
  darkGray: '#a9a9a9',
  blushBlack: '#242425',
}

let theme = createMuiTheme({
  typography: {
    fontFamily: 'Poppins, Arial',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 15,
  },
  palette: {
    primary: {
      main: colors.green,
    },
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [poppins]
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
