import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import 'typeface-poppins'; //

import Header from './header';
import Footer from './footer';
import theme from '../styles/theme';

import '../styles/layout.css';

export default function Layout({ children }) {
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
              description
              author
              github
            }
          }
        }
      `}
      render={(data) => (
        <>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Header siteData={data.site.siteMetadata} />
            <main>{children}</main>
            <Footer siteData={data.site.siteMetadata} />
          </ThemeProvider>
        </>
      )}
    />
  );
}
