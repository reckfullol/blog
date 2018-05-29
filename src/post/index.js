import './style.css';

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import configureStore from './store';

import App from '@/App';

const history = createHistory();
const store = configureStore({}, history);

ReactDOM.render(
<Provider store={store}>
  <ConnectedRouter history={history}>
  <App/>
  </ConnectedRouter>
  </Provider>,
document.getElementById('app')
);
