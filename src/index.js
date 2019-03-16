import React from 'react';
import { Route, Switch } from 'react-router-dom';


import Strategizer from './Components/Strategizer';
import ViewStrategy from './Components/View';

const App = () => (
  <div className='strategizerModule'>
    <Switch>
      <Route exact path='/strategizer/' component={Strategizer} />
      <Route exact path='/strategizer/manage-strategies' component={Strategizer} />
      <Route path='/strategizer/view/:slug' component={ViewStrategy} />
    </Switch>
  </div>
);

export default App;
