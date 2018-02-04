import {actionTypes} from "../actions";

const initState = {
  files: []
};

export default (state = initState, action) => {
  switch(action.type) {
    case actionTypes.BEGIN_LOAD_FILES:
      return state;
    case actionTypes.LOAD_FILES:
      return state;
    case actionTypes.LOAD_FILES_SUCCESS:
      return state;
    default:
      return state;
  }
}