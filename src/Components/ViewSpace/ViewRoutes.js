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
import PhaseDoc from './PhaseDoc';
import SituationDoc from './SituationDoc';

import {
  Introduction,
  Strategies,
  SubStrategies,
  Points,
  Phases,
  Situations,
  Conditions,
  StrategyEvents
} from './docs'

export class ViewRoutes extends React.Component {
  render () {
    const { classes, view, ...other } = this.props;
    switch (view) {
      case 'Strategies':
        return <DocOnly content={Strategies} {...other} />;
        break;
      case 'Strategy Events':
        return <DocOnly content={StrategyEvents} {...other} />;
        break;
      case 'Substrategies':
        return <StrategyDoc content={SubStrategies} {...other} />;
        break;
      case 'Points':
        return <DocOnly content={Points} {...other} />;
        break;
      case 'Phase Code':
      case 'Phases':
        return <PhaseDoc content={Phases} view={view} {...other} />;
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
