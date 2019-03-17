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

import { isDefined } from '../../utils';

import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

class ViewWrapper extends React.Component {
  render() {
    const { classes, children } = this.props;
    return (
      <React.Fragment>
        <Paper className={classes.card}>
          <Grid container>
            <BannerTopBar
              size='small'
              title=''
              text=''
              backgroundUrl='https://superalgos.org/img/photos/events.jpg'
            />
            <div className='container'>
              <Link to='/strategizer' className={classes.backLink}>&larr; Back to all strategies</Link>
              {children}
            </div>
          </Grid>
        </Paper>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(ViewWrapper);
