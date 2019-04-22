import React from 'react';
import ReactMarkdown from 'react-markdown';

import styles from './styles';
import { withStyles } from '@material-ui/core/styles';

import {
  Card,
  Grid,
  Button
} from '@material-ui/core';
import TocIcon from '@material-ui/icons/Toc';

export class DocOnly extends React.Component {
  render () {
    const { classes, content, toggleDrawer } = this.props;
    return (
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="stretch"
        className={classes.DocOnlyCont}
      >
        <Grid item container xs={11} justify="flex-end" direction="row"><Grid item className={classes.docMenuBodyCont} ><Button size='small' onClick={e => toggleDrawer(e)} className={classes.docMenuBodyBttn}><TocIcon className={classes.docMenuIcon} />Strategizer Docs</Button></Grid></Grid>
        <Grid item xs={11}>
          <ReactMarkdown source={content} />
        </Grid>
      </Grid>
    )
  }
}

export default withStyles(styles)(DocOnly);
