import React from 'react';
import { Link } from 'react-router-dom';

import {
  Grid, Paper,
  Typography,
  Button,
} from '@material-ui/core';
import EntryPoint from './EntryPoint';
import ExitPoint from './ExitPoint';
import BuyPoint from './BuyPoint';
import SellPoint from './SellPoint';
import StopLoss from './StopLoss';
import BuyOrder from './BuyOrder';
import SellOrder from './SellOrder';

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
            { exitPoint.situations.length > 0 && <ExitPoint sectionName="Exit Point" situations={exitPoint.situations} /> }
            { sellPoint.situations.length > 0 && <SellPoint sectionName="Sell Point" situations={sellPoint.situations} /> }
            { buyPoint.situations.length > 0 && <BuyPoint sectionName="Buy Point" situations={buyPoint.situations} /> }
            { stopLoss.phases.length > 0 && <StopLoss sectionName="Stop Loss" phases={stopLoss.phases} /> }
            { buyOrder.phases.length > 0 && <BuyOrder sectionName="Buy Order" phases={buyOrder.phases} /> }
            { sellOrder.phases.length > 0 && <SellOrder sectionName="Sell Order" phases={sellOrder.phases} /> }
          </Grid>
        </Grid>
      </Paper>
    );
  }
}

export default withStyles(styles)(ViewItem);
