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

import { LIST_STRATEGIES, SAVE_STRATEGY } from '../../GraphQL/Strategies'

import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

import { Loading } from '../Common';
import Layout from './Layout';

export class HocStrategies extends React.Component {
  render () {
    const { listStrategies, createStrategy, saveStrategy, setTeamFb} = this.props;
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
          setTeam={this.setTeam}
          setFb={this.setFb}
        />
      );
    }
  }
}

export default compose(
  graphql(LIST_STRATEGIES, {
    name: 'listStrategies',
    options: {
      errorPolicy: 'all',
      fetchPolicy: 'network-only'
    }}
  ),
  graphql(SAVE_STRATEGY, {
    name: 'saveStrategy',
    options: (props) => ({
      errorPolicy: 'all',
      // refetchQueries:[{query: LIST_STRATEGIES}]
      update: (proxy, { data: { strategizer_EditStrategy } }, ...other) => {
        console.log('saveStrategy mut1:', props)
        const data = proxy.readQuery({ query: LIST_STRATEGIES });
        console.log('saveStrategy mut:', strategizer_EditStrategy, data, props.team, props.fb)
        data.teams_TeamsByOwner[props.team].fb[props.fb].strategy = strategizer_EditStrategy;
        proxy.writeQuery({ query: LIST_STRATEGIES, data });
      },
    })}
  )
)(HocStrategies);
