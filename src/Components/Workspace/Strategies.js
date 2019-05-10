import React from 'react';

import { withStyles } from '@material-ui/core/styles';

import {
  Grid,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Collapse,
  Typography,
  Switch,
  Button,
  Popper,
  Paper,
  Fade,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import HelpIcon from '@material-ui/icons/Help';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

const styles = theme => ({
  root: {
    backgroundColor: '#888',
    '&:hover': {
      backgroundColor: '#444',
    },
    cursor: 'pointer',
  },
  itemTitleRoot: {
    backgroundColor: 'none',
  },
  itemFirstTier: {
    backgroundColor: '#CCC',
  },
  primary: {
    color: '#fff',
    backgroundColor: 'none',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  nested: {
    paddingLeft: theme.spacing.unit * 3,
  },
  editNext: {
    paddingTop: 10,
    paddingRight: 0,
    fontSize: 36,
  },
  editBttnContainer: {
    paddingRight: 5,
  },
  editBttn: {
    color: '#444',
    padding: 0,
    minWidth: 32,
  },
  editBttnLabel: {
    fontSize: 20,
  },
  popover: {
    pointerEvents: 'none',
    position: 'absolute',
  },
  paper: {
    padding: theme.spacing.unit,
  },
});

export class Strategies extends React.Component {
  constructor(props) {
    super(props);

    this.handleOpen = this.handleOpen.bind(this);
    this.handlePopoverOpen = this.handlePopoverOpen.bind(this);
    this.handlePopoverClose = this.handlePopoverClose.bind(this);

    this.state = {
      open: false,
      anchorEl: null,
      openedPopoverId: null,
    };
  }

  render() {
    const { classes, strategies, strategy, setStrategy, updatePoint } = this.props;
    const { open, openedPopoverId, anchorEl } = this.state;

    return (
      <React.Fragment>
        <ListItem
          className={classes.root}
          classes={{ root: classes.itemFirstTier, selected: classes.itemFirstTierSelected }}
          dense
        >
          <ListItemText
            primary="Strategies"
            primaryTypographyProps={{ variant: 'subtitle1' }}
            classes={{ root: classes.itemTitleRoot, primary: classes.primary }}
            onClick={e => this.handleOpen(e)}
            onMouseEnter={e => this.handlePopoverOpen(e, 'popper1')}
            onMouseLeave={this.handlePopoverClose}
          />
          <Popper id={'popper1'} open={openedPopoverId === 'popper1'} anchorEl={anchorEl} transition>
            {({ TransitionProps }) => (
              <Fade {...TransitionProps} timeout={350}>
                <Paper classes={{ root: classes.paper }}>
                  <Typography>View Strategies</Typography>
                </Paper>
              </Fade>
            )}
          </Popper>
          <ListItemSecondaryAction>
            <Grid
              item
              container
              direction="row"
              justify="flex-end"
              alignItems="center"
              className={classes.editBttnContainer}
            >
              {open ? (
                <React.Fragment>
                  <Grid item>
                    <Button
                      aria-label="Add Strategy"
                      onClick={() => updatePoint(null, null, 'addStrategy', null, null, null, null, null)}
                      classes={{ root: classes.editBttn }}
                      onMouseEnter={e => this.handlePopoverOpen(e, 'popper2')}
                      onMouseLeave={this.handlePopoverClose}
                    >
                      <AddIcon classes={{ root: classes.editBttnLabel }} />
                    </Button>
                    <Popper id={'popper2'} open={openedPopoverId === 'popper2'} anchorEl={anchorEl} transition>
                      {({ TransitionProps }) => (
                        <Fade {...TransitionProps} timeout={350}>
                          <Paper classes={{ root: classes.paper }}>
                            <Typography>Add a strategy</Typography>
                          </Paper>
                        </Fade>
                      )}
                    </Popper>
                  </Grid>
                  <Grid item>
                    <Button
                      aria-label="View/Hide Strategies"
                      onClick={e => this.handleOpen(e)}
                      classes={{ root: classes.editBttn }}
                    >
                      <ExpandLess classes={{ root: classes.editBttnLabel }} />
                    </Button>
                  </Grid>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <Grid item>
                    <Button
                      aria-label="View Introduction"
                      onClick={e => this.props.setView(e, 'Introduction')}
                      classes={{ root: classes.editBttn }}
                      onMouseEnter={e => this.handlePopoverOpen(e, 'popper3')}
                      onMouseLeave={this.handlePopoverClose}
                    >
                      <HelpIcon classes={{ root: classes.editBttnLabel }} />
                    </Button>
                    <Popper id={'popper3'} open={openedPopoverId === 'popper3'} anchorEl={anchorEl} transition>
                      {({ TransitionProps }) => (
                        <Fade {...TransitionProps} timeout={350}>
                          <Paper classes={{ root: classes.paper }}>
                            <Typography>View Introduction</Typography>
                          </Paper>
                        </Fade>
                      )}
                    </Popper>
                  </Grid>
                  <Grid item>
                    <Button
                      aria-label="View/Hide Strategies"
                      onClick={e => this.handleOpen(e)}
                      classes={{ root: classes.editBttn }}
                    >
                      <ExpandMore classes={{ root: classes.editBttnLabel }} />
                    </Button>
                  </Grid>
                </React.Fragment>
              )}
            </Grid>
          </ListItemSecondaryAction>
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          {strategies && strategies.map((strategyItem, strIndex) => (
            <ListItem
              button
              aria-label="View info about Strategies"
              className={classes.nested}
              classes={{ root: classes.itemFirstTier }}
              key={`strategy-${strIndex}`}
              onClick={() => setStrategy(strategyItem, 'Strategies', strIndex)}
              selected={strategy.name === strategyItem.name ? true : false}
            >
              <ListItemText
                primary={strategyItem.name}
              />
              <ListItemSecondaryAction>
                <Switch
                  aria-label="Activate/Deactivate Strategy"
                  onChange={() => updatePoint(!strategyItem.active, null, 'updateStrategy', strIndex, null, null, null, 'active')}
                  checked={strategyItem.active}
                  onMouseEnter={e => this.handlePopoverOpen(e, 'strategyToggleActivate')}
                  onMouseLeave={this.handlePopoverClose}
                />
                <Popper id={'strategyToggleActivate'} open={openedPopoverId === 'strategyToggleActivate'} anchorEl={anchorEl} transition>
                  {({ TransitionProps }) => (
                    <Fade {...TransitionProps} timeout={350}>
                      <Paper classes={{ root: classes.paper }}>
                        <Typography>Activate/Deactivate Strategy</Typography>
                      </Paper>
                    </Fade>
                  )}
                </Popper>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </Collapse>
      </React.Fragment>
    );
  }

  handleOpen(e) {
    e.preventDefault();
    this.props.setView(e, 'Strategies');
    this.setState({ open: !this.state.open });
  }

  handlePopoverOpen(e, popoverId) {
    this.setState({ anchorEl: e.currentTarget, openedPopoverId: popoverId });
  }

  handlePopoverClose() {
    this.setState({ anchorEl: null, openedPopoverId: null });
  }
}

export default withStyles(styles)(Strategies);
