import React from 'react';
import { Link } from 'react-router-dom';

import {
  Grid, Paper,
  Typography,
  Button,
} from '@material-ui/core';
import BannerTopBar from '../BannerTopBar';
import EntryPoint from './EntryPoint';
import ExitPoint from './ExitPoint';
import BuyPoint from './BuyPoint';
import SellPoint from './SellPoint';
import StopLoss from './StopLoss';
import BuyOrder from './BuyOrder';
import SellOrder from './SellOrder';
import ViewPoint from './ViewPoint';
import ViewOrder from './ViewOrder';
import ViewWrapper from './ViewWrapper';

import { isDefined } from '../../utils';

import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

class ViewItem extends React.Component {
  render() {
    const { classes, index, fbSlug } = this.props;
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

    return (
      <ViewWrapper index={index}>
        <Grid item
        container
        direction="row"
        justify="space-between"
        alignItems="center"
        >
          <Grid item>
            <Typography
              variant='h4'
              align='left'
              color='textPrimary'
              gutterBottom
            >
              Strategy: {name}
            </Typography>
          </Grid>
          <Grid item>
            <Button
              className={classes.editButton}
              variant='outlined'
              color='primary'
              size='small'
              component={Link}
              to={`/strategizer/edit/${fbSlug}/${index}`}
            >
              Edit
            </Button>
          </Grid>
        </Grid>
        <Grid item
          container
          spacing={24}
        >
          <Grid item xs={12} >
            { entryPoint.situations.length >= 0 && <ViewPoint sectionName="Entry Point" situations={entryPoint.situations} /> }
            { exitPoint.situations.length >= 0 && <ViewPoint sectionName="Exit Point" situations={exitPoint.situations} /> }
            { sellPoint.situations.length >= 0 && <ViewPoint sectionName="Sell Point" situations={sellPoint.situations} /> }
            { buyPoint.situations.length >= 0 && <ViewPoint sectionName="Buy Point" situations={buyPoint.situations} /> }
            { stopLoss.phases.length >= 0 && <ViewOrder sectionName="Stop Loss" phases={stopLoss.phases} /> }
            { buyOrder.phases.length >= 0 && <ViewOrder sectionName="Buy Order" phases={buyOrder.phases} /> }
            { sellOrder.phases.length >= 0 && <ViewOrder sectionName="Sell Order" phases={sellOrder.phases} /> }
          </Grid>
        </Grid>
      </ViewWrapper>
    );
  }
}

export default withStyles(styles)(ViewItem);
