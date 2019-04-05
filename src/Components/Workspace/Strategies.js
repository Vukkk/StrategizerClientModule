import React from 'react';

import { withStyles } from '@material-ui/core/styles';

import {
  Grid,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  ListItemSecondaryAction,
  Collapse,
  Avatar,
  IconButton,
  Typography,
  Switch,
  Button
} from '@material-ui/core';
import NavigateNext from '@material-ui/icons/NavigateNext';
import AddIcon from '@material-ui/icons/Add';
import HelpIcon from '@material-ui/icons/Help';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

const styles = theme => ({
  root: {
    backgroundColor: '#888',
    '&:hover':{
      backgroundColor: '#444'
    },
    cursor:'pointer'
  },
  itemTitleRoot: {
    backgroundColor: 'none'
  },
  itemFirstTier:{
    backgroundColor: '#CCC'
  },
  primary:{
    color: '#fff',
    backgroundColor: 'none',
    fontWeight: '700',
    textTransform: 'uppercase'
  },
  nested: {
    paddingLeft: theme.spacing.unit * 3,
  },
  editNext:{
    paddingTop: 10,
    paddingRight: 0,
    fontSize: 36,
  },
  editBttnContainer:{
    paddingRight: 5,
  },
  editBttn:{
    color: '#444',
    padding: 0,
    minWidth: 32,
  },
  editBttnLabel:{
    fontSize: 20,
  }
});

export class Strategies extends React.Component {
  constructor (props) {
    super(props);

    this.handleOpen = this.handleOpen.bind(this);

    this.state = {
      open: false,
    }
  }
  render () {
    const { classes, strategies, strategy, setStrategy, updatePoint, setView, selectedStrategies } = this.props;
    let open =  this.state.open;
    console.log('strategies: ', strategies, strategy, open);


    return (
      <React.Fragment>
        <ListItem className={classes.root} dense>
          <ListItemText
            primary="Strategies"
            primaryTypographyProps={{variant:'subtitle1'}}
            classes={{root: classes.itemTitleRoot, primary: classes.primary}}
            onClick={e => this.handleOpen(e)}
          />
          <ListItemSecondaryAction>
            <Grid
              item
              container
              direction="row"
              justify="flex-end"
              alignItems="center"
              className={classes.editBttnContainer}
            >
              {open ? (
                <React.Fragment>
                  <Grid item>
                    <Button
                      aria-label="Add Strategy"
                      onClick={e => updatePoint(null, null,'addStrategy', null, null, null, null, null)}
                      classes={{ root: classes.editBttn }}
                    >
                      <AddIcon classes={{ root: classes.editBttnLabel }} />
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      aria-label="View/Hide Strategies"
                      onClick={e => this.handleOpen(e)}
                      classes={{ root: classes.editBttn }}
                    >
                      <ExpandMore classes={{ root: classes.editBttnLabel }} />
                    </Button>
                  </Grid>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <Grid item>
                    <Button
                      aria-label="View Introduction"
                      onClick={e => this.props.setView(e, 'Introduction')}
                      classes={{ root: classes.editBttn }}
                    >
                      <HelpIcon classes={{ root: classes.editBttnLabel }} />
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      aria-label="View/Hide Strategies"
                      onClick={e => this.handleOpen(e)}
                      classes={{ root: classes.editBttn }}
                    >
                      <ExpandLess classes={{ root: classes.editBttnLabel }} />
                    </Button>
                  </Grid>
                </React.Fragment>
              )}
            </Grid>
          </ListItemSecondaryAction>
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          {strategies && strategies.map((strategyItem, index) => {
            return (
              <ListItem
                button
                className={classes.nested}
                classes={{root: classes.itemFirstTier}}
                key={`strategy-${index}`}
                onClick={e => setStrategy(strategyItem, 'Substrategies', index)}
                selected={strategy.name === strategyItem.name ? true : false}
              >
                <ListItemText
                  primary={strategyItem.name}
                />
                <ListItemSecondaryAction>
                  <Switch
                    onChange={e => updatePoint(!strategyItem.active, index,'updateStrategy', null, null, null, null, 'active')}
                    checked={strategyItem.active}
                  />
                </ListItemSecondaryAction>
              </ListItem>
            )
          })}
        </Collapse>
      </React.Fragment>
    )
  }
  handleOpen (e) {
    e.preventDefault;
    this.props.setView(e, 'Strategies')
    this.setState({ open: !this.state.open })
  }
}

export default withStyles(styles)(Strategies);
