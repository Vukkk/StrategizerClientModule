import React from 'react';
import ReactMarkdown from 'react-markdown';

import styles from '../styles';
import { withStyles } from '@material-ui/core/styles';

import {
  Grid,
  Button
} from '@material-ui/core';
import TocIcon from '@material-ui/icons/Toc';

import SituationForm from './SituationForm';
import SituationView from './SituationView';

export class StrategyDoc extends React.Component {
  constructor(props){
    super(props);

    this.toggleEdit = this.toggleEdit.bind(this)

    this.state={
      edit: false
    }
  }
  render () {
    const { classes, content, strategy, stratIndex, pointIndex, phaseIndex, situation, situationIndex, updatePoint, toggleDrawer } = this.props;
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
            <SituationView strategy={strategy} stratIndex={stratIndex} pointIndex={pointIndex} phaseIndex={phaseIndex} situation={situation} situationIndex={situationIndex} updatePoint={updatePoint} toggleEdit={this.toggleEdit} />
            :
            <SituationForm strategy={strategy} stratIndex={stratIndex} pointIndex={pointIndex} phaseIndex={phaseIndex} situation={situation} situationIndex={situationIndex} updatePoint={updatePoint} toggleEdit={this.toggleEdit} />}
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

export default withStyles(styles)(StrategyDoc);
