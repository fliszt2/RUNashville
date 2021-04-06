import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
<<<<<<< HEAD
import RaceJumbotron from './components/Events/RaceJumbotron';
import EventsCarousel from './components/Events/EventsCarousel';
=======
import Profile from './components/Profile';
import Main from './components/Main';
>>>>>>> f57b7c44a769dc37aecaac248856623dba9d8ca8

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
<<<<<<< HEAD
        path="/main"
        exact
        render={() => (
          <>
            <RaceJumbotron />
            <h4>Daily Runs</h4>
            <EventsCarousel />
            <h4>Announcements and Other Events</h4>
          </>
=======
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
>>>>>>> f57b7c44a769dc37aecaac248856623dba9d8ca8
        )}
      />
    </Switch>
  </Router>
);

ReactDOM.render(<Routes />, document.getElementById('app'));
