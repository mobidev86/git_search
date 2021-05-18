import './App.css';
import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import store from './store';
import history from './@history';
import AppRoute from './navigation/AppRoutes';
import { routesConfig } from './navigation/RoutesConfig';

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
