import React from 'react';
import { Query } from 'react-apollo';

import {
  Typography,
  AppBar,
  Tabs,
  Tab,
} from '@material-ui/core';
import {
  ViewModule as ManageIcon,
} from '@material-ui/icons';

import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

import BannerTopBar from './BannerTopBar';

// import { listStrategies } from '../../GraphQL/Strategies';

import {
  Manage,
  // Add
} from './Tabs';

function TabContainer(props) {
  return (
    <Typography component='div' style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

class Strategizer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }

  handleChange = (event, value) => {
    this.setState({ value });
  }

  render() {
    const { classes } = this.props;
    const { value } = this.state;
    return (
      <React.Fragment>
        <BannerTopBar
          size='medium'
          title='Strategizer'
          text='Manage all of your Algobot Trading Strategies'
          backgroundUrl='https://superalgos.org/img/photos/events.jpg'
        />
            <div className={classes.root}>
              <AppBar position='static' color='default'>
                <Tabs
                  value={value}
                  onChange={this.handleChange}
                  variant="scrollable"
                  scrollButtons='off'
                  indicatorColor='primary'
                  textColor='primary'
                >
                  <Tab
                    className={classes.tabTitle}
                    label='Manage Strategies'
                    icon={<ManageIcon />}
                  />
                </Tabs>
              </AppBar>
              {value === 0 && <TabContainer><Manage /></TabContainer>}
            </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Strategizer);
