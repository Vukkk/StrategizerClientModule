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
  ListItemSecondaryAction
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
  }

  render () {
    const {
      classes,
      index,
      entryName,
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
   return (
      <React.Fragment>
        <ListItem
          button
          key={`point-phase-${pointIndex}`}
          onClick={e => this.props.handleOpenPoint(e, this.props.pointIndex, 'Points')}
          className={classes.strategyItem}
          classes={{root: classes.itemTopTier, selected: classes.itemTopTierSelected}}
          selected={selected}
        >
          <ListItemText
            primary={entryName}
          />
          {selected &&
            <ListItemSecondaryAction>
              <Button
                aria-label="Add Phase"
                onClick={e => updatePoint(null, pointIndex,'addPhase', null, null, null, null, null)}
              >
                <AddIcon />
              </Button>
            </ListItemSecondaryAction>
          }
          {openPoint === pointIndex ? null : <ExpandMore />}
        </ListItem>
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
                                  onClick={e => updatePoint(null, pointIndex,'addSituation', null, pIndex, null, null, null)}
                                >
                                  <AddIcon />
                                </Button>
                              </Grid>
                              <Grid item>
                                <Button
                                  size="small"
                                  aria-label="Edit Phase"
                                  classes={{ root: classes.editBttn }}
                                  onClick={e => setPhase(phaseItem, pIndex, 'Phases')}
                                >
                                  <EditIcon nativeColor={view === "Situations" ? "#f55858" : "#777"} classes={{root: classes.editBttnLabel}}/>
                                </Button>
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
                  <Collapse key={`phase-collapse-${pIndex}`} in={openPhase === pIndex} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      {situations.length > 0 && situations.map((situationItem, index) => {
                        return (
                          <ListItem
                            button
                            className={classes.nestedSituation}
                            classes={{root: classes.itemSecondTier, selected: classes.itemSecondTierSelected}}
                            key={`situation-${index}`}
                            onClick={e => this.handleSitClick(e, pIndex, index, situationItem)}
                            dense
                            selected={selectedSit === index}
                            divider
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
                                    >
                                      <EditIcon nativeColor={view === "Situations" ? "#f55858" : "#777"} classes={{root: classes.editBttnLabel}}/>
                                    </Button>
                                  </Grid>
                                  <Grid item>
                                    <NavigateNext nativeColor="#f55858" classes={{ root: classes.editNext }} />
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
                              No situations found.
                              <Button
                                type="text"
                                aria-label="Add Situation"
                                onClick={e => updatePoint(null, pointIndex,'addSituation', null, pIndex, null, null, null)}
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
                  onClick={e => updatePoint(null, pointIndex,'addPhase', null, 0, null, null, null)}
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
}

export default withStyles(styles)(PhasePoints);
