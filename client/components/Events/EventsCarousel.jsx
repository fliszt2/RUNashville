import React from 'react';
import EventInfoCard from './EventInfoCard';
// import data from '../../resources/dummydata';

class EventsCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: this.props.events.slice(0, 3),
      hiddenEventsRight: this.props.events.slice(3),
      showNextButton: this.props.events.length > 3 ? true : false,
    };
  }

  render() {
    const { events } = this.state;
    return (
      <div className="events-carousel">
        <div className="events-carousel-track">
          {events.map((event) => <EventInfoCard event={event} key={event.id} />)}
          <button className={this.state.showNextButton ? "events-carousel-next-button" : "hide-next-button"}>
            <i className="fas fa-chevron-right">
          </i></button>
        </div>
      </div>
    );
  }
}

export default EventsCarousel;
