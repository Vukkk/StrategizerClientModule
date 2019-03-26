import React from 'react';

import styles from './styles';
import { withStyles } from '@material-ui/core/styles';

import {
  Grid,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Collapse,
  Avatar,
  IconButton,
  Typography,
  Divider
} from '@material-ui/core';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Selected from '@material-ui/icons/Check';

import Point from './Point';

export class OrderPoint extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      openPoint: "entryPoint",
    }
  }

  render () {
    const {
      classes,
      points,
      point,
      phase,
      situation,
      setPoint,
      setPhase,
      setSituation,
      updatePoint
    } = this.props;
    console.log('OrderPoint :', points, situation, point, phase);
    return (
      <React.Fragment>
        <Grid item>
          <List className={classes.strategyList}>
            <Point
              entryName="EntryPoint"
              pointIndex="entryPoint"
              points={points}
              point={point}
              phase={phase}
              situation={situation}
              setPoint={setPoint}
              setPhase={setPhase}
              setSituation={setSituation}
              updatePoint={updatePoint}
              openPoint={this.state.openPoint}
              handleViewPoint={this.handleViewPoint}
            />
          </List>
        </Grid>
      </React.Fragment>
    )
  }

  handleViewPoint = (e, pointIndex) => {
    e.preventDefault();
    this.setState(state => ({ openPoint: pointIndex }));
  };
}

export default withStyles(styles)(OrderPoint);
