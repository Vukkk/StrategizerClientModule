import React from 'react';
import { Link } from 'react-router-dom';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Loading, Error } from '../Common';

export const ManageError = ({ classes, text, children}) => (
  <Paper className={classes.card}>
    <Grid
      container
      spacing={16}
      direction="row"
      justify="center"
      alignItems="center"
    >
      <Grid item xs>
        <Error text={text} children={children} />
      </Grid>
    </Grid>
  </Paper>
)

export default ManageError;
