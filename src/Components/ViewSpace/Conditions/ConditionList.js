import React from 'react';

import {
  Card,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Typography,
  Button,
  Popper,
  Paper,
  Fade,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { withStyles } from '@material-ui/core/styles';
import styles from '../styles';

import { ConditionView } from './ConditionView';

export class ConditionList extends React.Component {
  constructor(props) {
    super(props);

    this.toggleEdit = this.toggleEdit.bind(this);
    this.handlePopoverOpen = this.handlePopoverOpen.bind(this);
    this.handlePopoverClose = this.handlePopoverClose.bind(this);

    this.state = {
      edit: false,
      anchorEl: null,
      openedPopoverId: null,
    };
  }

  render() {
    const {
      classes,
      situation,
      stratIndex,
      pointIndex,
      phaseIndex,
      situationIndex,
      updatePoint,
      handleChangeDoc,
      selected,
      setView,
    } = this.props;
    const { name, conditions } = situation;
    const { openedPopoverId, anchorEl } = this.state;

    return (
      <Card>
        <List disablePadding>
          <ListItem key={'view-situation-title'} classes={{ root: classes.condRoot }} >
            <ListItemText
              primary={`Situation ${name}`}
              primaryTypographyProps={{ variant: 'subtitle1' }}
              classes={{ root: classes.itemTitleRoot, primary: classes.primary }}
              onClick={e => setView(e, 'Situations')}
            />
            {!this.state.edit
            && <ListItemSecondaryAction>
              <Button
                type="text"
                aria-label="Add Condition"
                onClick={() => updatePoint(null, pointIndex, 'addCondition', stratIndex, phaseIndex, situationIndex, null, null)}
                onMouseEnter={e => this.handlePopoverOpen(e, 'popper-condition-add')}
                onMouseLeave={this.handlePopoverClose}
              >
                <AddIcon />
              </Button>
              <Popper id={'popper-condition-add'} open={openedPopoverId === 'popper-condition-add'} anchorEl={anchorEl} transition>
                {({ TransitionProps }) => (
                  <Fade {...TransitionProps} timeout={350}>
                    <Paper classes={{ root: classes.paper }}>
                      <Typography>Add a condition</Typography>
                    </Paper>
                  </Fade>
                )}
              </Popper>
            </ListItemSecondaryAction>
            }
          </ListItem>
          {conditions.length > 0
          && conditions.map((condition, condIndex) => (
            <ConditionView
              key={`condition-${condIndex}`}
              condition={condition}
              pointIndex={pointIndex}
              index={condIndex}
              stratIndex={stratIndex}
              phaseIndex={phaseIndex}
              situationIndex={situationIndex}
              conditionIndex={condIndex}
              updatePoint={updatePoint}
              classes={classes}
              edit={this.state.edit}
              toggleEdit={this.toggleEdit}
              handleChangeDoc={handleChangeDoc}
              selected={selected}
              handlePopoverOpen={this.handlePopoverOpen}
              handlePopoverClose={this.handlePopoverClose}
              anchorEl={this.state.anchorEl}
              openedPopoverId={this.state.openedPopoverId}
            />
          ))
          }
          {conditions.length === 0
          && <ListItem key={'condition-no-conditions'} >
            <ListItemText inset >
              No conditions for this situation.
              <Button
                type="text"
                aria-label="Add Condition"
                onClick={() => updatePoint(null, pointIndex, 'addCondition', stratIndex, phaseIndex, situationIndex, null, null)}
              >
                <AddIcon /> Condition
              </Button>
            </ListItemText>
          </ListItem>
          }
        </List>
      </Card>
    );
  }

  toggleEdit(e, type) {
    if (type === 'code') this.props.setView(e, 'Conditions Code');
    this.setState(state => ({ edit: type }));
  }

  handlePopoverOpen(e, popoverId) {
    this.setState({ anchorEl: e.currentTarget, openedPopoverId: popoverId });
  }

  handlePopoverClose() {
    this.setState({ anchorEl: null, openedPopoverId: null });
  }
}

export default withStyles(styles)(ConditionList);
