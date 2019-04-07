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
      name: props.phase.name
    }
  }
  render () {
    const { classes, stratIndex, pointIndex, phase, phaseIndex, updatePoint, toggleEdit } = this.props;
    console.log('PhaseView:', this.props);

    const codeMkDown = `\`\`\`  ${phase.code}\`\`\``;
    return (
      <List>
        <Card>
          <ListItem>
            <ListItemText primary={`Phase Name: ${phase.name}`} />
            <ListItemSecondaryAction>
              <IconButton aria-label="Edit Phase Name" onClick={e => toggleEdit(e, 'name')}>
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
                <DeleteIcon /> Delete Phase
              </Button>
            </ListItemSecondaryAction>
          </ListItem>
        </Card>
        <Card className={classes.formPhaseCard}>
          <ListItem>
            <ListItemText primary='Phase Code:' />
            <div className={classes.codeRenderCont}><ReactMarkdown source={codeMkDown} className={classes.codeRender} /></div>
            <ListItemSecondaryAction>
              <IconButton aria-label="Edit Phase Code" onClick={e => toggleEdit(e, 'code')}>
                <EditIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </Card>
      </List>
    )
  }
}

export default withStyles(styles)(PhaseView);
