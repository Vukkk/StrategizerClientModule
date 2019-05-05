import React from 'react';

import { withStyles } from '@material-ui/core/styles';

import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Collapse,
  Avatar,
  Typography,
  Divider,
  Popper,
  Paper,
  Fade,
} from '@material-ui/core';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Selected from '@material-ui/icons/Check';

const styles = theme => ({
  root: {
    backgroundColor: '#FFF',
    '&:hover': {
      backgroundColor: '#DDD',
    },
  },
  primary: {
    color: '#888',
    fontSize: 12,
    '&:hover': {
      color: '#666',
    },
  },
  teamTitle: {
    fontSize: 13,
    textTransform: 'uppercase',
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
    width: '100%',
  },
  titleItem: {
    width: '100%',
    '&:hover': {
      backgroundColor: '#FFF',
    },
  },
  popover: {
    pointerEvents: 'none',
    position: 'absolute',
  },
  paper: {
    padding: '1em',
  },
});

export class Teams extends React.Component {
  constructor(props) {
    super(props);

    this.handlePopoverOpen = this.handlePopoverOpen.bind(this);
    this.handlePopoverClose = this.handlePopoverClose.bind(this);

    this.state = {
      openTeams: false,
      anchorEl: null,
      openedPopoverId: null,
    };
  }

  render() {
    const { classes, teams, team, setTeam } = this.props;
    const { openedPopoverId, anchorEl } = this.state;
    return (
      <React.Fragment>
        <ListItem
          className={classes.titleItem}
          classes={{ root: classes.root }}
          key='strategy-source-teams-list-item-group'
        >
          <ListItemText
            primary={'Strategy Source:'}
            classes={{ primary: classes.teamTitle }}
            onMouseEnter={e => this.handlePopoverOpen(e, 'popperStratSrc')}
            onMouseLeave={this.handlePopoverClose}
          />
          <Popper
            id={'popperStratSrc'}
            open={openedPopoverId === 'popperStratSrc'}
            anchorEl={anchorEl}
            placement='bottom-start'
            transition>
            {({ TransitionProps }) => (
              <Fade {...TransitionProps} timeout={350}>
                <Paper classes={{ root: classes.paper }}>
                  <Typography><b>Strategy Source</b> is the origin of the strategy provided to the</Typography>
                  <Typography>Strategizer. The origin is a Simulator that contains the strategy </Typography>
                  <Typography>managed within the Strategizer. In this demo, a Simulator </Typography>
                  <Typography>with a default strategy is forked when you create a team </Typography>
                </Paper>
              </Fade>
            )}
          </Popper>
        </ListItem>
        <ListItem button onClick={this.handleViewTeams} className={classes.strategyItem} classes={{ root: classes.root }}>
          <ListItemAvatar>
            <Avatar src={team.profile.avatar} className={classes.strategyAvatar} />
          </ListItemAvatar>
          <ListItemText
            primary={`Team: ${team.name}`}
            classes={{ primary: classes.primary }}
          />
          {this.state.openTeams ? <ExpandLess classes={{ root: classes.primary }} /> : <ExpandMore classes={{ root: classes.primary }} />}
        </ListItem>
        <Collapse in={this.state.openTeams} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {teams && teams.map((teamItem, index) => (
              <ListItem
                button
                className={classes.nested}
                key={`team-${index}`}
                onClick={() => setTeam(teamItem, index)}
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
            ))}
          </List>
        </Collapse>
        <Divider />
      </React.Fragment>
    );
  }

  handleViewTeams = () => {
    this.setState(state => ({ openTeams: !state.openTeams }));
  };

  handlePopoverOpen(e, popoverId) {
    this.setState({ anchorEl: e.currentTarget, openedPopoverId: popoverId });
  }

  handlePopoverClose() {
    this.setState({ anchorEl: null, openedPopoverId: null });
  }
}

export default withStyles(styles)(Teams);
