import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import { create } from 'jss';
import styled, { ThemeProvider } from 'styled-jss';
import CssBaseline from '@material-ui/core/CssBaseline';
import { StylesProvider, jssPreset } from '@material-ui/core/styles';

import Header from './header';
import Footer from './footer';
import globalStyles from '../styles/global';
import theme from '../styles/theme';

import '../styles/layout.css';
import 'typeface-poppins';

const jss = create({
  plugins: [...jssPreset().plugins, styled()],
});

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
        <StylesProvider jss={jss} injectFirst>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Header siteData={data.site.siteMetadata} />
            <main>{children}</main>
            <Footer siteData={data.site.siteMetadata} />
          </ThemeProvider>
        </StylesProvider>
      )}
    />
  );
}
