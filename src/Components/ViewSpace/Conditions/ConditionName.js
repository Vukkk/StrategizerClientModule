import React from 'react';

import {
  Grid,
  ListItem,
  ListItemText,
  Button,
  Typography,
  Popper,
  Paper,
  Fade,
} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import ExpandMore from '@material-ui/icons/ExpandMore';

export class ConditionName extends React.Component {
  render() {
    const {
      classes,
      condition,
      stratIndex,
      pointIndex,
      phaseIndex,
      situationIndex,
      conditionIndex,
      updatePoint,
      toggleEdit,
      handleChangeDoc,
      selected,
      handlePopoverOpen,
      handlePopoverClose,
      anchorEl,
      openedPopoverId,
    } = this.props;

    const open = selected === conditionIndex;
    return (
      <React.Fragment>
        <ListItem
        button
        key={`condition-${conditionIndex}`}
        onClick={e => handleChangeDoc(e, 'Conditions', conditionIndex)}
        className={classes.strategyItem}
        selected={selected === conditionIndex}
        classes={{ root: classes.itemTopTier, selected: classes.itemTopTierSelected }}
        onMouseEnter={e => handlePopoverOpen(e, 'popper-condition-view-docs')}
        onMouseLeave={handlePopoverClose}
      >
          <ListItemText
            primary={`Condition: ${condition.name}`}
            className={classes.condItemText}
          />
          {open && <Grid
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
                onMouseEnter={e => handlePopoverOpen(e, 'popper-condition-edit-name')}
                onMouseLeave={handlePopoverClose}
              >
                <EditIcon classes={{ root: classes.editBttnLabel }} />
              </Button>
              <Popper id={'popper-condition-edit-name'} open={openedPopoverId === 'popper-condition-edit-name'} anchorEl={anchorEl} transition>
                {({ TransitionProps }) => (
                  <Fade {...TransitionProps} timeout={350}>
                    <Paper classes={{ root: classes.paper }}>
                      <Typography>Edit condition name</Typography>
                    </Paper>
                  </Fade>
                )}
              </Popper>
            </Grid>
            <Grid item>
              <Button
                size="small"
                aria-label="Delete Condition"
                classes={{ root: classes.editBttn }}
                onClick={() => updatePoint(null, pointIndex, 'deleteCondition', stratIndex, phaseIndex, situationIndex, conditionIndex, null)}
                onMouseEnter={e => handlePopoverOpen(e, 'popper-condition-delete')}
                onMouseLeave={handlePopoverClose}
              >
                <DeleteIcon classes={{ root: classes.editBttnLabel }} />
              </Button>
              <Popper id={'popper-condition-delete'} open={openedPopoverId === 'popper-condition-delete'} anchorEl={anchorEl} transition>
                {({ TransitionProps }) => (
                  <Fade {...TransitionProps} timeout={350}>
                    <Paper classes={{ root: classes.paper }}>
                      <Typography>Delete condition</Typography>
                    </Paper>
                  </Fade>
                )}
              </Popper>
            </Grid>
          </Grid>
          }
          {open ? null : <ExpandMore />}
        </ListItem>
        <Popper
          id={'popper-condition-view-docs'}
          open={openedPopoverId === 'popper-condition-view-docs'}
          anchorEl={anchorEl}
          transition
          placement='bottom-start'
        >
          {({ TransitionProps }) => (
            <Fade {...TransitionProps} timeout={350}>
              <Paper classes={{ root: classes.paper }}>
                <Typography>Manage condition</Typography>
              </Paper>
            </Fade>
          )}
        </Popper>
      </React.Fragment>
    );
  }
}

export default ConditionName;
