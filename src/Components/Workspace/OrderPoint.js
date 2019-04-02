import React from 'react';

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
import { withStyles } from '@material-ui/core/styles';

import SituationPoints from './SituationPoints';
import PhasePoints from './PhasePoints';

const styles = theme => ({
  root: {
    backgroundColor: '#888',
    '&:hover':{
      backgroundColor: '#444'
    },
    cursor:'pointer'
  },
  itemTitleRoot: {
    backgroundColor: 'none'
  },
  primary:{
    color: '#fff',
    backgroundColor: 'none',
    fontWeight: '700',
    textTransform: 'uppercase'
  },
  strategyList: {
    padding: theme.spacing.unit * 1,
    width: '100%'
  }
});

export class OrderPoint extends React.Component {
  constructor (props) {
    super(props);

    this.handleOpenPoint = this.handleOpenPoint.bind(this);
    this.handleOpenPhase = this.handleOpenPhase.bind(this);

    this.state = {
      openPoint: "entryPoint",
      openPhase: 0
    }
  }

  render () {
    const {
      classes,
      points,
      point,
      pointIndex,
      phase,
      phaseIndex,
      situationIndex,
      situation,
      setPoint,
      setPhase,
      setSituation,
      updatePoint,
      strategyName
    } = this.props;

    return (
      <React.Fragment>
        <Grid item>
          <List className={classes.strategyList}>
            <ListItem className={classes.root} dense>
              <ListItemText
                primary={`Strategy Events: ${strategyName}`}
                primaryTypographyProps={{variant:'subtitle1'}}
                classes={{root: classes.itemTitleRoot, primary: classes.primary}}
                onClick={e => setView(e, 'Strategies')}
              />
            </ListItem>
            <SituationPoints
              entryName="Trigger"
              pointIndex="entryPoint"
              points={points}
              point={point}
              situation={situation}
              setPoint={setPoint}
              setSituation={setSituation}
              updatePoint={updatePoint}
              openPoint={this.state.openPoint}
              handleOpenPoint={this.handleOpenPoint}
              selected={this.state.openPoint === 'entryPoint'}
            />
            <SituationPoints
              entryName="Rejected"
              pointIndex="exitPoint"
              points={points}
              point={point}
              situation={situation}
              setPoint={setPoint}
              setSituation={setSituation}
              updatePoint={updatePoint}
              openPoint={this.state.openPoint}
              handleOpenPoint={this.handleOpenPoint}
              selected={this.state.openPoint === 'exitPoint'}
            />
            <SituationPoints
              entryName="EntryPoint"
              pointIndex="sellPoint"
              points={points}
              point={point}
              situation={situation}
              setPoint={setPoint}
              setSituation={setSituation}
              updatePoint={updatePoint}
              openPoint={this.state.openPoint}
              handleOpenPoint={this.handleOpenPoint}
              selected={this.state.openPoint === 'sellPoint'}
            />
            <SituationPoints
              entryName="TakeProfit"
              pointIndex="buyPoint"
              points={points}
              point={point}
              situation={situation}
              setPoint={setPoint}
              setSituation={setSituation}
              updatePoint={updatePoint}
              openPoint={this.state.openPoint}
              handleOpenPoint={this.handleOpenPoint}
              selected={this.state.openPoint === 'buyPoint'}
            />
            <PhasePoints
              entryName="StopLoss"
              pointIndex="stopLoss"
              phaseIndex={phaseIndex}
              situationIndex={situationIndex}
              points={points}
              point={point}
              situation={situation}
              setPoint={setPoint}
              setPhase={setPhase}
              setSituation={setSituation}
              updatePoint={updatePoint}
              openPoint={this.state.openPoint}
              openPhase={this.state.openPhase}
              handleOpenPoint={this.handleOpenPoint}
              handleOpenPhase={this.handleOpenPhase}
              selected={this.state.openPoint === 'stopLoss'}
            />
            <PhasePoints
              entryName="BuyOrder"
              pointIndex="buyOrder"
              phaseIndex={phaseIndex}
              situationIndex={situationIndex}
              points={points}
              point={point}
              situation={situation}
              setPoint={setPoint}
              setPhase={setPhase}
              setSituation={setSituation}
              updatePoint={updatePoint}
              openPoint={this.state.openPoint}
              openPhase={this.state.openPhase}
              handleOpenPoint={this.handleOpenPoint}
              handleOpenPhase={this.handleOpenPhase}
              selected={this.state.openPoint === 'buyOrder'}
            />
            <PhasePoints
              entryName="SellOrder"
              pointIndex="sellOrder"
              phaseIndex={phaseIndex}
              situationIndex={situationIndex}
              points={points}
              point={point}
              situation={situation}
              setPoint={setPoint}
              setPhase={setPhase}
              setSituation={setSituation}
              updatePoint={updatePoint}
              openPoint={this.state.openPoint}
              openPhase={this.state.openPhase}
              handleOpenPoint={this.handleOpenPoint}
              handleOpenPhase={this.handleOpenPhase}
              selected={this.state.openPoint === 'sellOrder'}
            />
          </List>
        </Grid>
      </React.Fragment>
    )
  }

  handleOpenPoint (e, pointIndex) {
    e.preventDefault();
    this.setState(state => ({ openPoint: pointIndex }));
  };

  handleOpenPhase (e, phaseIndex, phaseItem) {
    e.preventDefault();
    console.log('handleOpenPhase: ', phaseIndex, phaseItem);
    this.props.setPhase(phaseItem, phaseIndex)
    this.setState(state => ({ openPhase: phaseIndex }));
  };
}

export default withStyles(styles)(OrderPoint);
