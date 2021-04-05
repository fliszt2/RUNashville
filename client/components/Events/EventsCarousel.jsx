import React from 'react';
import EventInfoCard from './EventInfoCard';
// import data from '../../resources/dummydata';

class EventsCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: this.props.events,
    };
  }

  render() {
    const { events } = this.state;
    return (
      <div className="events-carousel">
        <div className="events-carousel-track">
          {events.map((event) => <EventInfoCard event={event} key={event.id} />)}
        </div>
      </div>
    );
  }
}

export default EventsCarousel;
