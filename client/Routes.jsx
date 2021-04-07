import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Profile from './components/social/Profile';
import Main from './components/Main';
import Homepage from './components/Homepage';

const Routes = () => (
  <Router>
    <Switch>
      <Route
        path="/login"
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
      <Route
        path={['/', '/main']}
        exact
        render={() => (
          <Main />
        )}
      />
      <Route
        path="/homepage"
        exact
        render={() => (
          <Homepage />
        )}
      />
    </Switch>
  </Router>
);

ReactDOM.render(<Routes />, document.getElementById('app'));
