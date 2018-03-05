import {actionTypes} from "../actions";
import * as Materialize from "materialize-css";

const initState = {
  current_files: [],
  parents: [],
  loading: false
};

export default (state = initState, action) => {
  if (action.type.endsWith("_FAIL")) {
    Materialize.toast(action.error.message, 4000, "toast_error");
  }
  switch(action.type) {
    case actionTypes.LOAD_FILES:
      return {...state, loading: true};
    case actionTypes.LOAD_FILES_SUCCESS:
      if(action.payload.data.children) {
        return {
          ...state,
          current_files: action.payload.data.children,
          parents: action.payload.data.parents,
          loading: false
        };
      }
      return {
        ...state,
        current_files: action.payload.data,
        parents: [],
        loading: false
      };
    default:
      return state;
  }
}