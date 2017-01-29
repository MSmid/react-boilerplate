import React from 'react';
import { IndexRoute, Route } from 'react-router';
import { AuthenticationWrapper } from "./components/AuthenticationWrapper.js";
import { RootPageWrapper } from "./pages/RootPageWrapper.js";

import { AppPage } from './pages/AppPage.js';
import { PageNotFound } from './pages/PageNotFound.js';
import { HomePage } from "./pages/HomePage.js";
import { LandingPage } from "./pages/LandingPage.js";

export function createRoutes() {
  return (
    <Route path="/" component={AppPage}>
      <IndexRoute component={RootPageWrapper(AuthenticationWrapper(HomePage),LandingPage)}/>
      <Route path="*" component={PageNotFound}/>
    </Route>
  );
}
