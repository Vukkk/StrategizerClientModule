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
        <ManageList />
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Manage);
