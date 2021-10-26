import React from 'react';
import { Redirect, Route } from 'react-router';

const PublicRoute = ({ children, ...props }) => {
  const profile = false;
  if (profile) {
    return <Redirect to="/home" />;
  }
  return <Route {...props}>{children}</Route>;
};

export default PublicRoute;
