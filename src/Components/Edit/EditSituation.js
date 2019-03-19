import React from 'react';
import { Link } from 'react-router-dom';

import { Button, Grid, Typography, List } from '@material-ui/core';
import ExpandItemWrapper from '../View/ExpandItemWrapper';
import EditCondition from './EditCondition';

import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

import { isDefined } from '../../utils';

export class EditSituation extends React.Component {
  constructor(props){
    super(props);

    this.addCondition = this.addCondition.bind(this);
  }

  render() {
    const { classes, index, point, phsIndex, sitIndex, updatePoint } = this.props;
    const { change } = this.state;
    const { name, conditions } = this.props.situation;
    const phaseIndex = isDefined(phsIndex) ? phsIndex: null;
    return (
      <ExpandItemWrapper
        sectionName={`Situation: ${name}`}
        style={classes.expansionSituation}
        defaultExpanded={conditions.length > 3 ? false : true}
      >
        <Grid
          item
          container
          direction="row"
          justify="flex-end"
          alignItems="center"
        >
          <Grid item xs={12} >
            <Button
              className={classes.addButton}
              color="primary"
              variant="contained"
              fullWidth={false}
              onClick={e => updatePoint(e, point, 'addCondition', phaseIndex, sitIndex, null)}
            >
              + Save Changes
            </Button>
          </Grid>
        </Grid>
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
                conditions.map((condition, condIndex) => (
                  <EditCondition
                    key={condIndex}
                    name={condition.name}
                    condition={condition.code}
                    point={point}
                    index={condIndex}
                    phsIndex={phaseIndex}
                    sitIndex={sitIndex}
                    updatePoint={updatePoint}
                    classes={classes}
                  />
                ))
              }
              <Button
                className={classes.addButton}
                color="secondary"
                variant="contained"
                fullWidth={true}
                onClick={e => updatePoint(e, point, 'addCondition', phaseIndex, sitIndex, null)}
              >
                + Add Condition
              </Button>
            </List>
          </Grid>
        </Grid>
      </ExpandItemWrapper>
    );
  }

  addCondition(data, sitIndex, currentIndex){
    const newIndex = currentIndex + 1;
    updatePoint()
  }
}

export default withStyles(styles)(EditSituation);
