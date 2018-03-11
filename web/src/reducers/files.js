import {actionTypes} from "../actions";
import * as Materialize from "materialize-css";

const initState = {
  current_files: [],
  parents: [],
  loading: false,
  selected_uuids: []
};

export default (state = initState, action) => {
  if (action.type.endsWith("_FAIL")) {
    Materialize.toast(action.error.message, 4000, "toast_error");
  }
  switch(action.type) {
    case actionTypes.LOAD_FILES:
      return {...state, loading: true};
    case actionTypes.LOAD_FILES + '_SUCCESS':
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
    case actionTypes.SELECT_FILE:
      let uuids = state.selected_uuids;
      if (uuids.includes(action.payload.uuid)) {
        uuids = uuids.filter((e, i, a) => e !== action.payload.uuid)
      } else {
        uuids = Object.assign([], uuids);
        uuids.push(action.payload.uuid)
      }
      return {...state, selected_uuids: uuids};
    case actionTypes.CLEAR_SELECTED_FILE:
      return {...state, selected_uuids: []};
    default:
      return state;
  }
}