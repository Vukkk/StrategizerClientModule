import React from 'react';
import { Route, Switch } from 'react-router-dom';


import Search from './Components/Search';

const App = () => (
  <div className='eventsModule'>
    <Switch>
      <Route exact path='/events/' component={Search} />
    </Switch>
  </div>
);

export default App;
