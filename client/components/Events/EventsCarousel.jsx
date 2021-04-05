import React from 'react';
import EventInfoCard from './EventInfoCard';
import data from '../../resources/dummydata';

class EventsCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dailyRuns: data.dailyRuns,
    };
  }

  render() {
    const { dailyRuns } = this.state;
    return (
      <div className="events-carousel">
        <div className="events-carousel-track">
          {dailyRuns.map((dailyRun) => <EventInfoCard dailyRun={dailyRun} key={dailyRun.id} />)}
        </div>
      </div>
    );
  }
}

export default EventsCarousel;
