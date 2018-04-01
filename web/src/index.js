import React from 'react'
import { render } from 'react-dom'

import {applyMiddleware, createStore} from 'redux';
import reducers from './reducers';
import { Provider } from "react-redux";
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';

import 'materialize-css'
import '../node_modules/materialize-css/dist/css/materialize.min.css'

import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import SiteLayout from "./components/site_layout";
import FolderView from "./containers/card_view";

const client = axios.create({
  responseType: 'json'
});


const store = createStore(
  reducers,
  applyMiddleware(
    axiosMiddleware(client),
  )
);
const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path={"/"} component={SiteLayout}>
        <IndexRoute component={FolderView} />
        <Route path={"files/"} component={FolderView} />
        <Route path={"files/:uuid"} component={FolderView} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);