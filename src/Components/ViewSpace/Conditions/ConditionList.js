import React from 'react';
import ReactMarkdown from 'react-markdown';

import styles from '../styles';
import { withStyles } from '@material-ui/core/styles';

import {
  Card,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Button
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

import { slugify } from '../../../utils';

import ConditionView from './ConditionView'

export class ConditionList extends React.Component {
  constructor(props){
    super(props);

    this.toggleEdit = this.toggleEdit.bind(this)

    this.state={
      edit: false
    }
  }
  render () {
    const {
      classes,
      content,
      situation,
      stratIndex,
      pointIndex,
      phaseIndex,
      situationIndex,
      updatePoint,
      toggleEdit,
      handleChangeDoc,
      selected
    } = this.props;
    const { name, conditions } = situation;

    return (
      <Card>
        <List disablePadding>
          <ListItem key={`condition-title`} classes={{ root:classes.condRoot }} >
            <ListItemText
              primary={`Situation ${name}`}
              primaryTypographyProps={{variant:'subtitle1'}}
              classes={{root: classes.itemTitleRoot, primary: classes.primary}}
              onClick={e => this.handleOpen(e)}
            />
            {!this.state.edit  &&
              <ListItemSecondaryAction>
                <Button
                  type="text"
                  aria-label="Add Condition"
                  onClick={e => updatePoint(null, pointIndex,'addCondition', stratIndex, phaseIndex, situationIndex, null, null)}
                >
                  <AddIcon />
                </Button>
              </ListItemSecondaryAction>
            }
          </ListItem>
          {conditions.length > 0 &&
            conditions.map((condition, condIndex) => (
              <ConditionView
                key={`condition-${condIndex}`}
                condition={condition}
                pointIndex={pointIndex}
                index={condIndex}
                phaseIndex={phaseIndex}
                situationIndex={situationIndex}
                conditionIndex={condIndex}
                updatePoint={updatePoint}
                classes={classes}
                edit={this.state.edit}
                toggleEdit={this.toggleEdit}
                handleChangeDoc={handleChangeDoc}
                selected={selected}
              />
            ))
          }
          {conditions.length === 0 &&
            <ListItem key={`condition-no-conditions`} >
              <ListItemText inset >
                No conditions for this situation.
                <Button
                  type="text"
                  aria-label="Add Condition"
                  onClick={e => updatePoint(null, pointIndex,'addCondition', stratIndex, phaseIndex, situationIndex, null, null)}
                >
                  <AddIcon /> Condition
                </Button>
              </ListItemText>
            </ListItem>
          }
        </List>
      </Card>
    )
  }

  toggleEdit (e, type) {
    this.setState(state => ({ edit: type }));
  }
}

export default withStyles(styles)(ConditionList);
