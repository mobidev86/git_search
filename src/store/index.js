/* eslint-disable no-console */
import * as reduxModule from 'redux';
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import createReducer from './rootReducer';

// eslint-disable-next-line no-underscore-dangle
reduxModule.__DO_NOT_USE__ActionTypes.REPLACE = '@@redux/INIT';
const composeEnhancers = process.env.NODE_ENV !== 'production'
  && typeof window === 'object'
  && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose;

export const loadLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState !== null) {
      return JSON.parse(serializedState);
    }
    return {};
  } catch (e) {
    console.log('error fetching state', e);
    return {};
  }
};

const persistedState = loadLocalStorage();
const enhancer = composeEnhancers(applyMiddleware(thunk));
const store = createStore(createReducer(), persistedState, enhancer);

// eslint-disable-next-line no-use-before-define
store.subscribe(() => saveToLocalStorage(store.getState()));

store.asyncReducers = {};

export const saveToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (e) {
    console.log('error saving state', e);
  }
};

export default store;
