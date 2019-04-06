import React from 'react';
import { hot } from 'react-hot-loader'
import { Route, Switch } from 'react-router-dom';

import Workspace from './Components/Workspace';

export const App = () => (
  <div className='strategizerModule'>
    <Switch>
      <Route exact path='/strategizer/' component={Workspace} />
    </Switch>
  </div>
)

// export default App;
export default hot(module)(App)
