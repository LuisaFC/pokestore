import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Home from '../pages/Home';
import Water from '../pages/Water';
import Fire from '../pages/Fire';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/water" component={Water} />
    <Route path="/fire" component={Fire} />
  </Switch>
);

export default Routes;
