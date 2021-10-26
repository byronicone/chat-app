import React from 'react';
import 'rsuite/styles/index.less';
import './styles/main.scss';
import { Switch } from 'react-router';
import SignIn from './pages/SignIn';
import PrivateRoute from './components/PrivateRoute';
import Home from './pages/Home';
import PublicRoute from './components/PublicRoute';

function App() {
  return (
    <Switch>
      <PublicRoute path="/signIn">
        <SignIn />
      </PublicRoute>
      <PrivateRoute path="/home">
        <Home />
      </PrivateRoute>
    </Switch>
  );
}

export default App;
