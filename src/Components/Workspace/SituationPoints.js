import React from 'react';

import styles from './styles';
import { withStyles } from '@material-ui/core/styles';

import {
  Button,
  Grid,
  Typography,
  Collapse,
  List,
  ListItem,
  ListItemText,
  IconButton,
  ListItemSecondaryAction,
  Popper,
  Paper,
  Fade
} from '@material-ui/core';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Selected from '@material-ui/icons/Check';
import NavigateNext from '@material-ui/icons/NavigateNext';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';

export class SituationPoints extends React.Component {
  constructor (props) {
    super(props);

    this.handlePopoverOpen = this.handlePopoverOpen.bind(this);
    this.handlePopoverClose = this.handlePopoverClose.bind(this);

    this.state = {
      anchorEl: null,
      openedPopoverId: null
    }
  }

  render () {
    const {
      classes,
      index,
      entryName,
      pointIndex,
      points,
      point,
      situation,
      setPoint,
      setSituation,
      updatePoint,
      openPoint,
      handleOpenPoint,
      selected,
      setView,
      view
    } = this.props;
   const situations = points[pointIndex].situations;
   const { openedPopoverId, anchorEl } = this.state;
   return (
      <React.Fragment>
        <ListItem
          button
          key={`point-situation-${index}`}
          onClick={e => handleOpenPoint(e, pointIndex, entryName)}
          className={classes.strategyItem}
          selected={selected}
          classes={{root: classes.itemTopTier, selected: classes.itemTopTierSelected}}
          onMouseEnter={(e) => this.handlePopoverOpen(e, 'popper-sit-ptdoc')}
          onMouseLeave={this.handlePopoverClose}
        >
          <ListItemText
            primary={entryName}
          />
          {selected &&
            <ListItemSecondaryAction>
              <Button
                aria-label="Add Situation"
                onClick={e => updatePoint(null, pointIndex,'addSituation', null, null, null, null, null)}
                classes={{root: classes.addBttn }}
                onMouseEnter={(e) => this.handlePopoverOpen(e, 'popper-sit-addsit')}
                onMouseLeave={this.handlePopoverClose}
              >
                <AddIcon />
              </Button>
              <Popper id={`popper-sit-addsit`} open={openedPopoverId === 'popper-sit-addsit'} anchorEl={anchorEl} transition>
                {({ TransitionProps }) => (
                  <Fade {...TransitionProps} timeout={350}>
                    <Paper classes={{root: classes.paper}}>
                      <Typography>Add a phase</Typography>
                    </Paper>
                  </Fade>
                )}
              </Popper>
            </ListItemSecondaryAction>
          }
          {openPoint === pointIndex ? null : <ExpandMore />}
        </ListItem>
        <Popper id={`popper-sit-ptdoc`} open={openedPopoverId === 'popper-sit-ptdoc'} anchorEl={anchorEl} transition>
          {({ TransitionProps }) => (
            <Fade {...TransitionProps} timeout={350}>
              <Paper classes={{root: classes.paper}}>
                <Typography>{`View info about ${entryName} event`}</Typography>
              </Paper>
            </Fade>
          )}
        </Popper>
        <Collapse in={openPoint === pointIndex} timeout="auto" unmountOnExit key={`point-collapse-${index}`}>
          <List component="div" disablePadding>
            {situations.length > 0 && situations.map((situationItem, index) => {
              return (
                <ListItem
                  button
                  className={classes.nested}
                  classes={{root: classes.itemFirstTier, selected: classes.itemFirstTierSelected}}
                  key={`situation-${index}`}
                  onClick={e => setSituation(situationItem, index, 'Conditions')}
                  dense
                  selected={situation.name === situationItem.name}
                  divider
                >
                  <ListItemText
                    primary={`S: ${situationItem.name}`}
                  />
                  {situation.name === situationItem.name ?
                    <ListItemSecondaryAction>
                      <Grid
                        item
                        container
                        direction="row"
                        justify="flex-end"
                        alignItems="center"
                        className={classes.editBttnContainer}
                      >
                        <Grid item>
                          <Button
                            size="small"
                            aria-label="Edit Situation"
                            classes={{ root: classes.editBttn }}
                            onClick={e => setSituation(situationItem, index, 'Situations')}
                            onMouseEnter={(e) => this.handlePopoverOpen(e, 'popper-sit-editsit')}
                            onMouseLeave={this.handlePopoverClose}
                          >
                            <EditIcon nativeColor={view === "Situations" ? "#f55858" : "#777"} classes={{root: classes.editBttnLabel}}/>
                          </Button>
                          <Popper id={`popper-sit-editsit`} open={openedPopoverId === 'popper-sit-editsit'} anchorEl={anchorEl} transition>
                            {({ TransitionProps }) => (
                              <Fade {...TransitionProps} timeout={350}>
                                <Paper classes={{root: classes.paper}}>
                                  <Typography>View info about situations</Typography>
                                </Paper>
                              </Fade>
                            )}
                          </Popper>
                        </Grid>
                        <Grid item>
                          <NavigateNext nativeColor="#f55858" classes={{ root: classes.editNext }}/>
                        </Grid>
                      </Grid>
                    </ListItemSecondaryAction>
                     : null}
                </ListItem>
              )
            })}
            {situations.length === 0 &&
              <Grid container>
                <Grid item>
                  <Typography
                    variant='subtitle1'
                    align='left'
                    color='textPrimary'
                    gutterBottom
                  >
                    No situations have been created for this section.
                    <Button
                      type="text"
                      aria-label="Add Situation"
                      onClick={e => updatePoint(null, pointIndex,'addSituation', null, null, null, null, null)}
                    >
                      <AddIcon /> Situation
                    </Button>
                  </Typography>
                </Grid>
              </Grid>
            }
          </List>
        </Collapse>
      </React.Fragment>
    )
  }

  handlePopoverOpen (e, popoverId) {
    this.setState({ anchorEl: e.currentTarget, openedPopoverId: popoverId });
  };

  handlePopoverClose () {
    this.setState({ anchorEl: null, openedPopoverId: null });
  };
}

export default withStyles(styles)(SituationPoints);
