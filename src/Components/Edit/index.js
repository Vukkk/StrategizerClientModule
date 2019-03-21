import React from 'react';
import { Query, Mutation } from 'react-apollo';

import Typography from '@material-ui/core/Typography';
import styles from './styles';
import { withStyles } from '@material-ui/core/styles';

import EditItem from './EditItem';
import EditWrapper from './EditWrapper';
import { Loading, Error } from '../Common';
import { isDefined } from '../../utils';

import { GET_STRATEGY, SAVE_STRATEGY } from '../../GraphQL/Strategies';

class Edit extends React.Component {
  constructor(props) {
    super(props);

    this.handleSaveStrategy=this.handleSaveStrategy.bind(this);
  }

  render() {
    const { classes } = this.props;
    const teamSlug = this.props.match.params.team;
    const fbSlug = this.props.match.params.slug;
    const strategyIndex = this.props.match.params.index;

    return (
      <Query
        query={GET_STRATEGY}
        variables={{fbSlug: fbSlug}}
        fetchPolicy='cache-and-network'
        notifyOnNetworkStatusChange
      >
        {({ loading, error, data, refetch, networkStatus }) => {
          if (isDefined(loading) && loading) {
            return <EditWrapper classes={classes}><Loading text="Strategies" /></EditWrapper>
          }
          if(isDefined(error)) {
            return <EditWrapper classes={classes}><Error text={`${error}`} /></EditWrapper>
          }
          console.log('Edit Data: ', data);
          let id;
          let allStrategies;
          let strategies;

          if(isDefined(data.strategizer_StrategyByFb.subStrategies) && data.strategizer_StrategyByFb.subStrategies.length > 0){
            id =  data.strategizer_StrategyByFb.id;
            allStrategies = data.strategizer_StrategyByFb;
            strategies = data.strategizer_StrategyByFb.subStrategies;
          } else {
            return (<Error text="There is no strategy here!" />)
          }

          console.log('strategies: ', strategies, strategyIndex);
          let strategyData = strategies[strategyIndex];
          return (
            <Mutation
              mutation={SAVE_STRATEGY}
              refetchQueries={[
                {
                  query: GET_STRATEGY,
                  variables: { fbSlug: fbSlug }
                }
              ]}
            >
              {(saveStrategy, { loading, error, data }) => {
                return(
                  <EditItem
                    id={id}
                    teamSlug={teamSlug}
                    fbSlug={fbSlug}
                    strategies={allStrategies}
                    strategy={strategyData}
                    index={strategyIndex}
                    classes={classes}
                    handleSaveStrategy={this.handleSaveStrategy}
                    saveStrategy={saveStrategy}
                  />
                )
              }}
            </Mutation>
          );
        }}
      </Query>
    );
  }

  async handleSaveStrategy (saveStrategy, subStrategies, id) {
    console.log('handleSaveStrategy: ', saveStrategy, subStrategies, id)

    let saved = await saveStrategy({
      variables: {
        id,
        strategy:{
          subStrategies: subStrategies
        }
      }
    });

    return saved;
  }
}

export default withStyles(styles)(Edit);
