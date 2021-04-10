import React from 'react';
import RaceJumbotron from './Events/RaceJumbotron';
import EventsCarousel from './Events/EventsCarousel';
import AddEventForm from './Events/AddEventForm';
import SocialFeed from './social/SocialFeed';
import data from '../resources/dummydata';
import feedData from '../resources/dummyFeedData';
import SectionTitle from './SectionTitle';
import axios from 'axios';

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // eventData: data.events,
      currentUserID: 2,
      userPosts: feedData.posts,
      eventData: [],
      // feedData: feedData.posts,
      isModalOpen: false,
      apiData: '',

    };
    this.fetchEvents = this.fetchEvents.bind(this);
    this.onModalOpen = this.onModalOpen.bind(this);
    this.updateDisplayedProfile = this.updateDisplayedProfile.bind(this);
  }
//click handlingfunctions for AddEventForm. These will get moved!

  handleSubmitEvent() {
    this.setState({addEvent: false});
  }

  componentDidMount() {
    axios.get('http://54.173.19.52:3000/api/events')
    .then((apiData) => {
      console.log('apiData.data:', apiData.data);
      this.setState({ eventData: apiData.data });
      const { currentUserID } = this.state;
      this.updateDisplayedProfile(currentUserID);
    })
    .catch((err) => console.log(err));
    // this.fetchEvents();
  }

  onModalOpen() {
    this.setState({ isModalOpen: !this.state.isModalOpen });
  }

  fetchEvents() {
    axios.get('http://54.173.19.52:3000/api/events')
      .then((apiData) => {
        this.setState({ eventData: apiData.data });
        console.log('apiData.data:', apiData.data);
      })
      .catch((err) => console.log(err));
  }

  updateDisplayedProfile(userID) {
    this.setState({ currentUserID: userID }, () => {
      // axios.get(`http://54.173.19.52:3000/api/post`)
      axios.get(`http://54.173.19.52:3000/api/post?id=${this.state.currentUserID}`)
        .then((newPosts) => {
          console.log('posts: ', newPosts.data);
          this.setState({
            userPosts: newPosts.data || feedData.posts,
          });
        })
    });
  }

  render() {
    const { eventData, userPosts } = this.state;
    // console.log('eventData:', eventData);
    return (
      <>
        <RaceJumbotron races={eventData.filter((event) => event.name_event_type === 'race')} />
        <div>
          <button style={{ display: "inline", width: "300px" }} onClick={this.onModalOpen}>NEW EVENT FORM</button>
        </div>
        <div className="homepage-body">
          <div className="events">
            <SectionTitle text="Daily" />
            <EventsCarousel events={eventData.filter((event) => event.name_event_type === 'daily_run')} />
            <SectionTitle text="Announcements and Other Events" />
            <EventsCarousel events={eventData.filter((event) => event.name_event_type === 'other')} />
            {this.state.isModalOpen ? (<AddEventForm fetchEvents={this.fetchEvents} onModalOpen={this.onModalOpen} />) : null}
          </div>
          <div className="homepage-social-feed">
            <SectionTitle text="Latest Posts" />
            <SocialFeed posts={userPosts} />
          </div>
        </div>
      </>
    );
  }
}

export default Homepage;
