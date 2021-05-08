import React, { lazy } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

// Pages
//import { Main } from './pages/Main/Main';
import { Splash } from './components/Splash/Splash';

// Pages / Chunks to create
const Main = lazy(() => import('./pages/Main/Main'));

export const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/Home" render={(props) => (<Main subPage={ <Splash />} />)} />
        <Route exact path="/Home/:id" component={Main} />
        <Route exact path="/">
          <Redirect to="/Home" />
        </Route>
      </Switch>
    </div>
  );
};