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
import OrderPoint from './OrderPoint';
import ViewSpace from '../ViewSpace';

import { isDefined } from '../../utils';

class Layout extends React.Component {
  constructor (props) {
    super(props);

    this.updatePoint = this.updatePoint.bind(this);
    this.submitSave = this.submitSave.bind(this);
    this.setTeam = this.setTeam.bind(this);
    this.setFB = this.setFB.bind(this);
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
}

  render () {
    const { classes, listStrategies, saveStrategy, createStrategy } = this.props;
    console.log('Layout state: ', this.state);
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
        <Grid item xs={12} md={4}>
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
                <OrderPoint
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
                  setView={this.setView}
                />
              </List>
              <div className={classes.teamsListWrapper}>
                <List className={classes.teamsList} disablePadding >
                  <Teams
                    teams={listStrategies.teams_TeamsByOwner}
                    team={this.state.team}
                    setTeam={this.setTeam}
                    setView={this.setView}
                  />
                  <FBs
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
          />
        </Grid>
      </Grid>
    )
  }

  setTeam (team) {
    this.setState(state => ({ team: team }));
  };

  setFB (fb) {
    this.setState(state => ({ fb: fb }));
  };

  setStrategy (strategy, view, index) {
    this.setState(state => ({ strategy: strategy, view: view, stratIndex: index  }));
  };

  setPoint (point, view) {
    this.setState(state => ({ point: point, view: view }));
  };

  setPhase (phase, index, view) {
    console.log('setPhase: ', phase, index);
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
    let currState = this.state;
    let currStrategy = currState.strategy;
    let currPoint = currStrategy[point];
    console.log('updatePoint: ', e, point, type, strIndex, phsIndex, sitIndex, conIndex, element, currPoint, currStrategy);

    switch (type) {
      case 'addPhase':
        currPoint.phases.push({
          name: 'New Phase',
          code: 'Code for new phase',
          situations: []
        });
        this.setState({
          [point]: currPoint,
          changed: true
        });
        break;
      case 'addSituation':
        if(isDefined(currPoint.phases)){
          console.log('addSituation Phase: ', phsIndex, currPoint.phases[phsIndex]);
          currPoint.phases[phsIndex].situations.push({
            name: 'New Situation',
            conditions: []
          });
        } else {
          currPoint.situations.push({
            name: 'New Situation',
            conditions: []
          });
        }
        this.setState({
          [point]: currPoint,
          changed: true
        });
        break;
      case 'addCondition':
        if(isDefined(currPoint.phases)){
          currPoint.phases[phsIndex].situations[sitIndex].conditions.push({
            name: 'New Condition',
            code: 'Code for new Condition'
          });
        } else {
          currPoint.situations[sitIndex].conditions.push({
            name: 'New Condition',
            code: 'Code for new Condition'
          });
        }
        this.setState({
          [point]: currPoint,
          changed: true
        });
        break;
      case 'addStrategy':
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
        this.saveStrategyFromUpdate('new', newStrategy);
        this.setState({
          strIndex: 0,
          strategy: newStrategy
        });
        break;
      case 'updateStrategy':
        if(isDefined(currStrategy)){
          if(element === 'active'){
            currStrategy.active = e;
          } else {
            currStrategy.name = e;
          }
          console.log('updateStrategy: ', currStrategy);
        }
        this.saveStrategyFromUpdate(point, currStrategy);
        this.setState({
          strIndex: 0,
          strategy: currStrategy
        });
        break;
      case 'deleteStrategy':
        if(isDefined(strIndex)){
          if(element === 'active'){
            currStrategy.active = e;
          } else {
            currStrategy.name = e;
          }
          console.log('updateStrategy: ', currStrategy);
        }
        this.setState({
          stratIndex: 0,
          changed: false,
          saved: true
        });
        this.deleteStrategyFromUpdate(strIndex);
        break;
      case 'updatePhase':
        if(isDefined(currPoint.phases)){
          if(element === 'name'){
            currPoint.phases[phsIndex].name = e;
          } else {
            currPoint.phases[phsIndex].code = e;
          }
          console.log('updateCondition w Phase: ', currPoint);
        } else {
          if(element === 'name'){
            currPoint.phases[phsIndex].situations[sitIndex].conditions[conIndex].name = e;
          } else {
            currPoint.phases[phsIndex].situations[sitIndex].conditions[conIndex].code = e;
          }
          console.log('updateCondition w Phase: ', currPoint);
        }
        this.setState({
          [point]: currPoint,
          changed: true
        });
        break;
      case 'updateSituation':
        if(isDefined(currPoint.phases)){
          currPoint.phases[phsIndex].situations[sitIndex].name = e;
        } else {
          currPoint.situations[sitIndex].name = e;
        }
        this.setState({
          [point]: currPoint,
          changed: true
        });
        break;
      case 'updateCondition':
        if(isDefined(currPoint.phases) && currPoint.phases !== null){
          if(element === 'name'){
            currPoint.phases[phsIndex].situations[sitIndex].conditions[conIndex].name = e
          } else {
            currPoint.phases[phsIndex].situations[sitIndex].conditions[conIndex].code = e;
          }
          console.log('updateCondition w Phase: ', currPoint);
        } else {
          if(element === 'name'){
            currPoint.situations[sitIndex].conditions[conIndex].name = e;
          } else {
            currPoint.situations[sitIndex].conditions[conIndex].code = e;
          }
          console.log('updateCondition w Phase: ', currPoint);
        }
        this.setState({
          [point]: currPoint,
          changed: true
        });
        break;
      case 'deletePhase':
        if(isDefined(currPoint.phases)){
          let filtered = array.filter((value, index, arr) => {
              return value !== phsIndex;
          });
          currPoint.phases = filtered
        }
        console.log('deletePhase', currPoint.phases);
        this.setState({
          [point]: currPoint,
          changed: true
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

  async saveStrategy(strIndex){

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
    console.log('saveStrategy: ', id, strategies, strIndex, strategy);
    strategies.subStrategies[strIndex]=strategy;

    let saved = await handleSaveStrategy(saveStrategy, strategies.subStrategies, id);

    console.log('saveStrategy saved: ', await saved);

    this.setState({ saved: true, changed: false });
  }

  async saveStrategyFromUpdate(strIndex, strategy){
    const { saveStrategy } = this.props;
    const strategies = this.state.fb.strategy.subStrategies;
    const id = this.state.id;
    console.log('saveStrategy: ', strategies, strIndex, strategy, id);

    if(strIndex === 'new'){
      const newIndex = strategies.length++;
      strategies[newIndex] = strategy;
    } else {
      strategies[strIndex] = strategy;
    }

    let saved = await saveStrategy({
      variables: {
        id,
        strategy:{
          subStrategies: strategies
        }
      }
    });

    console.log('saveStrategy saved: ', await saved);

    this.setState({ saved: true, changed: false });
  }

  async deleteStrategyFromUpdate(strIndex, strategy){
    const { saveStrategy } = this.props;
    const strategies = this.state.fb.strategy.subStrategies;
    const id = this.state.id;
    console.log('saveStrategy: ', strategies, strIndex, strategy, id);

    let filtered = null;
    if(!isNull(strIndex)){
      filtered = strategies.filter((strategy, index, arr) => {
          if(index !== strIndex){
            return strategy;
          }
          return;
      });
    }

    let saved = await saveStrategy({
      variables: {
        id,
        strategy:{
          subStrategies: filtered
        }
      }
    });

    console.log('saveStrategy saved: ', await saved);

    this.setState({ saved: true, changed: false });
  }

}

export default withStyles(styles)(Layout);
