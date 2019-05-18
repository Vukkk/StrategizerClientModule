import React from 'react';

import styles from './styles';
import { withStyles } from '@material-ui/core/styles';

import {
  Paper,
  Grid,
  Typography,
  List
} from '@material-ui/core';

import Teams from './Teams';
import FBs from './FBs';
import Strategies from './Strategies';
import StrategyPoint from './StrategyPoint';
import OrderPoint from './OrderPoint';
import ViewSpace from '../ViewSpace';

import { isDefined, isNull } from '../../utils';

const newStrategy = {
  name: 'New Strategy',
  active: true,
  buyPoint:{situations: []},
  sellPoint:{situations: []},
  entryPoint:{situations: []},
  exitPoint:{situations: []},
  stopLoss:{phases: []},
  buyOrder:{phases: []},
  sellOrder:{phases: []}
}

const newCondition = {
  name: 'New Condition',
  code: 'Code for new Condition',
};

let currSituation;
let delSituations;
let updSituations;
let conditionPosition;
let delConditions;
let updConditions;
let gotoView;

class Layout extends React.Component {
  constructor (props) {
    super(props);

    this.updatePoint = this.updatePoint.bind(this);
    this.submitSave = this.submitSave.bind(this);
    this.setTeam = this.setTeam.bind(this);
    this.setFB = this.setFB.bind(this);
    this.setPoint = this.setPoint.bind(this);
    this.setPhase = this.setPhase.bind(this);
    this.setStrategy = this.setStrategy.bind(this);
    this.setSituation = this.setSituation.bind(this);
    this.setCondition = this.setCondition.bind(this);
    this.setView = this.setView.bind(this);

    let defaultTeam = null;
    let defaultFB = null;
    let defaultId = null;
    let defaultStrategy = null;
    let defaultPoint = null;
    let defaultStrategyIndex = null;
    let defaultPointIndex = null;
    let defaultPhaseIndex = null;
    let defaultSituationIndex = null;
    let defaultPhase = null;
    let defaultSituation = null;
    let defaultCondition = null;


    if(!props.listStrategies.loading && isDefined(props.listStrategies.teams_TeamsByOwner)){
      const teams = props.listStrategies.teams_TeamsByOwner;
      const fbs = teams[0].fb;

      const simFbs = fbs.filter((fb, index) => {
        const testSim = /simulator-/.test(fb.slug);
        if(testSim){
          return fb;
        }
      })

      defaultTeam = props.listStrategies.teams_TeamsByOwner[0];
      defaultFB = simFbs[0];
      defaultId = defaultFB.strategy.id;
      defaultStrategy = defaultFB.strategy.subStrategies[0];
      defaultPoint = defaultStrategy.entryPoint;
      defaultStrategyIndex = '0';
      defaultPointIndex = 'entryPoint';
      defaultPhaseIndex = 0;
      defaultSituationIndex = 0;
      defaultSituation = defaultPoint.situations[0];
      defaultCondition = defaultSituation.conditions[0];
    }

    this.state = {
      id: defaultId,
      team: defaultTeam,
      fb: defaultFB,
      strategy: defaultStrategy,
      stratIndex: defaultStrategyIndex,
      point: defaultPoint,
      pointIndex: defaultPointIndex,
      phase: defaultPhase,
      phaseIndex: defaultPhaseIndex,
      situationIndex: defaultSituationIndex,
      situation: defaultSituation,
      condition: defaultCondition,
      changed: false,
      saved: false,
      view: 'Introduction'
    }
  }

