import React from 'react';

const Footer = (props, { children }) => {
  const { author, github } = props;
  return (
    <Footer style={{ paddingTop: 10 }}>
      {children}
      ©
      {new Date().getFullYear()}
      {' '}
      <a href={github}>{author}</a>
    </Footer>
  );
};

export default Footer;
