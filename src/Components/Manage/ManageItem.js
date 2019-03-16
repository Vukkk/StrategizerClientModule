import React from 'react';
import { Link } from 'react-router-dom';

import {
  Grid, Paper,
  Typography,
  Button,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

class ManageItem extends React.Component {
  render() {
    const { classes } = this.props;
    const {
      name
    } = this.props.strategy;
    return (
      <Paper className={classes.card}>
        <Grid container spacing={16}>
          <Grid item xs>
            <Typography gutterBottom variant='h5'> {name} </Typography>
          </Grid>
          <Grid item xs>
            <Typography gutterBottom>
              Financial Being Name: FB Name
            </Typography>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction='column' spacing={16}>
              <Grid item xs>
                <Typography gutterBottom variant='h5'> Description : </Typography>
              </Grid>
              <Grid item className={classes.buttonGrid}>
                <Button
                  className={classes.buttonList}
                  variant='outlined'
                  color='primary'
                  size='small'
                  component={Link}
                  to={`/strategizer/show/${name}`}
                >
                  Show
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    );
  }
}

export default withStyles(styles)(ManageItem);
