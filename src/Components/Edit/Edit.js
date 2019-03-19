import React from 'react';
import { Query } from 'react-apollo';

import Typography from '@material-ui/core/Typography';
import styles from './styles';
import { withStyles } from '@material-ui/core/styles';

import EditItem from './EditItem';
import EditWrapper from './EditWrapper';
import { Loading, Error } from '../Common';
import { isDefined } from '../../utils';

import { GET_STRATEGY } from '../../GraphQL/Strategies';

export default function Edit (props) {
  const { classes } = props;
  const fbSlug = props.match.params.slug;
  const strategyIndex = props.match.params.index;

  return (
    <Query
      query={GET_STRATEGY}
      variables={{fbSlug: fbSlug}}
      fetchPolicy='cache-and-network'
      notifyOnNetworkStatusChange
    >
      {({ loading, error, data, refetch, networkStatus }) => {
        if (isDefined(loading) && loading) {
          console.log('ManageList Loading: ', loading);
          return <EditWrapper classes={classes}><Loading text="Strategies" /></EditWrapper>
        }
        if(isDefined(error)) {
          console.log('ManageList Error: ', error);
          return <EditWrapper classes={classes}><Error text={`Error: ${error}`} /></EditWrapper>
        }
        console.log('ManageList Data: ', data);
        let strategies;

        if(isDefined(data.strategizer_StrategyByFb.subStrategies) && data.strategizer_StrategyByFb.subStrategies.length > 0){
          strategies = data.strategizer_StrategyByFb.subStrategies;
        } else {
          return (<Error text="There is no strategy here!" />)
        }

        console.log('strategies: ', strategies, strategyIndex);
        let strategyData = strategies[strategyIndex];
        return (
          <EditItem strategy={strategyData} index={strategyIndex} classes={classes} />
        );
      }}
    </Query>
  );
}

export const EditStrategy = withStyles(styles)(Edit);
