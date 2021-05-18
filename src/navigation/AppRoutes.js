import React from 'react';
import { Route, Switch } from 'react-router-dom';

export default function AppRoute(props) {
  // eslint-disable-next-line react/destructuring-assignment
  const config = props.routes || [];
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <Switch>
      {config.map((value, index) => (
        <Route
          // eslint-disable-next-line react/no-array-index-key
          key={index}
          exact={value.exact || false}
          path={value.path}
          component={value.component}
        />
      ))}
    </Switch>
  );
}
