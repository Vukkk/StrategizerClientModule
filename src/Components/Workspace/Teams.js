import React from 'react';

import { withStyles } from '@material-ui/core/styles';

import {
  Grid,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Collapse,
  Avatar,
  IconButton,
  Typography,
  Divider
} from '@material-ui/core';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Selected from '@material-ui/icons/Check';

const styles = theme => ({
  root: {
    backgroundColor: '#FFF',
    '&:hover':{
      backgroundColor: '#DDD'
    }
  },
  primary:{
    color: '#888',
    fontSize: 12,
    '&:hover':{
      color: '#666'
    }
  },
  teamTitle:{
    fontSize: 13,
    textTransform: 'uppercase'
  },
  nested: {
    paddingLeft: theme.spacing.unit * 3,
  },
  strategyAvatar: {
    margin: 0,
    width: 18,
    height: 18,
  },
  strategyItem: {
    width: '100%'
  },
  titleItem: {
    width: '100%',
    '&:hover':{
      backgroundColor: '#FFF'
    }
  },
});

export class Teams extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      openTeams: false,
    }
  }

  render () {
    const { classes, teams, team, setTeam } = this.props;
    console.log(teams, team);
    console.log(this.state);
    return (
      <React.Fragment>
        <ListItem className={classes.titleItem} classes={{root: classes.root}}>
          <ListItemText
            primary={`Strategy Source:`}
            classes={{primary: classes.teamTitle}}
          />
        </ListItem>
        <ListItem button onClick={this.handleViewTeams} className={classes.strategyItem} classes={{root: classes.root}}>
          <ListItemAvatar>
            <Avatar src={team.profile.avatar} className={classes.strategyAvatar} />
          </ListItemAvatar>
          <ListItemText
            primary={`Team: ${team.name}`}
            classes={{primary: classes.primary}}
          />
          {this.state.openTeams ? <ExpandLess classes={{root: classes.primary}} /> : <ExpandMore classes={{root: classes.primary}} />}
        </ListItem>
        <Collapse in={this.state.openTeams} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {teams && teams.map((teamItem, index) => {
              return (
                <ListItem
                  button
                  className={classes.nested}
                  key={`team-${index}`}
                  onClick={e => setTeam(teamItem, index)}
                  dense
                >
                  <ListItemAvatar>
                    <Avatar src={teamItem.profile.avatar} className={classes.strategyAvatar} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={teamItem.name}
                  />
                  {team.slug === teamItem.slug ? <Selected nativeColor="#9ccc65" /> : null}
                </ListItem>
              )
            })}
          </List>
        </Collapse>
        <Divider />
      </React.Fragment>
    )
  }

  handleViewTeams = () => {
    this.setState(state => ({ openTeams: !state.openTeams }));
  };
}

export default withStyles(styles)(Teams);
