import React from 'react';
import { graphql, compose } from 'react-apollo';
import { Link } from 'react-router-dom';

import {
  Grid,
  Typography,
} from '@material-ui/core';

import { isDefined, isNull } from '../../utils';

import { LIST_STRATEGIES, SAVE_STRATEGY } from '../../GraphQL/Strategies';

import { Loading } from '../Common';
import Layout from './Layout';

export class HocStrategies extends React.Component {
  render() {
    const {
      listStrategies, createStrategy, saveStrategy, setTeam, setFb, classes,
    } = this.props;

    if (!listStrategies.loading && isDefined(listStrategies.error.graphQLErrors) && listStrategies.error.graphQLErrors[0] === 'Not Authenticated - you have to be authenticated to perform this action') {
      return (
        <Grid container spacing={0} direction='column' justify='stretch' alignItems='center' className={classes.loadContainer}>
          <Grid item xs={10}>
            <Typography variant='h3' align='center' gutterBottom>
              Not Authenticated
            </Typography>
            <Typography variant='h5' align='center' gutterBottom>
              Please login to your account to use the Strategizer.
            </Typography>
          </Grid>
        </Grid>
      );
    }
    if (listStrategies.loading || isNull(listStrategies) || !isDefined(listStrategies.teams_TeamsByOwner)) {
      return (
        <Loading text="Strategy Workspace" className={classes.loadContainer} />
      );
    }
    if (listStrategies.teams_TeamsByOwner.length === 0) {
      return (
        <Grid container spacing={0} direction='column' justify='stretch' alignItems='center' className={classes.loadContainer}>
          <Grid item xs={10}>
            <Typography variant='h3' align='center' gutterBottom>
              Welcome to the Strategizer!
            </Typography>
            <Typography variant='h5' align='center' gutterBottom>
              A team is required to use the Strategizer.
            </Typography>
            <Typography variant='h5' align='center'>
              <Link to='/teams/manage-teams' className={classes.backLink}>Go create a team &rarr;</Link>
            </Typography>
          </Grid>
        </Grid>
      );
    }
    return (
      <Layout
        listStrategies={listStrategies}
        createStrategy={createStrategy}
        saveStrategy={saveStrategy}
        setTeam={setTeam}
        setFb={setFb}
      />
    );
  }
}

export default compose(
  graphql(LIST_STRATEGIES, {
    name: 'listStrategies',
    options: {
      errorPolicy: 'all',
      fetchPolicy: 'network-only',
    },
  }),
  graphql(SAVE_STRATEGY, {
    name: 'saveStrategy',
    options: props => ({
      errorPolicy: 'all',
      // refetchQueries:[{query: LIST_STRATEGIES}]
      update: (proxy, { data: { strategizer_EditStrategy } }, ...other) => {
        // console.log('saveStrategy mut1:', props);
        const data = proxy.readQuery({ query: LIST_STRATEGIES });
        // console.log('saveStrategy mut:', strategizer_EditStrategy, data, props.team, props.fb);
        data.teams_TeamsByOwner[props.team].fb[props.fb].strategy = strategizer_EditStrategy;
        proxy.writeQuery({ query: LIST_STRATEGIES, data });
      },
    }),
  }),
)(HocStrategies);
