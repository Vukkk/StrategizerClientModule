import React from 'react';

import styles from './styles';
import { withStyles } from '@material-ui/core/styles';

import {
  Paper,
  Grid
} from '@material-ui/core';

import BannerTopBar from '../BannerTopBar';
import HocStrategies from './hocStrategies';

export class Workspace extends React.Component {
  constructor (props) {
    super(props);

    this.setTeam = this.setTeam.bind(this);
    this.setFb = this.setFb.bind(this);

    this.state = {
      team: 0,
      fb: 1
    }

  }
  render() {
    const { classes } = this.props;

    return (
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
              <HocStrategies
                setTeam={this.setTeam}
                setFb={this.setFb}
                team={this.state.team}
                fb={this.state.fb}
              />
            </Grid>
          </Paper>
        </div>
      </React.Fragment>
    )
  }

  setTeam(team) {
    this.setState =({ team: team })
  }

  setFb(fb) {
    this.setState =({ fb: fb })
  }

}

export default withStyles(styles)(Workspace);
