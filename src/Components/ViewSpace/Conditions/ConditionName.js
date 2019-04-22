import React from 'react';
import ReactMarkdown from 'react-markdown';

import styles from '../styles';
import { withStyles } from '@material-ui/core/styles';

import {
  Card,
  Grid,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Button
} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import ExpandMore from '@material-ui/icons/ExpandMore';

import { slugify } from '../../../utils';

export class ConditionName extends React.Component {
  render () {
    console.log('ConditionName: ', this.props)
    const {
      classes,
      content,
      condition,
      stratIndex,
      pointIndex,
      phaseIndex,
      situationIndex,
      conditionIndex,
      updatePoint,
      toggleEdit,
      handleChangeDoc,
      selected
    } = this.props;

    let open = selected === conditionIndex;
    console.log('ConditionName: ', this.props.condition)
    return (
      <ListItem
        button
        key={`condition-${conditionIndex}`}
        onClick={e => handleChangeDoc(e, 'Conditions', conditionIndex)}
        className={classes.strategyItem}
        selected={selected === conditionIndex}
        classes={{root: classes.itemTopTier, selected: classes.itemTopTierSelected}}
      >
        <ListItemText
          primary={`Condition: ${condition.name}`}
          className={classes.condItemText}
        />
        {open  &&
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
                aria-label="Edit Condition"
                classes={{ root: classes.editBttn }}
                onClick={e => toggleEdit(e, 'name')}
              >
                <EditIcon classes={{root: classes.editBttnLabel}} />
              </Button>
            </Grid>
            <Grid item>
              <Button
                size="small"
                aria-label="Delete Condition"
                classes={{ root: classes.editBttn }}
                onClick={e => updatePoint(null, pointIndex,'deleteCondition', stratIndex, phaseIndex, situationIndex, conditionIndex, null)}
              >
                <DeleteIcon classes={{root: classes.editBttnLabel}} />
              </Button>
            </Grid>
          </Grid>
        }
        {open ? null : <ExpandMore />}
      </ListItem>
    )
  }
}

export default ConditionName;
