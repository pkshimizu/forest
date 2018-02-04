import React from 'react'
import { render } from 'react-dom'

import {applyMiddleware, createStore} from 'redux';
import reducers from './reducers';
import { Provider } from "react-redux";
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';

import 'materialize-css'
import '../node_modules/materialize-css/dist/css/materialize.min.css'

import SiteLayout from "./components/site_layout";

const client = axios.create({
  baseURL:'http://localhost:8000',
  responseType: 'json'
});

const store = createStore(
  reducers,
  applyMiddleware(
    axiosMiddleware(client),
  )
);

render(
  <Provider store={store}>
    <SiteLayout/>
  </Provider>,
  document.getElementById('root')
);