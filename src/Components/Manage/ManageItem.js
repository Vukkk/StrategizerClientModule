import React from 'react';
import { Link } from 'react-router-dom';

import {
  Grid, Paper,
  Typography,
  Button, Avatar, Card, CardContent
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

class ManageItem extends React.Component {
  render() {
    const { classes, index, teamName, teamSlug, teamAvatar, fbName, fbAvatar, fbSlug } = this.props;
    const { name } = this.props.strategy;

    return (
      <Paper className={classes.substrategycard}>
        <Grid
          container
          spacing={0}
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
                  to={`/strategizer/view/${teamSlug}/${fbSlug}/${index}`}
                >
                  View
                </Button>
                <Button
                  className={classes.buttonList}
                  variant='outlined'
                  color='primary'
                  size='small'
                  component={Link}
                  to={`/strategizer/edit/${teamSlug}/${fbSlug}/${index}`}
                >
                  Edit
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
