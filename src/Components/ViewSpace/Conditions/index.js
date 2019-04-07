import React from 'react';
import ReactMarkdown from 'react-markdown';

import styles from '../styles';
import { withStyles } from '@material-ui/core/styles';

import {
  Grid
} from '@material-ui/core';

import ConditionList from './ConditionList';

export class StrategyDoc extends React.Component {
  constructor(props){
    super(props);

    this.handleChangeDoc = this.handleChangeDoc.bind(this);

    this.state={
      doc: props.content,
      selected: 0
    }
  }
  render () {
    const { classes, content, strategy, stratIndex, pointIndex, phaseIndex, situation, situationIndex, updatePoint, setView, view } = this.props;
    return (
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="stretch"
        className={classes.strategyDocContainer}
      >
        <Grid item>
          <ConditionList
            strategy={strategy}
            stratIndex={stratIndex}
            pointIndex={pointIndex}
            phaseIndex={phaseIndex}
            situation={situation}
            situationIndex={situationIndex}
            updatePoint={updatePoint}
            toggleEdit={this.toggleEdit}
            setView={setView}
            view={view}
            handleChangeDoc={this.handleChangeDoc}
            selected={this.state.selected}
          />
        </Grid>
        <Grid item>
          <ReactMarkdown source={content} />
        </Grid>
      </Grid>
    )
  }

  handleChangeDoc(e, doc, index) {
    e.preventDefault();
    this.setState({ doc: doc, selected: index })
  }
}

export default withStyles(styles)(StrategyDoc);
