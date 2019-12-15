import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import HelloWorld from '../pages/HelloWorld';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={HelloWorld} />

      <Route path="/" component={() => <h1>404</h1>} />
    </Switch>
  );
}