  componentDidUpdate(prevProps) {
  // Typical usage (don't forget to compare props):
  if (prevProps.listStrategies.loading && !this.props.listStrategies.loading) {
    const teams = props.listStrategies.teams_TeamsByOwner;
    const fbs = teams[0].fb;

    const simFbs = fbs.filter((fb, index) => {
      const testSim = /simulator-/.test(fb.slug);
      if(testSim){
        return fb;
      }
    })

    let defaultTeam = props.listStrategies.teams_TeamsByOwner[0];
    let defaultFB = simFbs[0];
    let defaultId = defaultFB.strategy.id;
    let defaultStrategy = defaultFB.strategy.subStrategies[0];
    let defaultStrategyIndex = 0;
    let defaultPoint = defaultStrategy.entryPoint;
    let defaultPointIndex = 'entryPoint';
    let defaultPhaseIndex= 0;
    let defaultSituationIndex = 0;
    let defaultPhase = null;
    let defaultSituation = defaultPoint.situations[0];
    let defaultCondition = defaultSituation.condition[0];

    this.setState({
      id: defaultId,
      team: defaultTeam,
      fb: defaultFB,
      strategy: defaultStrategy,
      stratIndex: defaultStrategyIndex,
      point: defaultPoint,
      pointIndex: defaultPointIndex,
      phase: defaultPhase,
      phaseIndex: defaultPhaseIndex,
      situationIndex: defaultSituationIndex,
      situation: defaultSituation,
      condition: defaultCondition
    });
  }
  if (prevProps.listStrategies.networkStatus < 7 && this.props.listStrategies.networkStatus >= 7) {
    console.log('SUCCESSFUL FETCH');
  }
}

