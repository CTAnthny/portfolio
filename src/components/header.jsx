import PropTypes from 'prop-types';
import React from 'react';

import { Link } from 'gatsby';

import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
    </div>
  );
};

export default Header;
