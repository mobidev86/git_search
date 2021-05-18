import { FETCH_REPOS } from './actionTypes';

export const loadRepos = (result) => (dispatch) => dispatch({
  type: FETCH_REPOS,
  payload: result,
});
