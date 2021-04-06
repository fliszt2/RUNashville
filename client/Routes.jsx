import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Profile from './components/social/Profile';

const Routes = () => (
  <Router>
    <Switch>
      <Route
        path={['/', '/log-in']}
        exact
        render={() => (
          <Login />
        )}
      />
      <Route
        path="/sign-up"
        exact
        render={() => (
          <Signup />
        )}
      />
      <Route
        path="/profile"
        exact
        render={() => (
          <Profile />
        )}
      />
    </Switch>
  </Router>
);

ReactDOM.render(<Routes />, document.getElementById('app'));
