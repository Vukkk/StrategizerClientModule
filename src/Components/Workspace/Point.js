import React from 'react';
import { Link } from 'react-router-dom';

import {
  Grid,
  Typography,
  Collapse,
  List,
  ListItem,
  ListItemText,
  IconButton,
  ListItemSecondaryAction
} from '@material-ui/core';

import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import NavigateNext from '@material-ui/icons/NavigateNext';
import Edit from '@material-ui/icons/Edit';

import SituationPoints from './SituationPoints'

class Point extends React.Component {
  constructor (props) {
    super(props);

    this.handleOpenPoint = this.handleOpenPoint.bind(this);

    this.state = {
      openPoint: false,
    }
  }
  render() {
    const {
      classes,
      index,
      entryName,
      pointIndex,
      points,
      point,
      phase,
      situation,
      setPoint,
      setPhase,
      setSituation,
      updatePoint,
      openPoint,
      handleViewPoint,
      selected,
      hasPhase
    } = this.props;
    console.log('Point :', entryName, openPoint, pointIndex, points, point, phase, situation, selected, hasPhase);
    console.log('Point Situations:', points[pointIndex]);
    let phases;
    let situations;
    if(hasPhase){
      return (

      );
    } else {
      return (
        <SituationPoints
          index={index}
          entryName={entryName}
          pointIndex={pointIndex}
          points={points}
          point={point}
          phase={index}
          situation={index}
          setPoint={index}
          setPhase={index}
          setSituation={index}
          updatePoint={index}
          openPoint={index}
          handleOpenPoint={this.handleOpenPoint}
          selected={index}
        >
      );
    }


  }

  handleOpenPoint = () => {
    this.setState(state => ({ openTeams: !state.openTeams }));
  };
}

export default withStyles(styles)(Point);
