import React from 'react';

import styles from './styles';
import { withStyles } from '@material-ui/core/styles';

import {
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

export const PhasePoints = ({
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
  selected
 }) => {
   const phases = points[pointIndex].phases;
   return (
      <React.Fragment>
        <ListItem
          button
          key={`point-phase-${pointIndex}`}
          onClick={e => handleOpenPoint(e, pointIndex)}
          className={classes.strategyItem}
          classes={{root: classes.itemTopTier, selected: classes.itemTopTierSelected}}
          selected={selected}
        >
          <ListItemText
            primary={entryName}
          />
          {openPoint === pointIndex ? null : <ExpandMore />}
        </ListItem>
        <Collapse in={openPoint === pointIndex} timeout="auto" unmountOnExit>
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
                      handleOpenPhase(e, pIndex, phaseItem);
                    }}
                    dense
                    selected={phaseIndex === pIndex}
                    divider
                  >
                    <ListItemText
                      primary={phaseItem.name}
                    />
                    {openPhase === pIndex ? null : <ExpandMore />}
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
                            onClick={e => setSituation(situationItem, index)}
                            dense
                            selected={situationIndex === index}
                            divider
                          >
                            <ListItemText
                              primary={situationItem.name}
                            />
                            {situationIndex === index ? <NavigateNext nativeColor="#f55858" /> : null}

                          </ListItem>
                        )
                      })}
                      {situations.length === 0 &&
                        <Typography
                          variant='subtitle1'
                          align='left'
                          color='textPrimary'
                          gutterBottom
                        >
                          No situations found.
                        </Typography>
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
              </Typography>
            }
          </List>
        </Collapse>
      </React.Fragment>
    )
}

export default withStyles(styles)(PhasePoints);
