import React from 'react';
import { Link } from 'react-router-dom';
import remove from 'lodash/remove';

import {
  Grid, Paper,
  Typography,
  Button,
} from '@material-ui/core';
import BannerTopBar from '../BannerTopBar';
import EditPoint from './EditPoint';
import EditOrder from './EditOrder';
import EditWrapper from './EditWrapper';

import { isDefined } from '../../utils';

import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

class EditItem extends React.Component {
  constructor (props) {
    super(props)

    this.updatePoint = this.updatePoint.bind(this);
    this.submitSave = this.submitSave.bind(this);

    const strategy = props.strategy;

    this.state = {
      index: props.index,
      name: strategy.name,
      entryPoint: strategy.entryPoint,
      exitPoint: strategy.exitPoint,
      sellPoint: strategy.sellPoint,
      buyPoint: strategy.buyPoint,
      stopLoss: strategy.stopLoss,
      buyOrder: strategy.buyOrder,
      sellOrder: strategy.sellOrder,
      changed: false,
      saved: false
    }
  }

  render() {
    const { classes, index, teamSlug, fbSlug, handleSaveStrategy, saveStrategy, id, strategies } = this.props;
    const {
      name,
      entryPoint,
      exitPoint,
      sellPoint,
      buyPoint,
      stopLoss,
      buyOrder,
      sellOrder
    } = this.props.strategy;

    return (
      <EditWrapper index={index} classes={classes} >
        <Grid item
        container
        direction="row"
        justify="space-between"
        alignItems="center"
        >
          <Grid item>
            <Typography
              variant='h4'
              align='left'
              color='textPrimary'
              gutterBottom
            >
              Editing Strategy: {name} ({teamSlug}/{fbSlug})
            </Typography>
          </Grid>
          <Grid item>
            <Button
              className={classes.editButton}
              variant='contained'
              color='secondary'
              size='large'
              disabled={!this.state.changed}
              onClick={e => this.submitSave(e)}
            >
              Save
            </Button>
          </Grid>
        </Grid>
        <Grid item
          container
          spacing={24}
        >
          <Grid item xs={12} >
            { entryPoint.situations.length > 0 &&
              <EditPoint
                sectionName="Entry Point"
                point="entryPoint"
                situations={entryPoint.situations}
                updatePoint={this.updatePoint}
                changed={this.state.changed}
                submitSave={this.submitSave}
              />
            }
            { exitPoint.situations.length > 0 &&
              <EditPoint
                sectionName="Exit Point"
                point="exitPoint"
                situations={exitPoint.situations}
                updatePoint={this.updatePoint}
                changed={this.state.changed}
                submitSave={this.submitSave}
              />
            }
            { sellPoint.situations.length > 0 &&
              <EditPoint
                sectionName="Sell Point"
                point="sellPoint"
                situations={sellPoint.situations}
                updatePoint={this.updatePoint}
                changed={this.state.changed}
                submitSave={this.submitSave}
              />
            }
            { buyPoint.situations.length > 0 &&
              <EditPoint
                sectionName="Buy Point"
                point="buyPoint"
                situations={buyPoint.situations}
                updatePoint={this.updatePoint}
                changed={this.state.changed}
                submitSave={this.submitSave}
              />
            }
            { stopLoss.phases.length > 0 &&
              <EditOrder
                sectionName="Stop Loss"
                point="stopLoss"
                phases={stopLoss.phases}
                updatePoint={this.updatePoint}
                changed={this.state.changed}
                submitSave={this.submitSave}
              />
            }
            { buyOrder.phases.length > 0 &&
              <EditOrder
                sectionName="Buy Order"
                point="buyOrder"
                phases={buyOrder.phases}
                updatePoint={this.updatePoint}
                changed={this.state.changed}
                submitSave={this.submitSave}
              />
            }
            { sellOrder.phases.length > 0 &&
              <EditOrder
                sectionName="Sell Order"
                point="sellOrder"
                phases={sellOrder.phases}
                updatePoint={this.updatePoint}
                changed={this.state.changed}
                submitSave={this.submitSave}
              />
            }
          </Grid>
        </Grid>
      </EditWrapper>
    );
  }

  updatePoint (e, point, type, phsIndex, sitIndex, conIndex, element) {
    let currState = this.state;
    let currPoint = currState[point];
    console.log('updatePoint: ', e, point, type, phsIndex, sitIndex, conIndex, element, currPoint);

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

}

export default withStyles(styles)(EditItem);
