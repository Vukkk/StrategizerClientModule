import React from 'react';
import { Link } from 'react-router-dom';

import { Grid, Typography, List, FormGroup, TextField, Button } from '@material-ui/core';
import { ExpandItemWrapper } from '../Common';
import EditSituation from './EditSituation';

import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

import { slugify } from '../../utils';

class EditPhase extends React.Component {
  render() {
    const { classes, point, phsIndex, sitIndex, updatePoint, changed, submitSave } = this.props;
    const { name, code, situations } = this.props.phase;
    console.log('EditPhase: ', this.props.phase);
    return (
      <ExpandItemWrapper sectionName={`Phase: ${name}`} style={classes.expansionSituation}>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
        <Grid item container xs={12} direction="row" justify="space-between" alignItems="center">
          <Grid item xs={10}>
            <FormGroup>
              <TextField
                id={`phase-${slugify(name)}-name-${phsIndex}`}
                label="Update Phase Name"
                value={name}
                onChange={e => updatePoint(e.target.value, point, 'updatePhase', phsIndex, null, null, 'name')}
                margin="normal"
                variant="filled"
              />
              <TextField
                id={`phase-${slugify(name)}-code-${phsIndex}`}
                label="Update Phase code"
                value={code}
                onChange={e => updatePoint(e.target.value, point, 'updatePhase', phsIndex, null, null, 'code')}
                margin="normal"
              />
            </FormGroup>
          </Grid>
        </Grid>
          <Grid item xs={12} >
            <List className={classes.root}>
              {situations.length > 0 &&
                situations.map((situation, sitIndex) => (
                  <EditSituation
                    key={sitIndex}
                    situation={situation}
                    name={situation.name}
                    point={point}
                    phsIndex={phsIndex}
                    sitIndex={sitIndex}
                    updatePoint={updatePoint}
                    classes={classes}
                    changed={changed}
                    submitSave={submitSave}
                  />
                ))
              }
            </List>
            <Grid
              item
              container
              direction="row"
              justify="space-between"
              alignItems="center"
            >
              <Grid item>
                <Button
                  className={classes.addButton}
                  color="secondary"
                  variant="contained"
                  fullWidth={true}
                  onClick={e => updatePoint(e, point, 'addSituation', phsIndex, null, null)}
                >
                  + Add Situation
                </Button>
              </Grid>
              <Grid item>
                <Button
                  className={classes.addButton}
                  color="primary"
                  variant={changed ? "contained" : "outlined"}
                  fullWidth={false}
                  disabled={changed ? false : true}
                  onClick={e => submitSave(e)}
                >
                  + Save Changes
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </ExpandItemWrapper>
    );
  }
}

export default withStyles(styles)(EditPhase);
