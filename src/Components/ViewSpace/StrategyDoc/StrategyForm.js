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
    this.handleSaveInput = this.handleSaveInput.bind(this);

    this.state={
      name: props.strategy.name,
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
    const { classes, content, strategy, stratIndex, updatePoint, toggleEdit } = this.props;
    console.log('DocOnly:', this.props);
    return (
      <Card className={classes.formCard}>
        <Grid
          container
          direction="column"
          justify="flex-start"
          alignItems="stretch"
        >
          <Grid item>
            <FormGroup>
              <TextField
                id={'name'}
                label="Update Strategy Name"
                value={this.state.name}
                onChange={this.handleChangeInput}
                margin="normal"
                variant="outlined"
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
            >
              <Grid item>
                <Button size="small"  aria-label="Delete Strategy" onClick={e => toggleEdit(e)}>
                  Cancel
                </Button>
              </Grid>
              <Grid item>
                <Button
                  size="small"
                  variant="outlined"
                  aria-label="Delete Strategy"
                  color={this.state.changed ? "primary" : "secondary" }
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
    this.props.updatePoint(this.state.name, this.props.stratIndex,'updateStrategy', null, null, null, null, 'name')
    this.setState({changed: false })
    this.props.toggleEdit(e);
  }
}

export default withStyles(styles)(StrategyDoc);
