import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Strategizer from './Components/Strategizer';
import ViewStrategy from './Components/View';
import EditStrategy from './Components/Edit';

export const App = () => (
  <div className='strategizerModule'>
    <Switch>
      <Route exact path='/strategizer/' component={Strategizer} />
      <Route exact path='/strategizer/manage-strategies' component={Strategizer} />
      <Route path='/strategizer/view/:team/:slug/:index' component={ViewStrategy} />
      <Route path='/strategizer/edit/:team/:slug/:index' component={EditStrategy} />
    </Switch>
  </div>
)

export default App;
