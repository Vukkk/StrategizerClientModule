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
    this.handleSelectSit = this.handleSelectSit.bind(this);

    this.state = {
      openPoint: "entryPoint",
      openPhase: 0,
      selectedSit: null
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
      strategyName,
      setView,
      view
    } = this.props;

    return (
      <React.Fragment>
        <Grid item>
          <List className={classes.strategyList}>
            <ListItem className={classes.root} dense key="point-Title">
              <ListItemText
                primary={`Strategy Events: ${strategyName}`}
                primaryTypographyProps={{variant:'subtitle1'}}
                classes={{root: classes.itemTitleRoot, primary: classes.primary}}
                onClick={e => setView(e, 'Strategy Events')}
              />
            </ListItem>
            <SituationPoints
              entryName="Trigger"
              pointIndex="entryPoint"
              key="point-entryPoint"
              points={points}
              point={point}
              situation={situation}
              setPoint={setPoint}
              setSituation={setSituation}
              updatePoint={updatePoint}
              openPoint={this.state.openPoint}
              handleOpenPoint={this.handleOpenPoint}
              selected={this.state.openPoint === 'entryPoint'}
              setSituation={setSituation}
              setView={setView}
              view={view}
            />
            <SituationPoints
              entryName="Rejected"
              pointIndex="exitPoint"
              key="point-exitPoint"
              points={points}
              point={point}
              situation={situation}
              setPoint={setPoint}
              setSituation={setSituation}
              updatePoint={updatePoint}
              openPoint={this.state.openPoint}
              handleOpenPoint={this.handleOpenPoint}
              selected={this.state.openPoint === 'exitPoint'}
              setView={setView}
              view={view}
            />
            <SituationPoints
              entryName="EntryPoint"
              pointIndex="sellPoint"
              key="point-sellPoint"
              points={points}
              point={point}
              situation={situation}
              setPoint={setPoint}
              setSituation={setSituation}
              updatePoint={updatePoint}
              openPoint={this.state.openPoint}
              handleOpenPoint={this.handleOpenPoint}
              selected={this.state.openPoint === 'sellPoint'}
              setView={setView}
              view={view}
            />
            <SituationPoints
              entryName="TakeProfit"
              pointIndex="buyPoint"
              key="point-buyPoint"
              points={points}
              point={point}
              situation={situation}
              setPoint={setPoint}
              setSituation={setSituation}
              updatePoint={updatePoint}
              openPoint={this.state.openPoint}
              handleOpenPoint={this.handleOpenPoint}
              selected={this.state.openPoint === 'buyPoint'}
              setView={setView}
              view={view}
            />
            <PhasePoints
              entryName="StopLoss"
              pointIndex="stopLoss"
              key="point-stopLoss"
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
              setView={setView}
              view={view}
              selectedSit={this.state.selectedSit}
              handleSelectSit={this.handleSelectSit}
            />
            <PhasePoints
              entryName="BuyOrder"
              pointIndex="buyOrder"
              key="point-buyOrder"
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
              setView={setView}
              view={view}
              selectedSit={this.state.selectedSit}
              handleSelectSit={this.handleSelectSit}
            />
            <PhasePoints
              entryName="SellOrder"
              pointIndex="sellOrder"
              key="point-sellOrder"
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
              setView={setView}
              view={view}
              selectedSit={this.state.selectedSit}
              handleSelectSit={this.handleSelectSit}
            />
          </List>
        </Grid>
      </React.Fragment>
    )
  }

  handleOpenPoint (e, pointIndex, view) {
    e.preventDefault();
    this.props.setPoint(pointIndex, view);
    this.setState(state => ({ openPoint: pointIndex }));
  };

  handleOpenPhase (e, phaseIndex, phaseItem, view) {
    e.preventDefault();
    console.log('handleOpenPhase: ', phaseIndex, phaseItem);
    this.props.setPhase(phaseItem, phaseIndex, view)
    this.setState(state => ({ openPhase: phaseIndex, selectedSit: null }));
  };

  handleSelectSit (phaseIndex, sitIndex) {
    this.setState(state => ({ openPhase: phaseIndex, selectedSit: sitIndex }));
  };
}

export default withStyles(styles)(OrderPoint);
