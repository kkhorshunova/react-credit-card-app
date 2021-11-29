import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';
import {createBrowserHistory} from 'history';
import {ThemeProvider} from 'styled-components';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import theme from './theme';
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
