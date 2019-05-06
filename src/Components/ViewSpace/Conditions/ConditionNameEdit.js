import React from 'react';

import {
  Grid,
  Button,
  FormGroup,
  TextField,
} from '@material-ui/core';

export class ConditionNameEdit extends React.Component {
  constructor(props) {
    super(props);

    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.handleSaveInput = this.handleSaveInput.bind(this);

    this.state = {
      name: props.condition.name,
      changed: false,
    };
  }

  render() {
    const { classes, toggleEdit } = this.props;

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
              id='name'
              label="Update Condition Name"
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
            className={classes.formBttnGroup}
          >
            <Grid item>
              <Button size="small" aria-label="Cancel Edit Situation" onClick={e => toggleEdit(e, false)}>
                Cancel
              </Button>
            </Grid>
            <Grid item>
              <Button
                size="small"
                variant={this.state.changed ? 'contained' : 'outlined'}
                aria-label="Save Situation"
                onClick={this.handleSaveInput}
              >
                Save
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }

  handleChangeInput(e) {
    e.preventDefault();
    e.persist();
    this.setState({[e.target.id]: e.target.value, changed: true })
  }

  handleSaveInput(e) {
    e.preventDefault();
    this.props.updatePoint(this.state.name, this.props.pointIndex, 'updateCondition', this.props.stratIndex, this.props.phaseIndex, this.props.situationIndex, this.props.conditionIndex, 'name');
    this.setState({ changed: false });
    this.props.toggleEdit(e);
  }
}

export default ConditionNameEdit;
