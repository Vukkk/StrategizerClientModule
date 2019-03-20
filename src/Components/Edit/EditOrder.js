import React from 'react';
import { Link } from 'react-router-dom';

import { Grid, Typography, Button } from '@material-ui/core';
import { ExpandItemWrapper } from '../Common';
import EditPhase from './EditPhase';

import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

class EditOrder extends React.Component {
  render() {
    const { classes, index, sectionName, point, phases, phsIndex, updatePoint, changed, submitSave } = this.props;

    return (
      <ExpandItemWrapper sectionName={sectionName}>
        <Grid
          item
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid item xs={12} >
            <Typography
              variant='h6'
              align='left'
              color='textPrimary'
              gutterBottom
            >
              Phases
            </Typography>
          </Grid>
          <Grid item xs={12} >
            {phases.length > 0 &&
              phases.map((phase, phsIndex) => (
                <EditPhase
                  key={phsIndex}
                  phase={phase}
                  point={point}
                  phsIndex={phsIndex}
                  updatePoint={updatePoint}
                  changed={changed}
                  submitSave={submitSave}
                />
              ))
            }
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
                  onClick={e => updatePoint(e, point, 'addPhase', phsIndex, null, null)}
                >
                  + Add Phase
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

export default withStyles(styles)(EditOrder);
