import React from 'react';
import ReactMarkdown from 'react-markdown';

import styles from './styles';
import { withStyles } from '@material-ui/core/styles';

import {
  Paper,
  Grid
} from '@material-ui/core';

import IntroductionView from './Introduction';

import {
  Introduction,
  Strategies,
  SubStrategies
 } from './views'

export class ViewRoutes extends React.Component {
  render () {
    const { classes, view } = this.props;
    console.log('ViewRoutes:', view);
    switch (view) {
      case 'Strategies':
        return <IntroductionView content={Strategies} />;
        break;
      case 'Substrategies':
        return <IntroductionView content={SubStrategies} />;
        break;
      case 'Introduction':
      default:
        return <IntroductionView content={Introduction} />;
    }
  }
}

export default withStyles(styles)(ViewRoutes);
