import React from 'react';
import { Redirect, Route } from 'react-router';
import { Container, Loader } from 'rsuite';
import { useProfile } from '../contexts/profile.context';

const PrivateRoute = ({ children, ...props }) => {
  const { isLoading, profile } = useProfile();
  if (isLoading) {
    return (
      <Container>
        <Loader center vertical size="md" content="loading" speed="normal" />
      </Container>
    );
  }
  if (!isLoading && !profile) {
    return <Redirect to="/signIn" />;
  }
  return <Route {...props}>{children}</Route>;
};

export default PrivateRoute;
