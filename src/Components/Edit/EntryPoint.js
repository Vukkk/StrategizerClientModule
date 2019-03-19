import React from 'react';
import { Link } from 'react-router-dom';

import { Grid, Typography, Button } from '@material-ui/core';
import ExpandItemWrapper from '../View/ExpandItemWrapper';
import EditSituation from './EditSituation';

import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

import { isDefined } from '../../utils';

class EntryPoint extends React.Component {
  render() {
    const { classes, index, sectionName, phsIndex, situations, updatePoint } = this.props;

    return (
      <ExpandItemWrapper sectionName="Entry Point">
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
              Situations
            </Typography>
          </Grid>
          <Grid item xs={12} >
            {situations.length > 0 &&
              situations.map((situation, sitIndex) => (
                <EditSituation
                  key={sitIndex}
                  point='entryPoint'
                  situation={situation}
                  phsIndex={isDefined(phsIndex) ? phsIndex : null}
                  sitIndex={sitIndex}
                  updatePoint={updatePoint}
                />
              ))
            }
            <Button
              className={classes.addButton}
              color="secondary"
              variant="contained"
              fullWidth={true}
              onClick={e => updatePoint(e, 'entryPoint', 'addSituation', null, null, null)}
            >
              + Add Situation
            </Button>
          </Grid>
        </Grid>
      </ExpandItemWrapper>
    );
  }
}

export default withStyles(styles)(EntryPoint);
