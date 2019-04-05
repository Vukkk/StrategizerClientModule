import React from 'react';
import ReactMarkdown from 'react-markdown';

import styles from './styles';
import { withStyles } from '@material-ui/core/styles';

import {
  Paper,
  Grid
} from '@material-ui/core';

import ViewRoutes from './ViewRoutes';

export class ViewSpace extends React.Component {
  render () {
    const { classes, view, ...other } = this.props;
    return (
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="stretch"
      >
        <ViewRoutes view={view} {...other} />
      </Grid>
    )
  }
}

export default withStyles(styles)(ViewSpace);
