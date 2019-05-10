import React from 'react';
import ReactMarkdown from 'react-markdown';

import {
  Grid,
  Button,
} from '@material-ui/core';
import TocIcon from '@material-ui/icons/Toc';

import { withStyles } from '@material-ui/core/styles';
import styles from '../styles';

import ConditionListComp from './ConditionList';

const DefaultCodeRenderer = ReactMarkdown.renderers.code;

export class ConditionsDocComp extends React.Component {
  constructor(props) {
    super(props);

    this.handleChangeDoc = this.handleChangeDoc.bind(this);

    this.state = {
      doc: props.content,
      selected: 0,
    };
  }

  mdCode = props => <div className={this.props.classes.rMdCode}><DefaultCodeRenderer {...props} /></div>

  mdInlineCode = props => <code className={this.props.classes.rMdInlineCode}>{props.children}</code>

  render() {
    const { classes, content, strategy, stratIndex, pointIndex, phaseIndex, situation, situationIndex, updatePoint, setView, view, toggleDrawer } = this.props;
    return (
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="stretch"
        className={classes.strategyDocContainer}
      >
        <Grid item>
          <ConditionListComp
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
        <Grid item container justify="flex-end" direction="row"><Grid item className={classes.docMenuBodyCont} ><Button size='small' onClick={e => toggleDrawer(e)} className={classes.docMenuBodyBttn}><TocIcon className={classes.docMenuIcon} />Strategizer Docs</Button></Grid></Grid>
        <Grid item>
          <ReactMarkdown
            source={content}
            renderers={{
              code: this.mdCode,
              inlineCode: this.mdInlineCode,
            }}/>
        </Grid>
      </Grid>
    );
  }

  handleChangeDoc(e, doc, index) {
    e.preventDefault();
    this.setState({ doc: doc, selected: index });
  }
}

export default withStyles(styles)(ConditionsDocComp);
