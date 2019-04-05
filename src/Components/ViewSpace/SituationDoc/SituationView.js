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
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

import { slugify } from '../../../utils';

export class SituationView extends React.Component {
  constructor(props){
    super(props);

    this.state={
      name: props.situation.name
    }
  }
  render () {
    const { classes, content, situation, stratIndex, pointIndex, situationIndex, updatePoint, toggleEdit } = this.props;
    console.log('DocOnly:', this.props);
    return (
      <Card>
        <List>
          <ListItem>
            <ListItemText primary={`Situation Name: ${situation.name}`} />
            <ListItemSecondaryAction>
              <IconButton aria-label="Edit Situation Name" onClick={e => toggleEdit(e)}>
                <EditIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
          <ListItem>
            <ListItemText primary={'Warning: This will delete all nested conditions'} />
            <ListItemSecondaryAction>
              <Button
                variant="outlined"
                size="small"
                aria-label="Delete Situation"
                onClick={e => updatePoint(null, pointIndex,'deleteSituation', stratIndex, null, situationIndex, null, null)}
              >
                <DeleteIcon /> Delete Situation
              </Button>
            </ListItemSecondaryAction>
          </ListItem>
        </List>
      </Card>
    )
  }
}

export default withStyles(styles)(SituationView);
