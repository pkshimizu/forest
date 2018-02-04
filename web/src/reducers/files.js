import {actionTypes} from "../actions";

const initState = {
  current_files: []
};

export default (state = initState, action) => {
  switch(action.type) {
    case actionTypes.BEGIN_LOAD_FILES:
      return state;
    case actionTypes.LOAD_FILES:
      return state;
    case actionTypes.LOAD_FILES_SUCCESS:
      return {...state, current_files: action.payload.data};
    default:
      return state;
  }
}