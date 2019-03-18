import React from 'react';
import { Link } from 'react-router-dom';

import {
  Grid, Paper,
  Typography,
  Button,
} from '@material-ui/core';
import BannerTopBar from '../BannerTopBar';
import EntryPoint from './EntryPoint';
import ExitPoint from '../View/ExitPoint';
import BuyPoint from '../View/BuyPoint';
import SellPoint from '../View/SellPoint';
import StopLoss from '../View/StopLoss';
import BuyOrder from '../View/BuyOrder';
import SellOrder from '../View/SellOrder';
import EditWrapper from './EditWrapper';

import { isDefined } from '../../utils';

import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

class EditItem extends React.Component {
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

    return (
      <EditWrapper index={index}>
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
              color='secondary'
              size='small'
              component={Link}
              to={`/strategizer/edit/${index}`}
            >
              Save
            </Button>
          </Grid>
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
      </EditWrapper>
    );
  }
}

export default withStyles(styles)(EditItem);
