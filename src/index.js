import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Strategizer from './Components/Strategizer';
import ViewStrategy from './Components/View';
import EditStrategy from './Components/Edit';

import {
  UPSERT_STRATEGIES,
  strategyResolvers,
} from './GraphQL/Local';

const App = () => (
  <div className='strategizerModule'>
    <Switch>
      <Route exact path='/strategizer/' component={Strategizer} />
      <Route exact path='/strategizer/manage-strategies' component={Strategizer} />
      <Route path='/strategizer/view/:slug' component={ViewStrategy} />
      <Route path='/strategizer/edit/:slug' component={EditStrategy} />
    </Switch>
  </div>
);

export {
  UPSERT_STRATEGIES,
  strategyResolvers
}

export default App;
