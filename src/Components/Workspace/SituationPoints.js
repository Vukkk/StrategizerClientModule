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
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';

export class SituationPoints extends React.Component {
  constructor (props) {
    super(props);

    this.handlePointClick = this.handlePointClick.bind(this);
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
   return (
      <React.Fragment>
        <ListItem
          button
          key={`point-${index}`}
          onClick={e => this.handlePointClick(e)}
          className={classes.strategyItem}
          selected={selected}
          classes={{root: classes.itemTopTier, selected: classes.itemTopTierSelected}}
        >
          <ListItemText
            primary={entryName}
          />
          {selected &&
            <ListItemSecondaryAction>
              <Button
                aria-label="Add Situation"
                onClick={e => updatePoint(null, pointIndex,'addSituation', null, null, null, null, null)}
              >
                <AddIcon />
              </Button>
            </ListItemSecondaryAction>
          }
          {openPoint === pointIndex ? null : <ExpandMore />}
        </ListItem>
        <Collapse in={openPoint === pointIndex} timeout="auto" unmountOnExit>
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
                    primary={situationItem.name}
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
                          >
                            <EditIcon nativeColor={view === "Situations" ? "#f55858" : "#777"} classes={{root: classes.editBttnLabel}}/>
                          </Button>
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

  handlePointClick (e) {
    e.preventDefault;
    this.props.handleOpenPoint(e, this.props.pointIndex)
    this.props.setView(e, 'Points')
  }
}

export default withStyles(styles)(SituationPoints);
