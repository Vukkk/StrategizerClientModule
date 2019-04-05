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
import SituationDoc from './SituationDoc';

import {
  Introduction,
  Strategies,
  SubStrategies,
  Points,
  Phases,
  Situations,
  Conditions
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
      case 'Points':
        return <DocOnly content={Points} {...other} />;
        break;
      case 'Phases':
        return <DocOnly content={Phases} {...other} />;
        break;
      case 'Situations':
        return <SituationDoc content={Situations} {...other} />;
        break;
      case 'Conditions':
        return <DocOnly content={Conditions} {...other} />;
        break;
      case 'Introduction':
      default:
        return <DocOnly content={Introduction} {...other} />;
    }
  }
}

export default withStyles(styles)(ViewRoutes);
