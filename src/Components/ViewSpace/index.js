import React from 'react';
import ReactMarkdown from 'react-markdown';

import styles from './styles';
import { withStyles } from '@material-ui/core/styles';

import {
  Paper,
  Grid
} from '@material-ui/core';

const input = '# This is a header\n\nAnd this is a paragraph';

export class ViewEdit extends React.Component {
  render () {
    const { classes } = this.props;
    return (
      <Grid
        container
        direction="column"
        justify="stretch"
        alignItems="center"
      >
        <Grid item>
          View Items
        </Grid>
        <Grid item>
          <ReactMarkdown source={input} />
        </Grid>
      </Grid>
    )
  }
}

export default withStyles(styles)(ViewEdit);
