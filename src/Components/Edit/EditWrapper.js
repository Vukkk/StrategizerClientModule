import React from 'react';
import { Link } from 'react-router-dom';

import {
  Grid, Paper,
  Typography
} from '@material-ui/core';
import BannerTopBar from '../BannerTopBar';

import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

class ViewWrapper extends React.Component {
  render() {
    const { classes, index, children } = this.props;
    return (
      <React.Fragment>
        <BannerTopBar
          size='small'
          title=''
          text=''
          backgroundUrl='https://superalgos.org/img/photos/events.jpg'
        />
        <div className='container'>
          <Link to='/strategizer' className={classes.backLink}>&larr; Back to all strategies</Link>
          <Paper className={classes.card}>
            <Grid container>
              {children}
              </Grid>
            </Paper>
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(ViewWrapper);
