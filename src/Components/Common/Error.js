import React from 'react';
import { Link } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

export const Error = ({ text }) => (
  <Grid container>
    <Grid item xs>
      <Typography
        variant='h6'
        align='left'
        color='textSecondary'
        gutterBottom
      >
        text
      </Typography>
    </Grid>
  </Grid>
)

export default Error;
