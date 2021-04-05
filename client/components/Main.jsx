import React from 'react';
import RaceJumbotron from './Events/RaceJumbotron';
import EventsCarousel from './Events/EventsCarousel';
import data from '../resources/dummydata';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
    };
  }

  render() {
    const { data } = this.state;
    return (
      <>
        <RaceJumbotron races={data.events.filter((event) => event.event_type === 'race')} />
        <h4>Daily Runs</h4>
        <EventsCarousel events={data.events.filter((event) => event.event_type === 'daily_run')} />
        <h4>Announcements and Other Events</h4>
        <EventsCarousel events={data.events.filter((event) => event.event_type === 'other')} />
      </>
    );
  }
}

export default Main;
