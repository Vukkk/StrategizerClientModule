import React from 'react';
import { Link } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';

export const Loading = ({ text }) => (
  <Grid container>
    <Grid item xs>
      <Typography
        variant='h6'
        align='left'
        color='textPrimary'
        gutterBottom
      >
        <CircularProgress color="secondary" />
        Loading{ text ? ` ${text}...` : '...' }
      </Typography>
    </Grid>
  </Grid>
)

export default Loading;
