import React from 'react'
import { render } from 'react-dom'

import { createStore } from 'redux';
import reducers from './reducers';
import { Provider } from "react-redux";

const store = createStore(reducers);

render(
  <Provider store={store}>
    <div></div>
  </Provider>,
  document.getElementById('root')
);