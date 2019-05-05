import React from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

import {
  Grid,
  Button,
} from '@material-ui/core';
import TocIcon from '@material-ui/icons/Toc';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

export class IntroductionOnly extends React.Component {
  mdLink = props => <Link to={props.href} className={this.props.classes.rMdLink}>{props.children}</Link>

  render() {
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
        <Grid item xs={11} className={classes.rMd}>
          <ReactMarkdown source={content} renderers={{ link: this.mdLink }}/>
        </Grid>
        <Grid item container xs={11} justify="flex-end" direction="row"><Grid item className={classes.docMenuBodyCont} ><Button size='small' onClick={e => toggleDrawer(e)} className={classes.docMenuBodyBttn}><TocIcon className={classes.docMenuIcon} />Strategizer Docs</Button></Grid></Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(IntroductionOnly);
