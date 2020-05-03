import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import "typeface-poppins";

import Header from './header';
import './layout.css';

const outerTheme = createMuiTheme({
  minHeight: '100vh',
  margin: 0,
	padding: 0,
	border: none,
	fontSize: 15,
	color: #a9a9a9,
	background: '#242425',
	letterSpacing: '0em',
	fontWeight: 400,
});

const innerTheme = createMuiTheme({
  margin: '0 auto',
  maxWidth: 960,
  padding: '0px 1.0875rem 1.45rem',
  paddingTop: 100,
});

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
    render={(data) => (
      <ThemeProvider theme={outerTheme}>
        <Header siteTitle={data.site.siteMetadata.title} />
        <ThemeProvider theme={innerTheme}>
          <main>{children}</main>
          <footer style={{ paddingTop: 10 }}>
            ©
            {' '}
            {new Date().getFullYear()}
            , Built with
            {' '}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </ThemeProvider>
      </ThemeProvider>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
