import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Profile from './components/social/Profile';
import Admin from './components/admin/Admin';
import HeaderBar from './components/HeaderBar';

const Routes = () => (

  <div>
   <HeaderBar />
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
        path="/admin"
        exact
        render={() => (
          <Admin />
        )}
      />
    </Switch>
  </Router>
  </div>
);

ReactDOM.render(<Routes />, document.getElementById('app'));
