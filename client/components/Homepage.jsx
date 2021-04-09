import React from 'react';
import RaceJumbotron from './Events/RaceJumbotron';
import EventsCarousel from './Events/EventsCarousel';
import AddEventForm from './Events/AddEventForm';
import SocialFeed from './social/SocialFeed';
import data from '../resources/dummydata';
import feedData from '../resources/dummyFeedData';
import SectionTitle from './SectionTitle';

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      eventData: data,
      feedData: feedData.posts,
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
    const { eventData, feedData } = this.state;
    return (
      <>
        <RaceJumbotron races={eventData.events.filter((event) => event.event_type === 'race')} />
        <div className="homepage-body">
          <div className="events">
            <SectionTitle text="Daily" />
            <EventsCarousel events={eventData.events.filter((event) => event.event_type === 'daily_run')} />
            <SectionTitle text="Announcements and Other Events" />
            <EventsCarousel events={eventData.events.filter((event) => event.event_type === 'other')} />
            {this.state.isModalOpen ? (<AddEventForm onModalOpen={this.onModalOpen} />) : null}
          </div>
          <div className="homepage-social-feed">
            <SectionTitle text="Latest Posts" />
            <SocialFeed posts={feedData} />
          </div>
        </div>
      </>
    );
  }
}

export default Homepage;
