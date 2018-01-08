import React from 'react'
import { render } from 'react-dom'

import { createStore } from 'redux';
import reducers from './reducers';
import { Provider } from "react-redux";

import 'materialize-css'
import '../node_modules/materialize-css/dist/css/materialize.min.css'

import SiteLayout from "./components/site_layout";

const store = createStore(reducers);

render(
  <Provider store={store}>
    <SiteLayout/>
  </Provider>,
  document.getElementById('root')
);