  render () {
    const { classes, listStrategies, saveStrategy, createStrategy } = this.props;
    const teams = listStrategies.teams_TeamsByOwner;
    const fbs = teams[0].fb;

    const simFbs = fbs.filter((fb, index) => {
      const testSim = /simulator-/.test(fb.slug);
      if(testSim){
        return fb;
      }
    })

    const strategies = this.state.fb.strategy.subStrategies;
    const points = this.state.strategy;

    return (
      <Grid item
      container
      direction="row"
      justify="flex-start"
      alignItems="stretch"
      >
        <Grid item xs={6} md={4}>
          <Grid
            container
            direction="column"
            justify="flex-start"
            alignItems="center"
          >
            <Grid item xs={12} className={classes.strategyList}>
              <List className={classes.strategyList}>
                <Strategies
                  strategies={strategies}
                  strategy={this.state.strategy}
                  setStrategy={this.setStrategy}
                  updatePoint={this.updatePoint}
                  setView={this.setView}
                />
              </List>
              <List className={classes.pointList}>
                <StrategyPoint
                  key='strategy-point-list'
                  strategyName={this.state.strategy.name}
                  stratIndex={this.state.stratIndex}
                  points={points}
                  point={this.state.point}
                  pointIndex={this.state.pointIndex}
                  phase={this.state.phase}
                  phaseIndex={this.state.phaseIndex}
                  situationIndex={this.state.situationIndex}
                  situation={this.state.situation}
                  setPoint={this.setPoint}
                  setPhase={this.setPhase}
                  setSituation={this.setSituation}
                  updatePoint={this.updatePoint}
                  setSituation={this.setSituation}
                  setView={this.setView}
                  view={this.state.view}
                />
              </List>
              <List className={classes.pointList}>
                <OrderPoint
                  key='order-point-list'
                  strategyName={this.state.strategy.name}
                  stratIndex={this.state.stratIndex}
                  points={points}
                  point={this.state.point}
                  pointIndex={this.state.pointIndex}
                  phase={this.state.phase}
                  phaseIndex={this.state.phaseIndex}
                  situationIndex={this.state.situationIndex}
                  situation={this.state.situation}
                  setPoint={this.setPoint}
                  setPhase={this.setPhase}
                  setSituation={this.setSituation}
                  updatePoint={this.updatePoint}
                  setSituation={this.setSituation}
                  setView={this.setView}
                  view={this.state.view}
                />
              </List>
              <div className={classes.teamsListWrapper}>
                <List className={classes.teamsList} disablePadding >
                  <Teams
                    key='strategy-source-team-list'
                    teams={listStrategies.teams_TeamsByOwner}
                    team={this.state.team}
                    setTeam={this.setTeam}
                    setView={this.setView}
                  />
                  <FBs
                    key='strategy-source-fb-list'
                    fbs={simFbs}
                    fb={this.state.fb}
                    setFB={this.setFB}
                    setView={this.setView}
                  />
                </List>
              </div>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6} md={8}>
          <ViewSpace
            view={this.state.view}
            strategy={this.state.strategy}
            stratIndex={this.state.stratIndex}
            pointIndex={this.state.pointIndex}
            phase={this.state.phase}
            phaseIndex={this.state.phaseIndex}
            situationIndex={this.state.situationIndex}
            situation={this.state.situation}
            updatePoint={this.updatePoint}
            saved={this.state.saved}
            setView={this.setView}
          />
        </Grid>
      </Grid>
    )
  }

  setTeam (team, index) {
    this.props.setTeam(index);
    this.setState(state => ({ team: team }));
  };

  setFB (fb, index) {
    this.props.setFb(index);
    this.setState(state => ({ fb: fb }));
  };

  setStrategy (strategy, view, index) {
    this.setState(state => ({ strategy: strategy, view: view, stratIndex: index  }));
  };

  setPoint (point, view) {
    this.setState(state => ({ pointIndex: point, view: view }));
  };

  setPhase (phase, index, view) {
    console.log('setPhase: ', phase, index, view);
    this.setState(state => ({ phase: phase, phaseIndex: index, view: view }));
  };

  setSituation (situation, index, view) {
    this.setState(state => ({ situation: situation, situationIndex: index, view: view }));
  };

  setCondition (condition, view) {
    this.setState(state => ({ condition: condition, view: view }));
  };

  setView (e, view) {
    this.setState({ view: view });
  };

  updatePoint (e, point, type, strIndex, phsIndex, sitIndex, conIndex, element) {
    console.log('updatePoint: ', e, point, type, strIndex, phsIndex, sitIndex, conIndex, element);
    let currState = this.state;
    const strategies = this.state.fb.strategy.subStrategies;
    let currStrategy = (strIndex !== null) ? this.state.fb.strategy.subStrategies[strIndex] : currState.strategy;
    let currPoint = currStrategy[point];
    console.log('updatePoint 2: ', strategies, currPoint, currStrategy);
    const situationIndex = sitIndex;
    switch (type) {
      case 'addPhase':
        currPoint.phases.push({
          name: 'New Phase',
          code: 'Code for new phase',
          situations: []
        });
        let phaseIndex = currPoint.phases.length - 1;
        currStrategy[point] = currPoint;
        this.saveStrategyFromUpdate(strIndex, currStrategy)
        this.setState({
          [point]: currPoint,
          phaseIndex: phaseIndex,
          phase: currPoint.phases[phaseIndex],
          changed: false,
          saved: true,
          view: 'Phases'
        });
        break;
      case 'addSituation':
        let newSitIndex;
        let newSit;
        if(isDefined(currPoint.phases)){
          currPoint.phases[phsIndex].situations.push({
            name: 'New Situation',
            conditions: []
          });
          newSitIndex = currPoint.phases[phsIndex].situations.length - 1;
          newSit = currPoint.phases[phsIndex].situations[newSitIndex]
        } else {
          currPoint.situations.push({
            name: 'New Situation',
            conditions: []
          });
          newSitIndex = currPoint.situations.length - 1;
          newSit = currPoint.situations[newSitIndex]
        }
        currStrategy[point] = currPoint;
        this.saveStrategyFromUpdate(strIndex, currStrategy)
        this.setState({
          [point]: currPoint,
          situationIndex: newSitIndex,
          situation: newSit,
          changed: false,
          saved: true,
          view: 'Situations'
        });
        break;
      case 'addCondition':
        if (isDefined(currPoint.phases)) {
          currPoint.phases[phsIndex].situations[situationIndex].conditions.push(newCondition);
          currSituation = currPoint.phases[phsIndex].situations[situationIndex];
          conditionPosition = currPoint.phases[phsIndex].situations[situationIndex].conditions.length - 1;
        } else {
          currPoint.situations[situationIndex].conditions.push(newCondition);
          currSituation = currPoint.situations[situationIndex];
          conditionPosition = currPoint.situations[situationIndex].conditions.length - 1;
        }
        currStrategy[point] = currPoint;
        this.saveStrategyFromUpdate(strIndex, currStrategy);
        this.setState({
          [point]: currPoint,
          situation: currSituation,
          condition: newCondition,
          conditionIndex: conditionPosition,
          changed: false,
          saved: true,
          view: 'Conditions',
        });
        break;
      case 'addStrategy':
        this.saveStrategyFromUpdate('new', newStrategy);
        this.setState({
          stratIndex: 0,
          strategy: newStrategy
        });
        break;
      case 'updateStrategy':
        gotoView = 'Substrategies';
        if (isDefined(currStrategy)) {
          if (element === 'active') {
            currStrategy.active = e;
          }
          if (element === 'name') {
            currStrategy.name = e;
          } else {
            currStrategy = e;
            gotoView = 'Strategy Code';
          }
          console.log('updateStrategy: ', currStrategy, strIndex);
        }
        this.saveStrategyFromUpdate(strIndex, currStrategy);
        this.setState({
          stratIndex: strIndex,
          strategy: currStrategy,
          view: 'Substrategies',
        });
        break;
      case 'deleteStrategy':
        if(isDefined(strIndex)){
          console.log('updateStrategy: ', strIndex);
          this.setState({
            stratIndex: 0,
            changed: false,
            saved: true,
            view: 'Substrategies'
          });
          this.deleteStrategyFromUpdate(strIndex);
        }
        break;
      case 'updatePhase':
        if(isDefined(currPoint.phases)){
          if(element === 'name'){
            currPoint.phases[phsIndex].name = e;
          } else {
            currPoint.phases[phsIndex].code = e;
          }
        } else {
          if(element === 'name'){
            currPoint.phases[phsIndex].situations[sitIndex].conditions[conIndex].name = e;
          } else {
            currPoint.phases[phsIndex].situations[sitIndex].conditions[conIndex].code = e;
          }
        }
        currStrategy[point] = currPoint;
        this.saveStrategyFromUpdate(strIndex, currStrategy)
        this.setState({
          [point]: currPoint,
          phaseIndex: phsIndex,
          changed: false,
          saved: true
        });
        break;
      case 'updateSituation':
        if(isDefined(currPoint.phases)){
          currPoint.phases[phsIndex].situations[situationIndex].name = e;
          currSituation = currPoint.phases[phsIndex].situations[situationIndex];
        } else {
          currPoint.situations[situationIndex].name = e;
          currSituation = currPoint.situations[situationIndex];
        }
        currStrategy[point] = currPoint;
        console.log('updateSituation: ', currStrategy);
        this.saveStrategyFromUpdate(strIndex, currStrategy)
        this.setState({
          [point]: currPoint,
          situation: currSituation,
          situationIndex: situationIndex,
          changed: false,
          saved: true
        });
        break;
      case 'deleteSituation':
        if(isDefined(currPoint.phases)){
          delSituations = currPoint.phases[phsIndex].situations;
          updSituations = delSituations.filter((situation, index, arr) => {
              if(index !== situationIndex){
                return true;
              }
              return false;
          });
          currStrategy[point].phases[phsIndex].situations = updSituations;
        } else {
          delSituations = currPoint.situations;
          updSituations = delSituations.filter((situation, index, arr) => {
              console.log('deleteStrategyFromUpdate filter:', index, situationIndex);
              if(index !== situationIndex){
                return true;
              }
              return false;
          });
          currStrategy[point].situations = updSituations;
        }
        this.saveStrategyFromUpdate(strIndex, currStrategy)
        this.setState({
          [point]: currPoint,
          situationIndex: 0,
          situation: {},
          changed: false,
          saved: true,
          view: 'Points'
        });
        break;
      case 'updateCondition':
        if(isDefined(currPoint.phases) && currPoint.phases !== null){
          if(element === 'name'){
            currPoint.phases[phsIndex].situations[situationIndex].conditions[conIndex].name = e;
          } else {
            currPoint.phases[phsIndex].situations[situationIndex].conditions[conIndex].code = e;
          }
          currSituation= currPoint.phases[phsIndex].situations[situationIndex];
          console.log('updateCondition w Phase: ', currPoint);
        } else {
          console.log('updateCondition no phase: ', currPoint);
          if(element === 'name'){
            currPoint.situations[situationIndex].conditions[conIndex].name = e;
          } else {
            currPoint.situations[situationIndex].conditions[conIndex].code = e;
          }
          currSituation = currPoint.situations[situationIndex];
          console.log('updateCondition no phase: ', currPoint);
        }
        currStrategy[point] = currPoint;
        console.log('updateCondition: ', currStrategy);
        this.saveStrategyFromUpdate(strIndex, currStrategy)
        this.setState({
          [point]: currPoint,
          conditionIndex: conIndex,
          situation: currSituation,
          changed: false,
          saved: true
        });
        break;
      case 'deleteCondition':
        if(isDefined(currPoint.phases)){
          delConditions = currPoint.phases[phsIndex].situations[situationIndex].conditions;
          updConditions = delConditions.filter((condition, index, arr) => {
              if(index !== conIndex){
                return true;
              }
              return false;
          });
          currStrategy[point].phases[phsIndex].situations[situationIndex].conditions = updConditions;
          currSituation= currPoint.phases[phsIndex].situations[situationIndex];
        } else {
          delConditions = currPoint.situations[situationIndex].conditions;
          updConditions = delConditions.filter((condition, index, arr) => {
              console.log('deleteConditionFromUpdate filter:', index, conIndex);
              if(index !== conIndex){
                return true;
              }
              return false;
          });
          currStrategy[point].situations[situationIndex].conditions = updConditions;
          currSituation= currPoint.situations[situationIndex];
        }
        this.saveStrategyFromUpdate(strIndex, currStrategy)
        this.setState({
          [point]: currPoint,
          conditionIndex: 0,
          condition: {},
          situation: currSituation,
          changed: false,
          saved: true,
          view: 'Conditions'
        });
        break;
      case 'deletePhase':
        let delPhases;
        if(isDefined(currPoint.phases)){
          delPhases = currPoint.phases;
          let filtered = delPhases.filter((value, index, arr) => {
              return index !== phsIndex;
          });
          currStrategy[point].phases = filtered;
        }
        console.log('deletePhase', currStrategy[point].phases);
        this.saveStrategyFromUpdate(strIndex, currStrategy)
        this.setState({
          [point]: currPoint,
          phaseIndex: 0,
          phase: {},
          changed: false,
          saved: true,
          view: 'Points'
        });
        break;
      default:
        throw new Error();
    }
    console.log('Post updatePoint: ', e, point, type, phsIndex, sitIndex, conIndex, this.state);
  }

  async submitSave(e){
    e.preventDefault();

    const { handleSaveStrategy, saveStrategy, id, strategies } = this.props;
    const {
      index,
      name,
      entryPoint,
      exitPoint,
      sellPoint,
      buyPoint,
      stopLoss,
      buyOrder,
      sellOrder
    } = this.state;

    const stratIndex = index;

    const strategy = {
      name,
      entryPoint,
      exitPoint,
      sellPoint,
      buyPoint,
      stopLoss,
      buyOrder,
      sellOrder
    };
    console.log('submitSave: ', id, strategies, stratIndex, strategy);
    strategies.subStrategies[stratIndex]=strategy;

    let saved = await handleSaveStrategy(saveStrategy, strategies.subStrategies, id);

    console.log('submitSave: ', await saved);

    this.setState({ saved: true, changed: false });
  }

  async saveStrategyFromUpdate(strIndex, strategy){
    const { saveStrategy } = this.props;
    const strategies = this.state.fb.strategy.subStrategies;
    const id = this.state.id;
    console.log('saveStrategy: ', strategies, strIndex, strategy, id);

    let updateState = { saved: true, changed: false };
    if(strIndex === 'new'){
      const newIndex = strategies.length++;
      strategies[newIndex] = strategy;
      updateState = { saved: true, changed: false, stratIndex: newIndex, strategy: strategy };
    } else {
      strategies[strIndex] = strategy;
      updateState = { saved: true, changed: false, stratIndex: strIndex, strategy: strategy };
    }
    console.log('saveStrategy update: ', strategies);
    let saved = await saveStrategy({
      variables: {
        id,
        strategy:{
          subStrategies: strategies
        }
      }
    });

    console.log('saveStrategy saved: ', await saved);

    this.setState(updateState);
  }

  async deleteStrategyFromUpdate(strIndex){
    const { saveStrategy } = this.props;
    const strategies = this.state.fb.strategy.subStrategies;
    const id = this.state.id;
    console.log('deleteStrategy: ', strategies, strIndex, id);

    let filtered = null;
    if(!isNull(strIndex)){
      filtered = strategies.filter((strategy, index, arr) => {
          console.log('deleteStrategyFromUpdate filter:', index, strIndex);
          if(index !== strIndex){
            return true;
          }
          return false;
      });
    }
    console.log('deleteStrategy filtered: ', filtered);

    let saved = await saveStrategy({
      variables: {
        id,
        strategy:{
          subStrategies: filtered
        }
      }
    });

    console.log('deleteStrategy saved: ', await saved);

    this.setState({ saved: true, changed: false, strategy: filtered[0], view: 'Strategies' });
  }
}

export default withStyles(styles)(Layout);
