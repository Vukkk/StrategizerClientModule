import React from 'react';
import ReactMarkdown from 'react-markdown';

import styles from './styles';
import { withStyles } from '@material-ui/core/styles';

import {
  Paper,
  Grid
} from '@material-ui/core';

import DocOnly from './DocOnly';
import StrategyDoc from './StrategyDoc';

import {
  Introduction,
  Strategies,
  SubStrategies
} from './docs'

export class ViewRoutes extends React.Component {
  render () {
    const { classes, view, ...other } = this.props;
    console.log('ViewRoutes:', view);
    switch (view) {
      case 'Strategies':
        return <DocOnly content={Strategies} {...other} />;
        break;
      case 'Substrategies':
        return <StrategyDoc content={SubStrategies} {...other} />;
        break;
      case 'Introduction':
      default:
        return <DocOnly content={Introduction} {...other} />;
    }
  }
}

export default withStyles(styles)(ViewRoutes);
