/* eslint-disable import/prefer-default-export, react/jsx-filename-extension, import/extensions */
/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import React from 'react';
import Layout from './src/components/layout.jsx';

require('typeface-poppins');

export const wrapRootElement = ({ element }) => <Layout>{element}</Layout>;
