import React from 'react';
import ReactMarkdown from 'react-markdown';

import styles from '../styles';
import { withStyles } from '@material-ui/core/styles';

import {
  Card,
  Grid
} from '@material-ui/core';

import PhaseFormName from './PhaseFormName';
import PhaseFormCode from './PhaseFormCode';
import PhaseView from './PhaseView';

import { PhaseCode } from '../docs';

export class PhaseDoc extends React.Component {
  constructor(props){
    super(props);

    this.toggleEdit = this.toggleEdit.bind(this)

    this.state={
      edit: false
    }
  }
  render () {
    const { classes, content, strategy, stratIndex, pointIndex, phaseIndex, phase, situation, situationIndex, updatePoint, view } = this.props;
    console.log('DocOnly:', this.props, this.state);

    let phaseContent = (view === 'Phase Code') ? PhaseCode : content;
    return (
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="stretch"
        className={classes.strategyDocContainer}
      >
        <Grid item>
          {!this.state.edit &&
            <PhaseView strategy={strategy} stratIndex={stratIndex} pointIndex={pointIndex} phase={phase} phaseIndex={phaseIndex} updatePoint={updatePoint} toggleEdit={this.toggleEdit} />
          }
          {this.state.edit === 'name' &&
            <PhaseFormName strategy={strategy} stratIndex={stratIndex} pointIndex={pointIndex} phase={phase} phaseIndex={phaseIndex} updatePoint={updatePoint} toggleEdit={this.toggleEdit} />
          }
          {this.state.edit === 'code' &&
            <PhaseFormCode strategy={strategy} stratIndex={stratIndex} pointIndex={pointIndex} phase={phase} phaseIndex={phaseIndex} updatePoint={updatePoint} toggleEdit={this.toggleEdit} />
          }
        </Grid>
        <Grid item>
          <ReactMarkdown source={phaseContent} />
        </Grid>
      </Grid>
    )
  }

  toggleEdit (e, view) {
    console.log('PhaseDoc toggleEdit', view);
    if (view === 'code'){
      this.props.setView(e, 'Phase Code');
    }
    this.setState(state => ({ edit: view }));
  }
}

export default withStyles(styles)(PhaseDoc);
