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
  }
});

export class Strategies extends React.Component {
  render () {
    const { classes, strategies, strategy, setStrategy, updatePoint, setView } = this.props;
    console.log('strategies: ', strategies, strategy);
    return (
      <React.Fragment>
        <ListItem className={classes.root} dense>
          <ListItemText
            primary="Strategies"
            primaryTypographyProps={{variant:'subtitle1'}}
            classes={{root: classes.itemTitleRoot, primary: classes.primary}}
            onClick={e => setView(e, 'Strategies')}
          />
          <ListItemSecondaryAction>
            <Button
              aria-label="Add Strategy"
              onClick={e => updatePoint(null, null,'addStrategy', null, null, null, null, null)}
            >
              <AddIcon />
            </Button>
          </ListItemSecondaryAction>
        </ListItem>
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
      </React.Fragment>
    )
  }
}

export default withStyles(styles)(Strategies);
