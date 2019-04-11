import React from 'react';
import ReactMarkdown from 'react-markdown';

import styles from './styles';
import { withStyles } from '@material-ui/core/styles';

import {
  Card,
  Grid,
  Typography,
  Link,
  Button
} from '@material-ui/core';
import TocIcon from '@material-ui/icons/Toc';

export class IntroductionOnly extends React.Component {
  render () {
    const { classes, content, setView, toggleDrawer } = this.props;
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
          <Typography variant="subtitle1">
            Learn more Superalgos algobot concepts:
          </Typography>
          <Typography variant="body1">
            • <Link color="secondary" variant="inherit" href='#algobot-types' onClick={e => setView(e, 'Types of Algobots')}>Types of Algobots</Link>
          </Typography>
          <Typography variant="body1">
            • <Link color="secondary" variant="inherit" href='#strategy-sources'  onClick={e => setView(e, 'Strategy Sources')}>Strategy Sources</Link>
          </Typography>
        </Grid>
        <Grid item container xs={11} justify="flex-end" direction="row"><Grid item className={classes.docMenuBodyCont} ><Button size='small' onClick={e => toggleDrawer(e)} className={classes.docMenuBodyBttn}><TocIcon className={classes.docMenuIcon} />Strategizer Docs</Button></Grid></Grid>
      </Grid>
    )
  }
}

export default withStyles(styles)(IntroductionOnly);
