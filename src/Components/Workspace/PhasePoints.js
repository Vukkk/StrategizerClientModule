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
import EditIcon from '@material-ui/icons/Edit';
import AddIcon from '@material-ui/icons/Add';

export class PhasePoints extends React.Component {
  constructor (props) {
    super(props);
    this.handleSitClick = this.handleSitClick.bind(this);
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
      stratIndex,
      pointIndex,
      points,
      point,
      phase,
      phaseIndex,
      situationIndex,
      situation,
      setPoint,
      setPhase,
      setSituation,
      updatePoint,
      openPoint,
      openPhase,
      handleOpenPoint,
      handleOpenPhase,
      selected,
      setView,
      view,
      selectedSit,
      handleSelectSit
    } = this.props;
   const phases = points[pointIndex].phases;
   const { openedPopoverId, anchorEl } = this.state;

   return (
      <React.Fragment>
        <ListItem
          button
          key={`point-phase-${pointIndex}`}
          onClick={e => this.props.handleOpenPoint(e, this.props.pointIndex, entryName)}
          className={classes.strategyItem}
          classes={{root: classes.itemTopTier, selected: classes.itemTopTierSelected}}
          selected={selected}
          onMouseEnter={(e) => this.handlePopoverOpen(e, 'popper-phase-ptdoc')}
          onMouseLeave={this.handlePopoverClose}
        >
          <ListItemText
            primary={entryName}
          />
          {selected &&
            <ListItemSecondaryAction>
              <Button
                aria-label="Add Phase"
                onClick={e => updatePoint(null, pointIndex,'addPhase', stratIndex, null, null, null, null)}
                onMouseEnter={(e) => this.handlePopoverOpen(e, 'popper-phase-addphase')}
                onMouseLeave={this.handlePopoverClose}
              >
                <AddIcon />
              </Button>
              <Popper id={`popper-phase-addphase`} open={openedPopoverId === 'popper-phase-addphase'} anchorEl={anchorEl} transition>
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
        <Popper id={`popper-phase-ptdoc`} open={openedPopoverId === 'popper-phase-ptdoc'} anchorEl={anchorEl} transition>
          {({ TransitionProps }) => (
            <Fade {...TransitionProps} timeout={350}>
              <Paper classes={{root: classes.paper}}>
                <Typography>{`View info about ${entryName} event`}</Typography>
              </Paper>
            </Fade>
          )}
        </Popper>
        <Collapse in={openPoint === pointIndex} key={`point-phase-collapse-${pointIndex}`} timeout="auto" unmountOnExit>
          <List component="div" disablePadding key={`point-phase-collapse-item-${pointIndex}`}>
            {phases.length > 0 && phases.map((phaseItem, pIndex) => {
              let situations = phaseItem.situations;
              return (
                <React.Fragment>
                  <ListItem
                    button
                    className={classes.nested}
                    classes={{root: classes.itemFirstTier, selected: classes.itemFirstTierSelected}}
                    key={`phase-${pIndex}`}
                    onClick={e => {
                      handleOpenPhase(e, pIndex, phaseItem, 'Phases');
                    }}
                    dense
                    selected={phaseIndex === pIndex && selectedSit === null}
                    divider
                    onMouseEnter={(e) => this.handlePopoverOpen(e, 'popper-phase-phasedoc')}
                    onMouseLeave={this.handlePopoverClose}
                  >
                    <ListItemText
                      primary={`P: ${phaseItem.name}`}
                    />
                    {openPhase === pIndex  && selectedSit === null ?
                      <ListItemSecondaryAction>
                        <Grid
                          item
                          container
                          direction="row"
                          justify="flex-end"
                          alignItems="center"
                          className={classes.editBttnContainer}
                        >
                          {phaseIndex === pIndex &&
                            <React.Fragment>
                              <Grid item>
                                <Button
                                  classes={{ root: classes.editBttn }}
                                  aria-label="Add Situation"
                                  onClick={e => updatePoint(null, pointIndex,'addSituation', stratIndex, pIndex, null, null, null)}
                                  onMouseEnter={(e) => this.handlePopoverOpen(e, 'popper-phase-addsit')}
                                  onMouseLeave={this.handlePopoverClose}
                                >
                                  <AddIcon />
                                </Button>
                                <Popper id={`popper-phase-addsit`} open={openedPopoverId === 'popper-phase-addsit'} anchorEl={anchorEl} transition>
                                  {({ TransitionProps }) => (
                                    <Fade {...TransitionProps} timeout={350}>
                                      <Paper classes={{root: classes.paper}}>
                                        <Typography>Add situation</Typography>
                                      </Paper>
                                    </Fade>
                                  )}
                                </Popper>
                              </Grid>
                              <Grid item>
                                <Button
                                  size="small"
                                  aria-label="Edit Phase"
                                  classes={{ root: classes.editBttn }}
                                  onClick={e => setPhase(phaseItem, pIndex, 'Phases')}
                                  onMouseEnter={(e) => this.handlePopoverOpen(e, 'popper-phase-editphase')}
                                  onMouseLeave={this.handlePopoverClose}
                                >
                                  <EditIcon nativeColor={view === "Situations" ? "#f55858" : "#777"} classes={{root: classes.editBttnLabel}}/>
                                </Button>
                                <Popper id={`popper-phase-editphase`} open={openedPopoverId === 'popper-phase-editphase'} anchorEl={anchorEl} transition>
                                  {({ TransitionProps }) => (
                                    <Fade {...TransitionProps} timeout={350}>
                                      <Paper classes={{root: classes.paper}}>
                                        <Typography>Edit phase</Typography>
                                      </Paper>
                                    </Fade>
                                  )}
                                </Popper>
                              </Grid>
                            </React.Fragment>
                            }
                            <Grid item>
                              <ExpandLess nativeColor="#777" classes={{ root: classes.editNext }} />
                            </Grid>
                        </Grid>
                      </ListItemSecondaryAction>
                       : null}
                  </ListItem>
                  <Popper id={`popper-phase-phasedoc`} open={openedPopoverId === 'popper-phase-phasedoc'} anchorEl={anchorEl} transition>
                    {({ TransitionProps }) => (
                      <Fade {...TransitionProps} timeout={350}>
                        <Paper classes={{root: classes.paper}}>
                          <Typography>View info about Phases</Typography>
                        </Paper>
                      </Fade>
                    )}
                  </Popper>
                  <Collapse key={`phase-collapse-${pIndex}`} in={openPhase === pIndex} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      {situations.length > 0 && situations.map((situationItem, index) => {
                        return (
                        <React.Fragment>
                          <ListItem
                            button
                            className={classes.nestedSituation}
                            classes={{root: classes.itemSecondTier, selected: classes.itemSecondTierSelected}}
                            key={`situation-${index}`}
                            onClick={e => this.handleSitClick(e, pIndex, index, situationItem)}
                            dense
                            selected={selectedSit === index}
                            divider
                            onMouseEnter={(e) => this.handlePopoverOpen(e, 'popper-phase-sitdoc')}
                            onMouseLeave={this.handlePopoverClose}
                          >
                            <ListItemText
                              primary={`S: ${situationItem.name}`}
                            />
                            {selectedSit === index ?
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
                                      onMouseEnter={(e) => this.handlePopoverOpen(e, 'popper-phase-editsit')}
                                      onMouseLeave={this.handlePopoverClose}
                                    >
                                      <EditIcon nativeColor={view === "Situations" ? "#f55858" : "#777"} classes={{root: classes.editBttnLabel}}/>
                                    </Button>
                                    <Popper id={`popper-phase-editsit`} open={openedPopoverId === 'popper-phase-editsit'} anchorEl={anchorEl} transition>
                                      {({ TransitionProps }) => (
                                        <Fade {...TransitionProps} timeout={350}>
                                          <Paper classes={{root: classes.paper}}>
                                            <Typography>Edit Situation</Typography>
                                          </Paper>
                                        </Fade>
                                      )}
                                    </Popper>
                                  </Grid>
                                  <Grid item>
                                    <NavigateNext nativeColor="#f55858" classes={{ root: classes.editNext }} />
                                  </Grid>
                                </Grid>
                              </ListItemSecondaryAction>
                               : null}

                          </ListItem>
                          <Popper id={`popper-phase-sitdoc`} open={openedPopoverId === 'popper-phase-sitdoc'} anchorEl={anchorEl} transition>
                            {({ TransitionProps }) => (
                              <Fade {...TransitionProps} timeout={350}>
                                <Paper classes={{root: classes.paper}}>
                                  <Typography>View info about Phases</Typography>
                                </Paper>
                              </Fade>
                            )}
                          </Popper>
                        </React.Fragment>
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
                              No situations found.
                              <Button
                                type="text"
                                aria-label="Add Situation"
                                onClick={e => updatePoint(null, pointIndex,'addSituation', stratIndex, pIndex, null, null, null)}
                                classes={{root: classes.addBttn }}
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
            })}
            {phases.length === 0 &&
              <Typography
                variant='subtitle1'
                align='left'
                color='textPrimary'
                gutterBottom
              >
                No phases found.
                <Button
                  type="text"
                  aria-label="Add Phase"
                  onClick={e => updatePoint(null, pointIndex,'addPhase', stratIndex, 0, null, null, null)}
                >
                  <AddIcon /> Phase
                </Button>
              </Typography>
            }
          </List>
        </Collapse>
      </React.Fragment>
    )
  }
  handleSitClick (e, pIndex, index, situationItem) {
    e.preventDefault;
    this.props.handleSelectSit(pIndex, index)
    this.props.setSituation(situationItem, index, 'Conditions')
  }

  handlePopoverOpen (e, popoverId) {
    this.setState({ anchorEl: e.currentTarget, openedPopoverId: popoverId });
  };

  handlePopoverClose () {
    this.setState({ anchorEl: null, openedPopoverId: null });
  };
}

export default withStyles(styles)(PhasePoints);
