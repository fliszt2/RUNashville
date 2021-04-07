import React from 'react';
import RaceJumbotron from './Events/RaceJumbotron';
import EventsCarousel from './Events/EventsCarousel';
import data from '../resources/dummydata';
import AddEventForm from './Events/AddEventForm';

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
      addEvent: false,
    };
  }
//click handlingfunctions for AddEventForm. These will get moved!
  handleAddEvent() {
    this.setState({addEvent: true});
  }

  handleSubmitEvent() {
    this.setState({addEvent: false});
  }

  render() {
    const { data } = this.state;
    return (
      <>
        <RaceJumbotron races={data.events.filter((event) => event.event_type === 'race')} />
        <div onClick={this.handleAddEvent.bind(this)}>
          TEMP ADD EVENT BUTTON
        </div>
        <AddEventForm
          show={this.state.addEvent}
          handleSubmitEvent={this.handleSubmitEvent.bind(this)}/>
        <h4 className="events-header">Daily Runs</h4>
        <EventsCarousel events={data.events.filter((event) => event.event_type === 'daily_run')} />
        <h4 className="events-header">Announcements and Other Events</h4>
        <EventsCarousel events={data.events.filter((event) => event.event_type === 'other')} />
      </>
    );
  }
}

{/* <button style={{ display: "inline" }} onClick={this.onModalOpen}>OPEN MODAL</button>
{this.state.isModalOpen ? (<Modal onModalOpen={this.onModalOpen} />) : null} */}

export default Homepage;
