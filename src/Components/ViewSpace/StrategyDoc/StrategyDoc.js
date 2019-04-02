import React from 'react';
import ReactMarkdown from 'react-markdown';

import styles from '../styles';
import { withStyles } from '@material-ui/core/styles';

import {
  Grid
} from '@material-ui/core';

import StrategyForm from './StrategyForm';
import StrategyView from './StrategyView';

export class StrategyDoc extends React.Component {
  constructor(props){
    super(props);

    this.toggleEdit = this.toggleEdit.bind(this)

    this.state={
      edit: false
    }
  }
  render () {
    const { classes, content, strategy, stratIndex, updatePoint } = this.props;
    console.log('DocOnly:', this.props, this.state);
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
            <StrategyView strategy={strategy} toggleEdit={this.toggleEdit} />
            :
            <StrategyForm strategy={strategy} stratIndex={stratIndex} updatePoint={updatePoint} toggleEdit={this.toggleEdit} />}
        </Grid>
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
