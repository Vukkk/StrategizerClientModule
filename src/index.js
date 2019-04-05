import React from 'react';
import { hot } from 'react-hot-loader'
import { Route, Switch } from 'react-router-dom';

import Strategizer from './Components/Strategizer';
import ViewStrategy from './Components/View';
import EditStrategy from './Components/Edit';
import Workspace from './Components/Workspace';

export const App = () => (
  <div className='strategizerModule'>
    <Switch>
      <Route exact path='/strategizer/' component={Strategizer} />
      <Route exact path='/strategizer/manage-strategies' component={Strategizer} />
      <Route path='/strategizer/view/:team/:slug/:index' component={ViewStrategy} />
      <Route path='/strategizer/edit/:team/:slug/:index' component={EditStrategy} />
      <Route exact path='/strategizer/workspace/' component={Workspace} />
    </Switch>
  </div>
)

// export default App;
export default hot(module)(App)
