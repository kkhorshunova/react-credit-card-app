import React, {ReactElement} from 'react';
import {Route, RouteProps, Switch} from 'react-router-dom';

import {routes} from "./routes";

function App() {
  return (
    <Switch>
      {routes.map(
        (route: RouteProps): ReactElement =>
          <Route {...route} />
      )}
    </Switch>

  );
}

export default App;
