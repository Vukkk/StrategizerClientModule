import React from 'react';
import { Link } from 'react-router-dom';

import { Grid, Typography, List } from '@material-ui/core';
import ExpandItemWrapper from './ExpandItemWrapper';
import ViewCondition from './ViewCondition';

import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

class ViewSituation extends React.Component {
  render() {
    console.log(this.props);
    console.log(this.props.situation);
    const { classes, index } = this.props;
    const { name, conditions } = this.props.situation;

    return (
      <ExpandItemWrapper sectionName={`Situation: ${name}`} style={classes.expansionSituation}>
        <Grid
          item
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid item xs={12} >
            <List className={classes.root}>
              {conditions.length > 0 &&
                conditions.map((condition, index) => <ViewCondition key={index} name={condition.name} condition={condition.code} index={index} />)
              }
            </List>
          </Grid>
        </Grid>
      </ExpandItemWrapper>
    );
  }
}

export default withStyles(styles)(ViewSituation);
