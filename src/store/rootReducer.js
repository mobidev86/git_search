import { combineReducers } from 'redux';
import generalReducer from './reducers/general';

const createReducer = (asyncReducers) => combineReducers({
  general: generalReducer,
  ...asyncReducers,
});

export default createReducer;
