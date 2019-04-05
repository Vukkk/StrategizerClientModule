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

export class PhaseView extends React.Component {
  constructor(props){
    super(props);

    this.state={
      name: props.situation.name
    }
  }
  render () {
    const { classes, content, stratIndex, pointIndex, phase, phaseIndex, updatePoint, toggleEdit } = this.props;
    console.log('DocOnly:', this.props);
    return (
      <List>
        <ListItem>
          <ListItemText primary={`Phase Name: ${phase.name}`} />
          <ListItemSecondaryAction>
            <IconButton aria-label="Edit Phase Name" onClick={e => toggleEdit('name')}>
              <EditIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
        <ListItem>
          <ListItemText primary={`Phase Code: ${phase.code}`} />
          <ListItemSecondaryAction>
            <IconButton aria-label="Edit Phase Code" onClick={e => toggleEdit('code')}>
              <EditIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
        <ListItem>
          <ListItemText primary={'Warning: This will delete all nested situations & conditions'} />
          <ListItemSecondaryAction>
            <Button
              variant="outlined"
              size="small"
              aria-label="Delete Phase"
              onClick={e => updatePoint(null, pointIndex,'deletePhase', stratIndex, phaseIndex, null, null, null)}
            >
              <DeleteIcon /> Delete Situation
            </Button>
          </ListItemSecondaryAction>
        </ListItem>
      </List>
    )
  }
}

export default withStyles(styles)(PhaseView);
