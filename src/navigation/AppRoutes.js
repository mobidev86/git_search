import React from 'react';
import { Route, Switch } from 'react-router-dom';

export default function AppRoute(props) {
  const config = props.routes || [];
  return (
    <Switch>
      {config.map((value, index) => (
        <Route
          key={index}
          exact={value.exact || false}
          path={value.path}
          component={value.component}
        />
      ))}
    </Switch>
  );
}
