import React from 'react';
import { Redirect, Route } from 'react-router';
import { Container, Loader } from 'rsuite';
import { useProfile } from '../contexts/profile.context';

const PublicRoute = ({ children, ...props }) => {
  const { isLoading, profile } = useProfile();
  if (isLoading) {
    return (
      <Container>
        <Loader center vertical size="md" content="loading" speed="normal" />
      </Container>
    );
  }
  if (!isLoading && profile) {
    return <Redirect to="/" />;
  }
  return <Route {...props}>{children}</Route>;
};

export default PublicRoute;
