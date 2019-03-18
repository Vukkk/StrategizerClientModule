import React from 'react';
import { Link } from 'react-router-dom';

import { Grid, Typography, Button } from '@material-ui/core';
import ExpandItemWrapper from '../View/ExpandItemWrapper';
import ViewSituation from '../View/ViewSituation';

import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

class EntryPoint extends React.Component {
  render() {
    const { classes, index, sectionName, situations } = this.props;
    console.log(situations);
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
              situations.map((situation, index) => <ViewSituation key={index} situation={situation} index={index} />)
            }
            <Button
              className={classes.addButton}
              color="secondary"
              variant="contained"
              fullWidth={true}
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
