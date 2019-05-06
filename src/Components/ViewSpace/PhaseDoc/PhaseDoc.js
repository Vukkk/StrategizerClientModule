import React from 'react';
import ReactMarkdown from 'react-markdown';

import {
  Card,
  Grid,
  Button
} from '@material-ui/core';
import TocIcon from '@material-ui/icons/Toc';

import { withStyles } from '@material-ui/core/styles';
import styles from '../styles';

import PhaseFormName from './PhaseFormName';
import PhaseFormCode from './PhaseFormCode';
import PhaseView from './PhaseView';

import { PhaseApi } from '../docs';

const DefaultCodeRenderer = ReactMarkdown.renderers.code;

export class PhaseDocComp extends React.Component {
  constructor(props) {
    super(props);

    this.toggleEdit = this.toggleEdit.bind(this)

    this.state = {
      edit: false,
    };
  }

  mdCode = props => <div className={this.props.classes.rMdCode}><DefaultCodeRenderer {...props} /></div>

  mdInlineCode = props => <code className={this.props.classes.rMdInlineCode}>{props.children}</code>

  render() {
    const { classes, content, strategy, stratIndex, pointIndex, phaseIndex, phase, updatePoint, view, toggleDrawer } = this.props;

    const phaseContent = (view === 'Phase Code') ? PhaseApi : content;
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
        <Grid item container justify="flex-end" direction="row"><Grid item className={classes.docMenuBodyCont} ><Button size='small' onClick={e => toggleDrawer(e)} className={classes.docMenuBodyBttn}><TocIcon className={classes.docMenuIcon} />Strategizer Docs</Button></Grid></Grid>
        <Grid item>
          <ReactMarkdown
              source={phaseContent}
              renderers={{
                code: this.mdCode,
                inlineCode: this.mdInlineCode,
              }}
            />
        </Grid>
      </Grid>
    );
  }

  toggleEdit(e, view) {
    if (view === 'code') {
      this.props.setView(e, 'Phase Code');
    }
    this.setState(state => ({ edit: view }));
  }
}

export default withStyles(styles)(PhaseDocComp);
