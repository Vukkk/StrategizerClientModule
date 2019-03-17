import React, { Component } from 'react';
import { Query } from 'react-apollo';

import { Typography } from '@material-ui/core';

import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

import ManageItem from './ManageItem';
import ManageLoading from './ManageLoading';
import ManageError from './ManageError';
import { isDefined } from '../../utils';

import { LIST_STRATEGIES } from '../../GraphQL/Strategies'

class ManageList extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className='container'>
        <Query
          query={LIST_STRATEGIES}
          fetchPolicy='network-only'
          notifyOnNetworkStatusChange
        >
          {({ loading, error, data, refetch, networkStatus }) => {
            if (isDefined(loading) && loading) {
              console.log('ManageList Loading: ', loading);
              return <ManageLoading text="Strategies" classes={classes} />
            }
            if(isDefined(error)) {
              console.log('ManageList Error: ', error);
              return <ManageError text={`${error}`}  classes={classes} />
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
            console.log('strategies: ', strategies);
            return strategies.map((strategy, index) => {
              console.log('strategy: ', strategy, index);
              return (
                <ManageItem
                  key={index}
                  index={index}
                  strategy={strategy}
                  teamName={team0.name}
                  teamAvatar={team0.profile.avatar}
                  fbName={fb0.name}
                  fbAvatar={fb0.avatar}
                />
              );
            });
          }}
        </Query>
      </div>
    );
  }
}

export default withStyles(styles)(ManageList);
