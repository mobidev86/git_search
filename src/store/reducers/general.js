import * as Actions from '../actions/actionTypes';

const initialState = {
  data: [],
};
function MessageBarReducer(state = initialState, action) {
  switch (action.type) {
    case Actions.FETCH_REPOS:
      return {
        ...state,
        data: action.payload,
      };

    default:
      return state;
  }
}
export default MessageBarReducer;
