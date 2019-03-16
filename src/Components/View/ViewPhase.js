import React from 'react';
import { Link } from 'react-router-dom';

import { Grid, Typography, List } from '@material-ui/core';
import ExpandItemWrapper from './ExpandItemWrapper';
import ViewSituation from './ViewSituation';

import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

class ViewPhase extends React.Component {
  render() {
    const { classes, index, sectionName } = this.props;
    const { name, code, situations } = this.props.phase;

    console.log(this.props.phase);
    return (
      <ExpandItemWrapper sectionName={`Phase: ${name}`} style={classes.expansionSituation}>
        <Grid
          item
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid item xs={12} >
            <List className={classes.root}>
              {situations.length > 0 &&
                situations.map((situation, index) => <ViewSituation key={index} situation={situation} index={index} />)
              }
            </List>
          </Grid>
        </Grid>
      </ExpandItemWrapper>
    );
  }
}

export default withStyles(styles)(ViewPhase);
