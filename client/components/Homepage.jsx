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
      isModalOpen: false,
    };

    this.onModalOpen = this.onModalOpen.bind(this);
  }
//click handlingfunctions for AddEventForm. These will get moved!

  handleSubmitEvent() {
    this.setState({addEvent: false});
  }


  onModalOpen() {
    this.setState({ isModalOpen: !this.state.isModalOpen });
  }


  render() {
    const { data } = this.state;
    return (
      <>
        <RaceJumbotron races={data.events.filter((event) => event.event_type === 'race')} />

        <div>
          <button style={{ display: "inline", width: "300px" }} onClick={this.onModalOpen}>NEW EVENT FORM</button>

        </div>
        <div className="mytextdiv">
          <div className="mytexttitle">
            Daily Runs
          </div>
          <div className="divider"></div>
        </div>
        {/* <h4 classNameName="events-header">Daily Runs</h4> */}
        <EventsCarousel events={data.events.filter((event) => event.event_type === 'daily_run')} />
        <div className="mytextdiv">
          <div className="mytexttitle">
          Announcements and Other Events
          </div>
          <div className="divider"></div>
        </div>
        {/* <h4 className="events-header">Announcements and Other Events</h4> */}
        <EventsCarousel events={data.events.filter((event) => event.event_type === 'other')} />
        {this.state.isModalOpen ? (<AddEventForm onModalOpen={this.onModalOpen} />) : null}
      </>
    );
  }
}


export default Homepage;
