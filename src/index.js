import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Strategizer from './Components/Strategizer';
import ViewStrategy from './Components/View';
import EditStrategy from './Components/Edit';

import {
  LOCAL_STRATEGIES,
  strategyResolvers,
  localStrategiesCache
} from './GraphQL/Local';

export default function App () {
  return (
    <div className='strategizerModule'>
      <Switch>
        <Route exact path='/strategizer/' component={Strategizer} />
        <Route exact path='/strategizer/manage-strategies' component={Strategizer} />
        <Route path='/strategizer/view/:slug/:index' component={ViewStrategy} />
        <Route path='/strategizer/edit/:slug/:index' component={EditStrategy} />
      </Switch>
    </div>
  );
}

export {
  LOCAL_STRATEGIES,
  strategyResolvers,
  localStrategiesCache
}
