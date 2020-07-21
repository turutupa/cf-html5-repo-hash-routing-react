import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router'; // react-router v4/v5
import { ConnectedRouter } from 'connected-react-router';
import configureStore, { history } from './store/store';
import { Redirect } from 'react-router-dom';

import DefaultComponent from './DefaultComponent';

const store = configureStore(/* provide initial state if any */);

ReactDOM.render(
  <Provider store={store}>
    {/* place ConnectedRouter under Provider */}
    <ConnectedRouter history={history}>
      <>
        {/* your usual react-router v4/v5 routing */}
        <Switch>
          <Route
            exact
            path='/index.html'
            render={() => (
              <DefaultComponent name='Match' redirect='/miss/index.html' />
            )}
          />
          <Route
            path='/miss/index.html'
            render={() => (
              <DefaultComponent name='Miss' redirect='/index.html' />
            )}
          />
          <Route path='*' render={() => <Redirect to='/index.html' />} />
        </Switch>
      </>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
