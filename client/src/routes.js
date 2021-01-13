import React from 'react';
import { Main } from './pages/Main';
import { Route, Switch, Redirect } from 'react-router-dom';

export const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/Home" component={Main} />
        <Route exact path="/">
          <Redirect to="/Home" />
        </Route>
      </Switch>
    </div>
  );
};