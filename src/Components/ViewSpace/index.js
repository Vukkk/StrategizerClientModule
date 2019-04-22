import React from 'react';
import ReactMarkdown from 'react-markdown';

import styles from './styles';
import { withStyles } from '@material-ui/core/styles';

import {
  Paper,
  Grid,
  Drawer,
  Button,
  List,
  Divider,
  ListSubheader,
  ListItem,
  ListItemText
} from '@material-ui/core';
import TocIcon from '@material-ui/icons/Toc';

import ViewRoutes from './ViewRoutes';

export class ViewSpace extends React.Component {
  constructor(props){
    super(props);

    this.toggleDrawer = this.toggleDrawer.bind(this);

    this.state = {
      right: false
    }
  }
  render () {
    const { classes, setView, view, ...other } = this.props;

    const sideList =  (
      <div className={classes.list}>
        <List
          component="nav"
          subheader={<ListSubheader component="div">Overview</ListSubheader>}
          className={classes.root}
        >
          <ListItem button key='item-introduction'>
            <ListItemText primary='Introduction' onClick={e => setView(e, 'Introduction')} />
          </ListItem>
          <ListItem button key='item-strategies'>
            <ListItemText primary='Strategies' onClick={e => setView(e, 'Strategies')} />
          </ListItem>

          <ListItem button key='item-strategy-sources'>
            <ListItemText primary='Strategy Sources' onClick={e => setView(e, 'Strategy Sources')} />
          </ListItem>
          <ListItem button key='item-stypes-algobots'>
            <ListItemText primary='Types of Algobots' onClick={e => setView(e, 'Types of Algobots')} />
          </ListItem>
        </List>
        <Divider />
        <List
          component="nav"
          subheader={<ListSubheader component="div">Events</ListSubheader>}
          className={classes.root}
        >
          <ListItem button key='item-strategy-events'>
            <ListItemText primary='Strategy Events' onClick={e => setView(e, 'Strategy Events')} />
          </ListItem>
          <ListItem button key='item-trade-events'>
            <ListItemText primary='Trade Events' onClick={e => setView(e, 'Trade Events')} />
          </ListItem>
          <ListItem button key='item-trigger-on'>
            <ListItemText primary='Trigger On' onClick={e => setView(e, 'Trigger On')} />
          </ListItem>
          <ListItem button key='item-trigger-off'>
            <ListItemText primary='Trigger Off' onClick={e => setView(e, 'Trigger Off')} />
          </ListItem>
          <ListItem button key='item-entry-point'>
            <ListItemText primary='Entry Point' onClick={e => setView(e, 'Entry Point')} />
          </ListItem>
          <ListItem button key='item-take-profit'>
            <ListItemText primary='Take Profit' onClick={e => setView(e, 'Take Profit')} />
          </ListItem>
          <ListItem button key='item-stop-loss'>
            <ListItemText primary='Stop Loss' onClick={e => setView(e, 'Stop Loss')} />
          </ListItem>
        </List>
        <Divider />
        <List
          component="nav"
          subheader={<ListSubheader component="div">Strategy Components</ListSubheader>}
          className={classes.root}
        >
          <ListItem button key='item-phases'>
            <ListItemText primary='Phases' onClick={e => setView(e, 'Phases')} />
          </ListItem>
          <ListItem button key='item-phase-api' dense classes={{ dense: classes.drawerInset }}>
            <ListItemText primary='Phase Commands' onClick={e => setView(e, 'Phase Api')} />
          </ListItem>
          <ListItem button key='item-situations'>
            <ListItemText primary='Situations' onClick={e => setView(e, 'Situations')} />
          </ListItem>
          <ListItem button key='item-conditions'>
            <ListItemText primary='Conditions' onClick={e => setView(e, 'Conditions')} />
          </ListItem>
          <ListItem button key='item-condition-api' dense classes={{ dense: classes.drawerInset }}>
            <ListItemText dense='true' primary='Condition Commands' classes={{ dense: classes.drawerInset }} onClick={e => setView(e, 'Condition Api')} />
          </ListItem>
        </List>
      </div>
    );

    return (
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="stretch"
      >
        <ViewRoutes view={view} setView={setView} toggleDrawer={this.toggleDrawer} {...other} />
        <Drawer anchor="right" open={this.state.right} onClose={e => this.toggleDrawer(e)}>
          <div
            tabIndex={0}
            role="button"
            onClick={e => this.toggleDrawer(e)}
            onKeyDown={e => this.toggleDrawer(e)}
          >
            {sideList}
          </div>
        </Drawer>
      </Grid>
    )
  }
  toggleDrawer (e) {
    e.preventDefault;
    this.setState({ right: !this.state.right });
  };
}

export default withStyles(styles)(ViewSpace);
