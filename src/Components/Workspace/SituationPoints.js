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

export const SituationPoints = ({
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
  selected
 }) => {
   const situations = points[pointIndex].situations;
   return (
      <React.Fragment>
        <ListItem
          button
          key={`point-${index}`}
          onClick={e => handleOpenPoint(e, pointIndex)}
          className={classes.strategyItem}
          selected={selected}
          classes={{root: classes.itemTopTier, selected: classes.itemTopTierSelected}}
        >
          <ListItemText
            primary={entryName}
          />
          {openPoint === pointIndex ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openPoint === pointIndex} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {situations.length > 0 && situations.map((situationItem, index) => {
              console.log('situationItem', situationItem);
              return (
                <ListItem
                  button
                  className={classes.nested}
                  classes={{root: classes.itemFirstTier, selected: classes.itemFirstTierSelected}}
                  key={`situation-${index}`}
                  onClick={e => setSituation(situationItem)}
                  dense
                  selected={situation.name === situationItem.name}
                  divider
                >
                  <ListItemText
                    primary={situationItem.name}
                  />
                  {situation.name === situationItem.name ? <NavigateNext nativeColor="#f55858" /> : null}
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
                No situations have been created for this section.
              </Typography>
            }
          </List>
        </Collapse>
      </React.Fragment>
    )
}

export default withStyles(styles)(SituationPoints);
