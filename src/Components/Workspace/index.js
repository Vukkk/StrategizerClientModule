import React from 'react';

import styles from './styles';
import { withStyles } from '@material-ui/core/styles';

import {
  Paper,
  Grid
} from '@material-ui/core';

import BannerTopBar from '../BannerTopBar';
import HocStrategies from './hocStrategies';

export const Workspace = ({ classes }) => (
  <React.Fragment>
    <BannerTopBar
      size='small'
      title=''
      text=''
      backgroundUrl='https://superalgos.org/img/photos/events.jpg'
    />
    <div className='container'>
      <Paper className={classes.card}>
        <Grid container>
          <HocStrategies />
        </Grid>
      </Paper>
    </div>
  </React.Fragment>
)

export default withStyles(styles)(Workspace);
