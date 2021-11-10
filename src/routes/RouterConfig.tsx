import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import TodosList from '../pages/TodosList';
import Weather from '../pages/Weather/Weather';
import { HOME, WEATHER } from './CONSTANTS';
import RouterHistory from './history';


export default () => {
  return (
    <Router history={RouterHistory}>
        <Switch>
            <Route exact path={HOME} component={TodosList} />
            <Route exact path={WEATHER} component={Weather} />
        </Switch>
    </Router>
  );
};