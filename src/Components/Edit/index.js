import React from 'react';
import { Query } from 'react-apollo';

import Typography from '@material-ui/core/Typography';
import styles from './styles';
import { withStyles } from '@material-ui/core/styles';

import ViewItem from '../View/ViewItem';
import ViewWrapper from '../View/ViewWrapper';
import { Loading, Error } from '../Common';
import { isDefined } from '../../utils';

import { GET_STRATEGY } from '../../GraphQL/Local'

class Edit extends React.Component {
  render() {
    const { classes } = this.props;
    const strategyIndex = this.props.match.params.slug;

    return (
      <Query
        query={GET_STRATEGY}
        fetchPolicy='cache-and-network'
        notifyOnNetworkStatusChange
      >
        {({ loading, error, data, refetch, networkStatus }) => {
          if (isDefined(loading) && loading) {
            console.log('ManageList Loading: ', loading);
            return <ViewWrapper><Loading text="Strategies" /></ViewWrapper>
          }
          if(isDefined(error)) {
            console.log('ManageList Error: ', error);
            return <ViewWrapper><Error text={`Error: ${error}`} /></ViewWrapper>
          }
          console.log('ManageList Data: ', data);
          let team0;
          let fb0;
          let strategy0;
          let strategies;
          if(data.teams_TeamsByOwner.length > 0){
            team0 = data.teams_TeamsByOwner[0];
            if(team0.fb.length > 0){
              fb0 = team0.fb[0];
              if(isDefined(fb0.strategy)){
                strategy0 = fb0.strategy;
                if(strategy0.subStrategies.length > 0){
                  strategies = strategy0.subStrategies;
                } else {
                  return (<Error text="This strategy has no subStrategies" />)
                }
              } else {
                return (<Error text="You have no strategies" />)
              }
            } else {
              return (<Error text="You don't have any finanical beings. Please create one!" />)
            }
          } else {
            return (<Error text="You don't have a team or any finanical beings. Please create one!" />)
          }
          console.log('strategies: ', strategies, strategyIndex);
          let strategyData = strategies[strategyIndex];
          return (
            <ViewItem strategy={strategyData} index={strategyIndex} />
          );
        }}
      </Query>
    );
  }
}

export default withStyles(styles)(Edit);
