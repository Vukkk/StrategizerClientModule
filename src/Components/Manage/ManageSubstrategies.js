import React from 'react';
import { Link } from 'react-router-dom';

import { Button, Paper, Grid, Avatar, List, ListItem, Typography } from '@material-ui/core';
import { Loading, Error } from '../Common';
import ManageItem from './ManageItem';

import { isDefined, isNull } from '../../utils';

import { LIST_STRATEGIES } from '../../GraphQL/Strategies'

export const ManageSubstrategies = ({ classes, index, team, fb, substrategies, mutate}) => {
  if(isDefined(fb.strategy) && !isNull(fb.strategy) && isDefined(fb.strategy.subStrategies)){
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
  } else {
    return (
      <Grid item xs={6}>
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
                    <Typography className={classes.subheading}>{fb.name} Strategy</Typography>
                  </Grid>
                </Grid>
              </ListItem>
              <ListItem key={`strategy-${index}`}>
                <Error text="This strategy has no subStrategies" align="center">
                  <Button
                    variant='outlined'
                    color='primary'
                    size='small'
                    onClick={() => {
                      mutate({
                        variables: { fbSlug: fb.slug },
                        options: { refetchQueries:[teams_TeamsByOwner] }
                      });
                    }}
                  >
                    Clone the Strategy Template
                  </Button>
                </Error>
              </ListItem>
            </List>
          </Grid>
        </Paper>
      </Grid>
    )
  }
}

export default ManageSubstrategies;
