import React, { Component } from 'react'

import {
  Grid, Paper, Typography, Button, TextField, Dialog, DialogContent,
  DialogContentText, DialogTitle, DialogActions,
  ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary,
  ExpansionPanelActions, Chip, Divider

} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import classNames from 'classnames'
import { withStyles } from '@material-ui/core/styles'
import styles from './styles'

class ExpandItemWrapper extends Component {

  constructor (props) {
    super(props)
    this.state = {
      isRemoveDialogOpen: false,
      isLogsDialogOpen: false,
    }
  }

  render () {
    const { classes, sectionName, children, defaultExpanded } = this.props
    const clone = this.props.currentClone
    return (
      <ExpansionPanel className={classes.root} defaultExpanded={defaultExpanded} >
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <div className={classes.heading}>
            <Typography className={classes.heading}>{sectionName}</Typography>
          </div>
        </ExpansionPanelSummary>
        <Divider />
        <ExpansionPanelDetails className={classes.details}>
          {children}
        </ExpansionPanelDetails>
      </ExpansionPanel>
    )
  }


  showLogs () {
    this.setState({ isLogsDialogOpen: true })
  }

  handleLogsDialogClose = () => {
    this.setState({ isLogsDialogOpen: false })
  }

  handleRemoveDialogOpen = () => {
    this.setState({ isRemoveDialogOpen: true })
  }

  handleRemoveDialogOK = () => {
    this.removeClone(this.props.currentClone)
    this.setState({ isRemoveDialogOpen: false })
  }

  handleRemoveDialogCancel = () => {
    this.setState({ isRemoveDialogOpen: false })
  }
}

export default withStyles(styles)(ExpandItemWrapper)
