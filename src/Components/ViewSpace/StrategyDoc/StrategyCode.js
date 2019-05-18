import React from 'react';
import ReactMarkdown from 'react-markdown';
import brace from 'brace';
import AceEditor from 'react-ace';

import 'brace/mode/javascript';
import 'brace/theme/xcode';

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
                  theme="xcode"
                  name="strategy_editor"
                  onLoad={this.onLoad}
                  onChange={this.onChange}
                  fontSize={14}
                  width='100%'
                  showPrintMargin={true}
                  showGutter={true}
                  highlightActiveLine={true}
                  value={`${JSON.stringify(this.state.value, null, 2)}`}
                  cursorStart={1}
                  editorProps={{ $blockScrolling: Infinity }}
                  setOptions={{
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

  handleSaveInput() {
    this.props.updatePoint(this.state.value, null, 'updateStrategy', this.props.stratIndex, null, null, null, null);
    this.setState({ changed: false });
  }

  onLoad(editor) {
    editor.gotoLine(1);
  }

  onChange(newValue) {
    this.setState({
      value: JSON.parse(newValue),
      changed: true,
    });
  }
}

export default withStyles(styles)(StrategyCodeComponent);
