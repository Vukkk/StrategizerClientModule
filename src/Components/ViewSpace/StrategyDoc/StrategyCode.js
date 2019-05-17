import React from 'react';
import ReactMarkdown from 'react-markdown';
import brace from 'brace';
import AceEditor from 'react-ace';

import 'brace/mode/javascript';
import 'brace/theme/solarized_dark';

import {
  Card,
  Grid,
  FormGroup,
  TextField,
  Button,
} from '@material-ui/core';
import TocIcon from '@material-ui/icons/Toc';

import { withStyles } from '@material-ui/core/styles';
import styles from '../styles';

export class StrategyCodeComponent extends React.Component {
  constructor(props) {
    super(props);

    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.handleSaveInput = this.handleSaveInput.bind(this);
    this.onLoad = this.onLoad.bind(this);
    this.onChange = this.onChange.bind(this);

    this.state = {
      name: props.strategy.name,
      changed: false,
      value: props.strategy,
    };
  }

  componentDidUpdate(prevProps) {
  // Typical usage (don't forget to compare props):
    if (!prevProps.saved && this.props.saved) {
      this.setState = { changed: false };
    }
  }

  render() {
    const { classes, content, strategy, stratIndex, updatePoint, toggleDrawer } = this.props;
    return (
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="stretch"
        className={classes.strategyDocContainer}
      >
        <Grid item>
          <Card className={classes.formCard}>
            <Grid
              container
              direction="column"
              justify="flex-start"
              alignItems="stretch"
            >
              <Grid item>
                <AceEditor
                  placeholder="Placeholder Text"
                  mode="javascript"
                  theme="solarized_dark"
                  name="strategy editor"
                  onLoad={this.onLoad}
                  onChange={this.onChange}
                  fontSize={14}
                  showPrintMargin={true}
                  showGutter={true}
                  highlightActiveLine={true}
                  value={`function onLoad(editor) {
                  console.log("i've loaded");
                }`}
                  setOptions={{
                    enableBasicAutocompletion: false,
                    enableLiveAutocompletion: false,
                    enableSnippets: true,
                    showLineNumbers: true,
                    tabSize: 2,
                  }}
                />
              </Grid>
              <Grid item>
                <Grid
                  item
                  container
                  direction="row"
                  justify="flex-end"
                  alignItems="center"
                  className={classes.formBttnGroup}
                >
                  <Grid item>
                    <Button
                      size="small"
                      variant={this.state.changed ? 'contained' : 'outlined'}
                      aria-label="Save Strategy"
                      color="secondary"
                      onClick={this.handleSaveInput}
                    >
                      Save
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Card>
        </Grid>
        <Grid item container justify="flex-end" direction="row"><Grid item className={classes.docMenuBodyCont} ><Button size='small' onClick={e => toggleDrawer(e)} className={classes.docMenuBodyBttn}><TocIcon className={classes.docMenuIcon} />Strategizer Docs</Button></Grid></Grid>
        <Grid item>
          <ReactMarkdown source={content} />
        </Grid>
      </Grid>
    )
  }

  handleChangeInput(e) {
    e.preventDefault();
    e.persist();
    this.setState({[e.target.id]: e.target.value, changed: true })
  }

  handleSaveInput(e) {
    e.preventDefault();
    this.props.updatePoint(this.state.name, this.props.stratIndex,'updateStrategy', null, null, null, null, 'name')
    this.setState({changed: false })
    this.props.toggleEdit(e);
  }

  onLoad() {
    console.log("i've loaded");
  }

  onChange(newValue) {
    console.log('change', newValue);
    this.setState({
      value: newValue
    });
  }
}

export default withStyles(styles)(StrategyCodeComponent);
