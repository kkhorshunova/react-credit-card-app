import React, {ReactElement} from 'react';
import {Route, RouteProps, Redirect, Switch} from 'react-router-dom';

import {routes} from './routes';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/cards" />
      </Route>
      {routes.map(
        (route: RouteProps, index): ReactElement =>
          <Route key={index} {...route} />
      )}
    </Switch>
  );
}

export default App;
