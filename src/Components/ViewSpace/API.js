import React from 'react';
import ReactMarkdown from 'react-markdown';

import {
  Grid,
  Button,
} from '@material-ui/core';
import TocIcon from '@material-ui/icons/Toc';

import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

const DefaultCodeRenderer = ReactMarkdown.renderers.code;

export class APIDocs extends React.Component {
  mdCode = props => <div className={this.props.classes.rMdCode}><DefaultCodeRenderer {...props} /></div>

  mdInlineCode = props => <code className={this.props.classes.rMdInlineCode}>{props.children}</code>

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
        <Grid item xs={11}>
          <ReactMarkdown
            source={content}
            renderers={{
              code: this.mdCode,
              inlineCode: this.mdInlineCode,
            }}
          />
        </Grid>
        <Grid item container xs={11} justify="flex-end" direction="row"><Grid item className={classes.docMenuBodyCont} ><Button size='small' onClick={e => toggleDrawer(e)} className={classes.docMenuBodyBttn}><TocIcon className={classes.docMenuIcon} />Strategizer Docs</Button></Grid></Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(APIDocs);
