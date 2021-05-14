import React, { lazy } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

// Pages / Chunks to create
const Main = lazy(() => import('./pages/Main/Main'));
const Splash = lazy(() => import('./pages/Splash/SplashPage'));
const Profile = lazy(() => import('./pages/Profile/ProfilePage'));
const Charts = lazy(() => import('./pages/Charts/ChartsPage'));

export const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/home" render={(props) => (<Main subPage={ <Splash />} />)} />
        <Route exact path="/profile" render={(props) => (<Main subPage={ <Profile />} />)} />
        <Route exact path="/home/:id" render={(props) => (<Main subPage={ <Splash />} />)} />
        <Route exact path="/charts" render={(props) => (<Main subPage={ <Charts />} />)} />
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
      </Switch>
    </div>
  );
};