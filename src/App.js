import './App.css';
import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import store from './store';
import AppRoute from './navigation/AppRoutes';
import { routesConfig } from './navigation/RoutesConfig';

export const history = createBrowserHistory();
function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <AppRoute routes={routesConfig} />
      </Router>
    </Provider>
  );
}

export default App;
