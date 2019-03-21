import React from 'react';
import { Link } from 'react-router-dom';
import { graphql, compose } from 'react-apollo';

import { Typography, Paper, Grid, Avatar, List, ListItem, Button} from '@material-ui/core';

import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

import ManageItem from './ManageItem';
import ManageLoading from './ManageLoading';
import ManageError from './ManageError';
import ManageSubstrategies from './ManageSubstrategies';
import { isDefined, isNull } from '../../utils';

import { LIST_STRATEGIES, CREATE_STRATEGY } from '../../GraphQL/Strategies'

class ManageList extends React.Component {
  render() {
    const { classes, mutate, data } = this.props;
    const { error, loading, teams_TeamsByOwner } = data;
    console.log('ManageList:', classes, mutate, data, error, loading, teams_TeamsByOwner);
    if (isDefined(loading) && loading) {
      return <ManageLoading text="Strategies" classes={classes} />
    }
    if(isDefined(error)) {
      if(data.error.graphQLErrors.length > 0){
        let gqlError = data.error.graphQLErrors;
        gqlError.map((error, index) => {
          console.log('gqlError:', error);
          return <ManageError key={`gphError-${index}`} text={`${error}`}  classes={classes} />
        });
      } else {
        return <ManageError text={`${error}`}  classes={classes} />
      }
    }
    if(!isDefined(teams_TeamsByOwner) || isNull(teams_TeamsByOwner)){
      return (
        <ManageError text={`You don't have any teams.`}  classes={classes} >
          <Link to='/teams/manage-teams' className={classes.backLink}>Create A Team &rarr;</Link>
        </ManageError>
      )
    }
    const teams = teams_TeamsByOwner;
    let fbs;
    let substrategies;
    if(teams.length > 0){
      return teams.map((team, index) => {
        console.log('ManageList team:', team);
        fbs = team.fb;
        return (
          <Paper className={classes.card} key={`team-${index}`}>
            <Grid
              container
              spacing={16}
              direction="column"
              justify="center"
              alignItems="center"
            >
              <Grid item>
                <Grid
                  container
                  spacing={16}
                  direction="row"
                  justify="center"
                  alignItems="center"
                >
                  <Grid item>
                    <Avatar src={team.profile.avatar} className={classes.teamAvatar} />
                  </Grid>
                  <Grid item>
                    <Typography variant='h4'>{team.name}</Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Grid
                  container
                  spacing={16}
                  direction="row"
                  justify="center"
                  alignItems="center"
                >
                  {fbs.length > 0 && fbs.map((fb, index) => {
                    const testSim = /simulator-/.test(fb.slug);
                    console.log(/simulator-/.test(fb.slug));
                    if(testSim){
                      return (
                        <ManageSubstrategies
                          key={`fb-strategy-${index}`}
                          classes={classes}
                          index={index}
                          team={team}
                          fb={fb}
                          substrategies={substrategies}
                          mutate={mutate}
                        />
                      )
                    } else {
                      return null;
                    }
                  })}
                  {(!isDefined(fbs) || isNull(fbs) || fbs.length == 0)
                    && (
                      <ManageError text={`You don't have any Financial Beings.`}  classes={classes} >
                        <Link to='/teams/manage-teams' className={classes.backLink}>Create A Financial Being &rarr;</Link>
                      </ManageError>
                    )
                  }
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        )
      })
    } else{
      return (<ManageError text={`You don't have any Teams.`} classes={classes} ><Link to='/teams/manage-teams' className={classes.backLink}>Create A Team &rarr;</Link></ManageError>)
    }
  }
}


export default compose(
  graphql(CREATE_STRATEGY, { alias: 'createStrategy' }),
  graphql(LIST_STRATEGIES, {
    alias: 'listStrategies',
    options: {
      errorPolicy: 'all',
      fetchPolicy: 'network-only'
    }}
  )
)(withStyles(styles)(ManageList));
