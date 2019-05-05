import React from 'react';
import ReactMarkdown from 'react-markdown';

import {
  Grid,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Collapse,
  Button,
  Typography,
  Popper,
  Paper,
  Fade,
} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';

export class ConditionCode extends React.Component {
  render() {
    const {
      classes,
      condition,
      conditionIndex,
      toggleEdit,
      selected,
      handlePopoverOpen,
      handlePopoverClose,
      anchorEl,
      openedPopoverId,
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
                  onMouseEnter={e => handlePopoverOpen(e, 'popper-condition-edit-code')}
                  onMouseLeave={handlePopoverClose}
                >
                  <EditIcon classes={{ root: classes.editBttnLabel }} />
                </Button>
                <Popper id={'popper-condition-edit-code'} open={openedPopoverId === 'popper-condition-edit-code'} anchorEl={anchorEl} transition>
                  {({ TransitionProps }) => (
                    <Fade {...TransitionProps} timeout={350}>
                      <Paper classes={{ root: classes.paper }}>
                        <Typography>Edit condition code</Typography>
                      </Paper>
                    </Fade>
                  )}
                </Popper>
              </Grid>
            </Grid>
          </ListItemSecondaryAction>
        </ListItem>
      </Collapse>
    );
  }
}

export default ConditionCode;
