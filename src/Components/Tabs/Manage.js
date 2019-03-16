import React from 'react';
import { Typography } from '@material-ui/core';

import { withStyles } from '@material-ui/core/styles';
import styles from '../styles';

import ManageList from '../Manage';

class Manage extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <Typography
          className={classes.title}
          variant='h4'
          align='center'
          color='textPrimary'
          gutterBottom
        >
        Your Strategies
        </Typography>
        <ManageList />
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Manage);
