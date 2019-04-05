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

export class StrategyDoc extends React.Component {
  constructor(props){
    super(props);

    this.handleChangeInput = this.handleChangeInput.bind(this);

    this.state={
      name: props.strategy.name,
      open: false
    }
  }
  componentDidUpdate(prevProps) {
  // Typical usage (don't forget to compare props):
    if (!prevProps.saved && this.props.saved) {
      this.setState = {
        changed: false
      }
    }
  }
  render () {
    const { classes, content, strategy, stratIndex, updatePoint, toggleEdit } = this.props;
    console.log('DocOnly:', this.props);
    return (
      <React.Fragment>
        <Button
          size='small'
          color='primary'
          className={classes.buttonRight}
          onClick={this.handleClickOpen}
        >
          <DeleteIcon /> Delete
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby='form-dialog-title'
        >
          <div classes={classes.dialogContainer}>
            <DialogTitle id='form-dialog-title'>
              Delete Team Team
            </DialogTitle>
            <DialogContent>
              <Typography variant='subtitle1' color='primary'>
                DANGER - Deleting this strategy also removes all nested phases, situations and conditions.
              </Typography>
              <Typography variant='subtitle1'>
                Are you sure you want to delete this strategy?
              </Typography>
              {loader}
              {errors}
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose} color='primary'>
                Cancel
              </Button>
              <Button
                onClick={e => updatePoint(null, null, 'deleteStrategy', this.props.stratIndex, null, null, null, null)}
                color='primary'
              >
                Delete Team
              </Button>
            </DialogActions>
          </div>
        </Dialog>
      </React.Fragment>
    )
  }
}

export default withStyles(styles)(StrategyDoc);
