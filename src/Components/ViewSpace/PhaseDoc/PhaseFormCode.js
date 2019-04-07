import React from 'react';
import ReactMarkdown from 'react-markdown';

import styles from '../styles';
import { withStyles } from '@material-ui/core/styles';

import {
  Card,
  Grid,
  FormGroup,
  TextField,
  Button
} from '@material-ui/core';

import { slugify } from '../../../utils';

export class PhaseFormCode extends React.Component {
  constructor(props){
    super(props);

    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.handleSaveInput = this.handleSaveInput.bind(this);

    this.state={
      code: props.phase.code,
      changed: false
    }
  }
  componentDidUpdate(prevProps) {
  // Typical usage (don't forget to compare props):
    if (!prevProps.saved && this.props.saved) {
      this.setState = { changed: false }
    }
  }
  render () {
    const { classes, content, strategy, stratIndex, pointIndex, phase, phaseIndex, updatePoint, toggleEdit } = this.props;
    console.log('PhaseFormCode:', this.props);
    return (
      <Card className={classes.formCard}>
        <Grid
          container
          direction="column"
          justify="flex-start"
          alignItems="stretch"
        >
          <Grid item>
            <FormGroup className={classes.formCont} >
              <TextField
                id='code'
                label="Update PhaseCode"
                value={this.state.code}
                onChange={this.handleChangeInput}
                margin="normal"
                variant="outlined"
                multiline
                rows="4"
                rowsMax="4"
              />
            </FormGroup>
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
                <Button size="small"  aria-label="Cancel Edit Phase Code" onClick={e => toggleEdit(false)}>
                  Cancel
                </Button>
              </Grid>
              <Grid item>
                <Button
                  size="small"
                  variant={this.state.changed ? "contained" : "outlined"}
                  aria-label="Save Phase Code"
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
    )
  }
  handleChangeInput(e) {
    e.preventDefault();
    e.persist();
    this.setState({[e.target.id]: e.target.value, changed: true })
  }
  handleSaveInput(e) {
    e.preventDefault();
    this.props.updatePoint(this.state.code, this.props.pointIndex,'updatePhase', this.props.stratIndex, this.props.phaseIndex, null, null, 'code')
    this.setState({changed: false })
    this.props.toggleEdit(e);
  }
}

export default withStyles(styles)(PhaseFormCode);
