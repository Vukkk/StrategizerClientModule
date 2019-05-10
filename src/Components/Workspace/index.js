import React from 'react';

import {
  Paper,
  Grid,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

import BannerTopBar from '../BannerTopBar';
import HocStrategieswithData from './hocStrategies';

export class Workspace extends React.Component {
  constructor(props) {
    super(props);

    this.setTeam = this.setTeam.bind(this);
    this.setFb = this.setFb.bind(this);

    this.state = {
      team: 0,
      fb: 1,
    };
  }

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <BannerTopBar
          size='small'
          title=''
          text=''
          backgroundUrl='https://superalgos.org/img/photos/strategizer-original.jpg'
        />
        <div className='container'>
          <Paper className={classes.card}>
            <Grid container>
              <HocStrategieswithData
                setTeam={this.setTeam}
                setFb={this.setFb}
                team={this.state.team}
                fb={this.state.fb}
                classes={classes}
              />
            </Grid>
          </Paper>
        </div>
      </React.Fragment>
    );
  }

  setTeam(team) {
    this.setState = ({ team });
  }

  setFb(fb) {
    this.setState = ({ fb });
  }
}

export default withStyles(styles)(Workspace);
