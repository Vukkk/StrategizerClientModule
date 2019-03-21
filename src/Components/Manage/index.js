import React from 'react';
import { Link } from 'react-router-dom';
import { Query } from 'react-apollo';

import { Typography, Paper, Grid, Avatar, List, ListItem} from '@material-ui/core';

import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

import ManageItem from './ManageItem';
import ManageLoading from './ManageLoading';
import ManageError from './ManageError';
import { isDefined, isNull } from '../../utils';

import { LIST_STRATEGIES } from '../../GraphQL/Strategies'

class ManageList extends React.Component {
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
              return <ManageLoading text="Strategies" classes={classes} />
            }
            if(isDefined(error)) {
              return <ManageError text={`${error}`}  classes={classes} />
            }
            if(!isDefined(data.teams_TeamsByOwner) || isNull(data.teams_TeamsByOwner)){
              return (
                <ManageError text={`You don't have any teams.`}  classes={classes} >
                  <Link to='/teams/manage-teams' className={classes.backLink}>Create A Team &rarr;</Link>
                </ManageError>
              )
            }
            const teams = data.teams_TeamsByOwner;
            let fbs;
            let substrategies;
            if(teams.length > 0){
              return teams.map((team, index) => {
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
                          direction="column"
                          justify="center"
                          alignItems="center"
                        >
                          {fbs.length > 0 && fbs.map((fb, index) => {
                            substrategies = fb.strategy.subStrategies;
                            return (
                              <Paper className={classes.card} key={`team-${index}`}>
                                <Grid item container xs={12} key={`fb-${index}`}>
                                  <List>
                                    <ListItem>
                                      <Grid
                                        item
                                        container
                                        spacing={16}
                                        direction="row"
                                        justify="center"
                                        alignItems="center"
                                        key={`fb-${fb.slug}-meta`}
                                      >

                                        <Grid item>
                                          <Avatar src={fb.avatar} className={classes.avatar} />
                                        </Grid>
                                        <Grid item>
                                          <Typography className={classes.subheading}>{fb.name} FB Substrategies</Typography>
                                        </Grid>
                                      </Grid>
                                    </ListItem>
                                    {substrategies.length > 0 && substrategies.map((strategy, index) => {
                                      return (
                                        <ListItem key={`strategy-${index}`}>
                                          <ManageItem
                                            index={index}
                                            strategy={strategy}
                                            teamSlug={team.slug}
                                            fbSlug={fb.slug}
                                          />
                                        </ListItem>
                                      )
                                    })}
                                    {(isNull(substrategies)
                                      || substrategies.length == 0)
                                      && <Error text="This strategy has no subStrategies" />}
                                  </List>
                                </Grid>
                              </Paper>
                            )
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
              return (
                <ManageError text={`You don't have any Strategies.`}  classes={classes} />
              )
            }
          }}
        </Query>
      </div>
    );
  }
}

export default withStyles(styles)(ManageList);
