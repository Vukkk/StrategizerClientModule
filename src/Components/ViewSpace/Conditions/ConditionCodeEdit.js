import React from 'react';
import ReactMarkdown from 'react-markdown';

import styles from '../styles';
import { withStyles } from '@material-ui/core/styles';

import {
  Card,
  Grid,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Button,
  FormGroup,
  TextField
} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

import { slugify } from '../../../utils';

export class ConditionCodeEdit extends React.Component {
  constructor(props){
    super(props);

    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.handleSaveInput = this.handleSaveInput.bind(this);

    this.state={
      code: props.condition.code,
      changed: false
    }
  }
  render () {
    const { classes, content, condition, stratIndex, pointIndex, phaseIndex, situationIndex, updatePoint, toggleEdit, edit } = this.props;

    return (
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="stretch"
      >
        <Grid item>
          <FormGroup className={classes.formCont}>
            <TextField
              id='code'
              label="Update Condition Code"
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
              <Button size="small"  aria-label="Cancel Edit Condition Code" onClick={e => toggleEdit(e, false)}>
                Cancel
              </Button>
            </Grid>
            <Grid item>
              <Button
                size="small"
                variant={this.state.changed ? "contained" : "outlined"}
                aria-label="Save Condition Code"
                color="secondary"
                onClick={this.handleSaveInput}
              >
                Save
              </Button>
            </Grid>
          </Grid>
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
    this.props.updatePoint(this.state.code, this.props.pointIndex,'updateCondition', this.props.stratIndex, this.props.phaseIndex, this.props.situationIndex, this.props.conditionIndex, 'code')
    this.setState({changed: false })
    this.props.toggleEdit(e);
  }
}

export default ConditionCodeEdit;
