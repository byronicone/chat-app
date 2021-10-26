import React from 'react';
import { Redirect, Route } from 'react-router';

const PrivateRoute = ({ children, ...props }) => {
  const profile = false;
  if (!profile) {
    return <Redirect to="/signIn" />;
  }
  return <Route {...props}>{children}</Route>;
};

export default PrivateRoute;
