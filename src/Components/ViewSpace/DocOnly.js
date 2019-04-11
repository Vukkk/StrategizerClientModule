import React from 'react';
import ReactMarkdown from 'react-markdown';

import styles from './styles';
import { withStyles } from '@material-ui/core/styles';

import {
  Card,
  Grid
} from '@material-ui/core';

export class DocOnly extends React.Component {
  render () {
    const { classes, content } = this.props;
    return (
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="stretch"
        className={classes.DocOnlyCont}
      >
        <Grid item xs={11}>
          <ReactMarkdown source={content} />
        </Grid>
      </Grid>
    )
  }
}

export default withStyles(styles)(DocOnly);
