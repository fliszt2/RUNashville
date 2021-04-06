import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
<<<<<<< HEAD
import RaceJumbotron from './components/Events/RaceJumbotron';
import EventsCarousel from './components/Events/EventsCarousel';
import Profile from './components/Profile';
import Main from './components/Main';
=======
import Profile from './components/Profile';
import Main from './components/Main';
import Homepage from './components/Homepage';
>>>>>>> 5ccc38d29d770aad822d0457194859ae530fb562

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
<<<<<<< HEAD
          <>
          <RaceJumbotron />
          <EventsCarousel/>
          </>
=======
          <Homepage />
>>>>>>> 5ccc38d29d770aad822d0457194859ae530fb562
        )}
      />
    </Switch>
  </Router>
);

ReactDOM.render(<Routes />, document.getElementById('app'));
