import React from 'react';
import ReactMarkdown from 'react-markdown';

import styles from './styles';
import { withStyles } from '@material-ui/core/styles';

import {
  Paper,
  Grid
} from '@material-ui/core';

import DocOnly from './DocOnly';
import IntroductionOnly from './Introduction';
import StrategyDoc from './StrategyDoc';
import PhaseDoc from './PhaseDoc';
import SituationDoc from './SituationDoc';
import ConditionDoc from './Conditions';
import APIDocs from './API';

import {
  Introduction,
  Strategies,
  SubStrategies,
  Points,
  Phases,
  Situations,
  Conditions,
  ConditionApi,
  PhaseApi,
  StrategyEvents,
  TradeEvents,
  TriggerOn,
  TriggerOff,
  EntryPoint,
  TakeProfit,
  StopLoss,
  TypesOfAlgobots,
  StrategySources
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
      case 'Strategy Sources':
        return <DocOnly content={StrategySources} {...other} />;
        break;
      case 'Types of Algobots':
        return <DocOnly content={TypesOfAlgobots} {...other} />;
        break;
      case 'Trade Events':
        return <DocOnly content={TradeEvents} {...other} />;
        break;
      case 'Trigger On':
        return <DocOnly content={TriggerOn} {...other} />;
        break;
      case 'Trigger Off':
        return <DocOnly content={TriggerOff} {...other} />;
        break;
      case 'EntryPoint':
        return <DocOnly content={EntryPoint} {...other} />;
        break;
      case 'TakeProfit':
        return <DocOnly content={TakeProfit} {...other} />;
        break;
      case 'StopLoss':
        return <DocOnly content={StopLoss} {...other} />;
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
        return <ConditionDoc content={Conditions} {...other} view={view} />;
        break;
      case 'Conditions Api':
        return <APIDocs content={ConditionApi} {...other} view={view} />;
        break;
      case 'Phases Api':
        return <APIDocs content={PhaseApi} {...other} view={view} />;
        break;
      case 'Introduction':
      default:
        return <IntroductionOnly content={Introduction} {...other} />;
    }
  }
}

export default withStyles(styles)(ViewRoutes);
