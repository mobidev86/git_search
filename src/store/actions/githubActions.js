import { FETCH_REPOS } from './actionTypes';
import { GITHUB_API } from '../../apis/github';

export const loadRepos = (subject) => (dispatch) => GITHUB_API.loadRepos(subject).then((res) => {
  dispatch({
    type: FETCH_REPOS,
    payload: res,
  });
}).catch((err) => {
  console.log('error loading response', err);
});
