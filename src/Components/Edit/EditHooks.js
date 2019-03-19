import React, { useReducer, createContext } from 'react';
import { useQuery } from 'react-apollo-hooks';

import Typography from '@material-ui/core/Typography';
import styles from './styles';
import { withStyles } from '@material-ui/core/styles';

import EditItem from './EditItem';
import EditWrapper from './EditWrapper';
import { Loading, Error } from '../Common';
import { isDefined } from '../../utils';

import { GET_STRATEGY } from '../../GraphQL/Strategies';

function init(initState) {
  return {
    name: initState.name,
    entryPoint: initState.entryPoint,
    exitPoint: initState.exitPoint,
    sellPoint: initState.sellPoint,
    buyPoint: initState.buyPoint,
    stopLoss: initState.stopOrder,
    buyOrder: initState.buyOrder,
    sellOrder: initState.sellOrder
  };
}

const StrategyDispatch = createContext(null);

function reducer(state, action) {
  switch (action.type) {
    case 'updateCondition': {
      return state.map((strategy, index) => {
        console.log(strategy, index, action);
        return strategy;
      });
    };
    case 'updateSituations':
      return {count: state.count - 1};
    case 'updatePhases':
      return {count: state.count - 1};
    case 'reset':
      return init(action.payload);
    default:
      throw new Error();
  }
}

export default function Edit (props) {
  const { classes } = props;
  const fbSlug = props.match.params.slug;
  const strategyIndex = props.match.params.index;
  const [state, dispatch] = useReducer(reducer, props.strategy, init);

  const { data, error, loading } = useQuery(GET_STRATEGY, {
    variables: {fbSlug: fbSlug},
    fetchPolicy:'cache-and-network',
    notifyOnNetworkStatusChange: true
  });

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
    <EditWrapper classes={classes}>
      <EditItem strategy={strategyData} index={strategyIndex} classes={classes} />
    </EditWrapper>
  );
}

export const EditStrategy = withStyles(styles)(Edit);
