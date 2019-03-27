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
  Switch
} from '@material-ui/core';
import NavigateNext from '@material-ui/icons/NavigateNext';

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
        </ListItem>
        {strategies && strategies.map((strategyItem, index) => {
          return (
            <ListItem
              button
              className={classes.nested}
              classes={{root: classes.itemFirstTier}}
              key={`strategy-${index}`}
              onClick={e => setStrategy(strategyItem)}
              selected={strategy.name === strategyItem.name ? true : false}
            >
              <ListItemText
                primary={strategyItem.name}
              />
              <ListItemSecondaryAction>
                <Switch
                  onChange={e => updatePoint(!strategyItem.active, index, null, 'updateStrategy', null, null, null, 'active')}
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
