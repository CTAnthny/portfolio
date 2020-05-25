import React from 'react';

const Footer = (props, { children }) => (
  <Footer style={{ paddingTop: 10 }}>
    {children}
    ©
    {new Date().getFullYear()}
    {' '}
    <a href={props.github}>{props.author}</a>
  </Footer>
);

export default Footer;
