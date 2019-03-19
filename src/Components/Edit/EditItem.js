import React from 'react';
import { Link } from 'react-router-dom';

import {
  Grid, Paper,
  Typography,
  Button,
} from '@material-ui/core';
import BannerTopBar from '../BannerTopBar';
import EntryPoint from './EntryPoint';
import ExitPoint from '../View/ExitPoint';
import BuyPoint from '../View/BuyPoint';
import SellPoint from '../View/SellPoint';
import StopLoss from '../View/StopLoss';
import BuyOrder from '../View/BuyOrder';
import SellOrder from '../View/SellOrder';
import EditWrapper from './EditWrapper';

import { isDefined } from '../../utils';

import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

class EditItem extends React.Component {
  constructor (props) {
    super(props)

    this.updatePoint = this.updatePoint.bind(this)

    const strategy = props.strategy

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
      changed: false
    }
  }

  render() {
    const { classes, index } = this.props;
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
              Strategy: {name}
            </Typography>
          </Grid>
          <Grid item>
            <Button
              className={classes.editButton}
              variant='contained'
              color='secondary'
              size='large'
              disabled={!this.state.changed}
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
              <EntryPoint
                sectionName="Entry Point"
                situations={entryPoint.situations}
                updatePoint={this.updatePoint}
              />
            }
            { exitPoint.situations.length > 0 && <ExitPoint sectionName="Exit Point" situations={exitPoint.situations} /> }
            { sellPoint.situations.length > 0 && <SellPoint sectionName="Sell Point" situations={sellPoint.situations} /> }
            { buyPoint.situations.length > 0 && <BuyPoint sectionName="Buy Point" situations={buyPoint.situations} /> }
            { stopLoss.phases.length > 0 && <StopLoss sectionName="Stop Loss" phases={stopLoss.phases} /> }
            { buyOrder.phases.length > 0 && <BuyOrder sectionName="Buy Order" phases={buyOrder.phases} /> }
            { sellOrder.phases.length > 0 && <SellOrder sectionName="Sell Order" phases={sellOrder.phases} /> }
          </Grid>
        </Grid>
      </EditWrapper>
    );
  }

  updatePoint (e, point, type, phsIndex, sitIndex, conIndex, element) {
    let currState = this.state;
    let currPoint = currState[point];
    console.log('currPoint: ', currPoint);

    switch (type) {
      case 'addPhase':
        currPoint.phases.push({
          name: 'New Phase',
          code: 'Code for new phase',
          situations: {
            name: 'New Situation',
            conditions: {
              name: 'New Condition',
              code: 'Code for new Condition'
            }
          }
        });
        this.setState({
          [point]: currPoint,
          ...currState
        });
        break;
      case 'addSituation':
        if(isDefined(currPoint.phases)){
          currPoint.phases[phsIndex].situations.push({
            name: 'New Situation',
            conditions: {
              name: 'New Condition',
              code: 'Code for new Condition'
            }
          });
        } else {
          currPoint.situations.push({
            name: 'New Situation',
            conditions: [{
              name: 'New Condition',
              code: 'Code for new Condition'
            }]
          });
        }
        this.setState({
          [point]: currPoint,
          changed: true,
          ...currState
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
          changed: true,
          ...currState
        });
        break;
      case 'updatePhase':
        this.setState({currState});
        break;
      case 'updateSituation':
        this.setState({currState});
        break;
      case 'updateCondition':
        if(isDefined(currPoint.phases)){
          if(element === 'name'){
            currPoint.phases[phsIndex].situations[sitIndex].conditions[conIndex].name = e.target.value;
          } else {
            currPoint.phases[phsIndex].situations[sitIndex].conditions[conIndex].code = e.target.value;
          }
          console.log('updateCondition w Phase: ', currPoint);
        } else {
          if(element === 'name'){
            currPoint.phases[phsIndex].situations[sitIndex].conditions[conIndex].name = e.target.value;
          } else {
            currPoint.phases[phsIndex].situations[sitIndex].conditions[conIndex].code = e.target.value;
          }
          console.log('updateCondition w Phase: ', currPoint);
        }
        this.setState({
          [point]: currPoint,
          ...currState
        });
        break;
      default:
        throw new Error();
    }
    console.log('Post updatePoint: ', e, point, type, phsIndex, sitIndex, conIndex, this.state);
  }
}

export default withStyles(styles)(EditItem);
