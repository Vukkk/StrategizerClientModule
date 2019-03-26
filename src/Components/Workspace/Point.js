import React from 'react';
import { Link } from 'react-router-dom';

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

import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import NavigateNext from '@material-ui/icons/NavigateNext';
import Edit from '@material-ui/icons/Edit';

class Point extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      openPoint: false,
    }
  }
  render() {
    const {
      classes,
      index,
      entryName,
      pointIndex,
      points,
      point,
      phase,
      situation,
      setPoint,
      setPhase,
      setSituation,
      updatePoint,
      openPoint,
      handleViewPoint
    } = this.props;
    console.log('Point :', entryName, openPoint, pointIndex, points, point, phase, situation);
    console.log('Point Situations:', points[pointIndex]);
    let situations = points[pointIndex];
    return (
      <React.Fragment>
        <ListItem
          button
          key={`point-${index}`}
          onClick={e => handleViewPoint(e, pointIndex)}
          className={classes.strategyItem}
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
                  key={`situation-${index}`}
                  onClick={e => setSituation(situationItem)}
                  dense
                >
                  <ListItemText
                    primary={situationItem.name}
                  />
                  <ListItemSecondaryAction>
                    <IconButton aria-label="Edit">
                      <Edit />
                    </IconButton>
                  </ListItemSecondaryAction>
                  {situation.name === situationItem.name ? <NavigateNext nativeColor="#9ccc65" /> : null}
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
    );
  }
}

export default withStyles(styles)(Point);
