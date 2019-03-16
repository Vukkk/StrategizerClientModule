import React, { Component } from 'react';
import { Typography } from '@material-ui/core';

import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

import ManageItem from './ManageItem';

import Strategies from './mocks';

class ManageList extends Component {
  render() {
    const { classes } = this.props;
    const data = Strategies.subStrategies;
    console.log(data);
    const strategies = data.map((strategy, index) => (
      <ManageItem key={index} strategy={strategy} />
    ));
    return (
      <div className='container'>
        {strategies}
      </div>
    );
  }
}

export default withStyles(styles)(ManageList);
