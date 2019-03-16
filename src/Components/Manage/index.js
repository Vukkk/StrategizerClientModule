import React, { Component } from 'react';
import { Typography } from '@material-ui/core';

import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

import ManageItem from './ManageItem';

import Strategies from '../../Graphql/mocks';

class ManageList extends Component {
  render() {
    const { classes } = this.props;
    const data = Strategies.subStrategies;
    const strategies = data.map((strategy, index) => (
      <ManageItem key={index} index={index} strategy={strategy} />
    ));
    return (
      <div className='container'>
        {strategies}
      </div>
    );
  }
}

export default withStyles(styles)(ManageList);
