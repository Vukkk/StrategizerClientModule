import React from 'react';
import { Route, Switch } from 'react-router-dom';


import Strategizer from './Components/Strategizer';

const App = () => (
  <div className='strategizerModule'>
    <Switch>
      <Route exact path='/strategizer/' component={Strategizer} />
      <Route exact path='/strategizer/manage-strategies' component={Strategizer} />
    </Switch>
  </div>
);

export default App;
