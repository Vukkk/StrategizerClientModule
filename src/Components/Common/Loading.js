import React from 'react';
import { Link } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';

export const Loading = ({ text }) => (
  <Grid container>
    <Grid item xs>
      <CircularProgress color="secondary" />
    </Grid>
    <Grid item xs>
      <Typography
        variant='h6'
        align='center'
        color='textPrimary'
        gutterBottom
      >
        Loading{ text ? ` ${text}...` : '...' }
      </Typography>
    </Grid>
  </Grid>
)

export default Loading;
