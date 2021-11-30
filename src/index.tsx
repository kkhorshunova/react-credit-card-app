import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';
import {createBrowserHistory} from 'history';
import {ThemeProvider} from 'styled-components';

import './index.css';
import App from './App';
import theme from 'assets/styles/theme';
import configureStore from 'store/store';

export const history = createBrowserHistory();
const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Router history={history}>
        <Provider store={store}>
          <App/>
        </Provider>
      </Router>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
