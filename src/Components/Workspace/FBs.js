import React from 'react';

import { withStyles } from '@material-ui/core/styles';

import {
  Grid,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Collapse,
  Avatar,
  IconButton,
  Typography,
  Divider
} from '@material-ui/core';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Selected from '@material-ui/icons/Check';

const styles = theme => ({
  root: {
    backgroundColor: '#FFF',
    '&:hover':{
      backgroundColor: '#DDD'
    }
  },
  primary:{
    color: '#888',
    fontSize: 12,
    '&:hover':{
      color: '#666'
    }
  },
  nested: {
    paddingLeft: theme.spacing.unit * 3,
  },
  strategyAvatar: {
    margin: 0,
    width: 18,
    height: 18,
  },
  strategyItem: {
    width: '100%'
  },
});

export class FBs extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      openFbs: false,
    }
  }

  render () {
    const { classes, fbs, fb, setFB } = this.props;
    console.log('FBs: ', fbs, fb);
    console.log(this.state);
    return (
      <React.Fragment>
        <ListItem button onClick={this.handleViewFbs} classes={{root: classes.root}}>
          <ListItemAvatar>
            <Avatar src={fb.avatar} className={classes.strategyAvatar} />
          </ListItemAvatar>
          <ListItemText
            primary={`FB: ${fb.name}`}
            classes={{primary: classes.primary}}
          />
          {this.state.openFbs
             ? <ExpandLess classes={{root: classes.primary}} /> : <ExpandMore classes={{root: classes.primary}} />}
        </ListItem>
        <Collapse in={this.state.openFbs} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {fbs && fbs.map((fbItem, index) => {
              return (
                <ListItem
                  button
                  className={classes.nested}
                  key={`fb-${index}`}
                  onClick={e => setFB(fbItem)}
                  dense
                >
                  <ListItemAvatar>
                    <Avatar src={fbItem.avatar} className={classes.strategyAvatar} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={fbItem.name}
                  />
                  {fb.slug === fbItem.slug ? <Selected nativeColor="#9ccc65" /> : null}
                </ListItem>
              )
            })}
          </List>
        </Collapse>
        <Divider />
      </React.Fragment>
    )
  }

  handleViewFbs = () => {
    this.setState(state => ({ openFbs: !state.openFbs }));
  };
}

export default withStyles(styles)(FBs);
