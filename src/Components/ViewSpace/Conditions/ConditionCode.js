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
  Collapse,
  IconButton,
  Button
} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

import { slugify } from '../../../utils';

export class ConditionCode extends React.Component {
  render () {
    console.log('ConditionCode: ', this.props);
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

    const codeMkDown = `\`\`\`  ${condition.code}\`\`\``;

    return (
      <Collapse in={selected === conditionIndex} timeout="auto" unmountOnExit>
        <ListItem key={`condition-code-${conditionIndex}`} >
          <ListItemText disableTypography>
            <div className={classes.codeRenderCont}><ReactMarkdown source={codeMkDown} className={classes.codeRender} /></div>
          </ListItemText>
          <ListItemSecondaryAction classes={{ root: classes.condButtonContainer }}>
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
                  onClick={e => toggleEdit(e, 'code')}
                >
                  <EditIcon classes={{root: classes.editBttnLabel}} />
                </Button>
              </Grid>
            </Grid>
          </ListItemSecondaryAction>
        </ListItem>
      </Collapse>
    )
  }
}

export default ConditionCode;
