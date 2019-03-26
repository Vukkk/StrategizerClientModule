import React from 'react';
import { graphql, compose } from 'react-apollo';
import { Link } from 'react-router-dom';

import {
  Grid, Paper,
  Typography,
  Button,
} from '@material-ui/core';
import BannerTopBar from '../BannerTopBar';

import { isDefined, isNull } from '../../utils';

import { LIST_STRATEGIES, CREATE_STRATEGY, SAVE_STRATEGY } from '../../GraphQL/Strategies'

import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

import { Loading } from '../Common';
import Layout from './Layout';

export class HocStrategies extends React.Component {
  render () {
    const { listStrategies, createStrategy, saveStrategy} = this.props;
    if(listStrategies.loading || isNull(listStrategies) || !isDefined(listStrategies.teams_TeamsByOwner)) {
      return (
        <Loading text="Strategy Workspace" />
      );
    } else {
      return (
        <Layout
          listStrategies={listStrategies}
          createStrategy={createStrategy}
          saveStrategy={saveStrategy}
        />
      );
    }
  }
}

export default compose(
  graphql(CREATE_STRATEGY, { name: 'createStrategy' }),
  graphql(SAVE_STRATEGY, { name: 'saveStrategy' }),
  graphql(LIST_STRATEGIES, {
    name: 'listStrategies',
    options: {
      errorPolicy: 'all',
      fetchPolicy: 'network-only'
    }}
  )
)(HocStrategies);
