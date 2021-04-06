import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import RaceJumbotron from './components/Events/RaceJumbotron';
import EventsCarousel from './components/Events/EventsCarousel';
import Profile from './components/Profile';
import Main from './components/Main';

const Routes = () => (
  <Router>
    <Switch>
      <Route
        path={['/', '/login']}
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
        path="/main"
        exact
        render={() => (
          <Main />
        )}
      />
      <Route
        path="/homepage"
        exact
        render={() => (
          <>
          <RaceJumbotron />
          <EventsCarousel/>
          </>
        )}
      />
    </Switch>
  </Router>
);

ReactDOM.render(<Routes />, document.getElementById('app'));
