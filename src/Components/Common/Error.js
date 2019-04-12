import React from 'react';
import { Link } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

export const Error = ({ align, text, children }) => (
  <Grid container>
    <Grid item xs>
      <Typography
        variant='h6'
        align={align !== null ? align : 'left'}
        color='textSecondary'
        gutterBottom
      >
        {text}
        {children}
      </Typography>
    </Grid>
  </Grid>
)

export default Error;
