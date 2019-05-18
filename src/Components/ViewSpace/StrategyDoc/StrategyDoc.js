import React from 'react';
import ReactMarkdown from 'react-markdown';

import styles from '../styles';
import { withStyles } from '@material-ui/core/styles';

import {
  Grid,
  Button
} from '@material-ui/core';
import TocIcon from '@material-ui/icons/Toc';

import StrategyForm from './StrategyForm';
import StrategyView from './StrategyView';

export class StrategyDocComponent extends React.Component {
  constructor(props){
    super(props);

    this.toggleEdit = this.toggleEdit.bind(this)

    this.state={
      edit: false
    }
  }
  render () {
    const { classes, content, strategy, stratIndex, toggleDrawer, updatePoint } = this.props;
    return (
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="stretch"
        className={classes.strategyDocContainer}
      >
        <Grid item>
          {!this.state.edit ?
            <StrategyView strategy={strategy} stratIndex={stratIndex} updatePoint={updatePoint} toggleEdit={this.toggleEdit} />
            :
            <StrategyForm strategy={strategy} stratIndex={stratIndex} updatePoint={updatePoint} toggleEdit={this.toggleEdit} />}
        </Grid>
        <Grid item container justify="flex-end" direction="row"><Grid item className={classes.docMenuBodyCont} ><Button size='small' onClick={e => toggleDrawer(e)} className={classes.docMenuBodyBttn}><TocIcon className={classes.docMenuIcon} />Strategizer Docs</Button></Grid></Grid>
        <Grid item>
          <ReactMarkdown source={content} />
        </Grid>
      </Grid>
    )
  }

  toggleEdit () {
    this.setState(state => ({ edit: !state.edit }));
  }
}

export default withStyles(styles)(StrategyDocComponent);
