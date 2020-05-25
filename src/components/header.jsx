import React from 'react';
import { Helmet } from 'react-helmet';
// import { Link } from 'gatsby';
// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles(() => ({
//   root: {
//     display: 'flex',
//   },
// }));

const Header = (props, { children }) => (
  // const classes = useStyles();

  // <Helmet className={classes.root}>
  <Helmet style={{ display: 'flex' }}>
    <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
    <meta name="description" content={props.description} />
    <title>{props.title}</title>
    {children}
  </Helmet>
);

export default Header;
