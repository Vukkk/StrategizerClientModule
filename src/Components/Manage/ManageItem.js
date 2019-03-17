import React from 'react';
import { Link } from 'react-router-dom';

import {
  Grid, Paper,
  Typography,
  Button, Avatar
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

class ManageItem extends React.Component {
  render() {
    const { classes, index, teamName, teamAvatar, fbName, fbAvatar } = this.props;
    const { name } = this.props.strategy;
    return (
      <Paper className={classes.card}>
        <Grid
          container
          spacing={16}
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <Grid item xs>
            <Grid
              container
              spacing={16}
              direction="row"
              justify="flex-start"
              alignItems="center"
            >
              <Grid item>
                <Typography className={classes.heading}>{name} </Typography>
              </Grid>
              <Grid item>
                <Grid
                  container
                  spacing={16}
                  direction="row"
                  justify="space-between"
                  alignItems="center"
                >
                  <Grid item>
                    <Avatar src={teamAvatar} className={classes.avatar} />
                  </Grid>
                  <Grid item>
                    <Typography className={classes.subheading}>{teamName}</Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Grid
                  container
                  spacing={16}
                  direction="row"
                  justify="space-between"
                  alignItems="center"
                >
                  <Grid item>
                    <Avatar src={fbAvatar} className={classes.avatar} />
                  </Grid>
                  <Grid item>
                    <Typography className={classes.subheading}>{fbName}</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid
              container
              spacing={16}
              direction="column"
              justify="center"
              alignItems="flex-end"
            >
              <Grid item>
                <Button
                  className={classes.buttonList}
                  variant='outlined'
                  color='primary'
                  size='small'
                  component={Link}
                  to={`/strategizer/view/${index}`}
                >
                  View
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
