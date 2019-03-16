import React from 'react';
import { Link } from 'react-router-dom';

import {
  Grid, Paper,
  Typography,
  Button,
} from '@material-ui/core';
import ExpandItemWrapper from './ExpandItemWrapper';
import EntryPoint from './EntryPoint';

import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

class ViewItem extends React.Component {
  render() {
    const { classes, index } = this.props;
    const {
      name,
      entryPoint,
      exitPoint,
      sellPoint,
      buyPoint,
      stopLoss,
      buyOrder,
      sellOrder
    } = this.props.strategy;
    console.log(entryPoint);
    return (
      <Paper className={classes.card}>
        <Grid item
        container
        direction="row"
        justify="center"
        alignItems="center"
        >
            <Typography
              variant='h4'
              align='center'
              color='textPrimary'
              gutterBottom
            >
              Strategy: {name}
            </Typography>
        </Grid>
        <Grid item
          container
          spacing={24}
        >
          <Grid item xs={12} >
            { entryPoint.situations.length > 0 && <EntryPoint sectionName="Entry Point" situations={entryPoint.situations} /> }
          </Grid>
        </Grid>
      </Paper>
    );
  }
}

export default withStyles(styles)(ViewItem);
