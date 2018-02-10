import {actionTypes} from "../actions";

const initState = {
  current_files: [],
  loading: false
};

export default (state = initState, action) => {
  switch(action.type) {
    case actionTypes.LOAD_FILES:
      return {...state, loading: true};
    case actionTypes.LOAD_FILES_SUCCESS:
      if(action.payload.data.children) {
        return {...state, current_files: action.payload.data.children, loading: false};
      }
      return {...state, current_files: action.payload.data, loading: false};
    default:
      return state;
  }
}