import React, { lazy } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

// Pages
//import { Main } from './pages/Main/Main';
import { Splash } from './components/Splash/Splash';
import { Profile } from './components/Profile/Profile';


// Pages / Chunks to create
const Main = lazy(() => import('./pages/Main/Main'));

export const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/home" render={(props) => (<Main subPage={ <Splash />} />)} />
        <Route exact path="/profile" render={(props) => (<Main subPage={ <Profile />} />)} />
        <Route exact path="/home/:id" render={(props) => (<Main subPage={ <Splash />} />)} />
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
      </Switch>
    </div>
  );
};