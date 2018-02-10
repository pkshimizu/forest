import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import files from "./files";

const reducers = combineReducers({
  routing: routerReducer,
  files
});

export default reducers;