import React from 'react';
import SocialFeed from './SocialFeed.jsx';
import CreatePost from './CreatePost.jsx';
import HeaderBar from '../HeaderBar';
import friendCard from './friendCard';

const Profile = class extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      userPosts: [
        {
          name: 'Mufasa',
          date: 'April 20th, 2020',
          location: 'The Mighty Jungle',
          post: 'My son is a little turd, he will never be king because I will live forever LOL',
          propic: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3e78b0ee-7d21-4e35-badd-d148b5a2a5de/d4bv1o8-3fb388f6-4dcf-44b3-9fd9-be7ae75bba69.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvM2U3OGIwZWUtN2QyMS00ZTM1LWJhZGQtZDE0OGI1YTJhNWRlXC9kNGJ2MW84LTNmYjM4OGY2LTRkY2YtNDRiMy05ZmQ5LWJlN2FlNzViYmE2OS5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.vz3uHuj93dfqpwiETOYw8OUH5Bm3TtUIdflolxx8WfA',
          image: 'https://i2-prod.mirror.co.uk/incoming/article13631520.ece/ALTERNATES/s615/0_The-Lion-King.jpg',
          run: {
            distance: 5,
            time: '37.24',
            pace: '7:43',
            steps: 10376,
            heartRate: 120,
            calories: 548,
          },
        },
        {
          name: 'Mufasa',
          date: 'April 20th, 2020',
          location: 'The Mighty Jungle',
          post: 'My son is a little turd, he will never be king because I will live forever LOL',
          propic: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3e78b0ee-7d21-4e35-badd-d148b5a2a5de/d4bv1o8-3fb388f6-4dcf-44b3-9fd9-be7ae75bba69.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvM2U3OGIwZWUtN2QyMS00ZTM1LWJhZGQtZDE0OGI1YTJhNWRlXC9kNGJ2MW84LTNmYjM4OGY2LTRkY2YtNDRiMy05ZmQ5LWJlN2FlNzViYmE2OS5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.vz3uHuj93dfqpwiETOYw8OUH5Bm3TtUIdflolxx8WfA',
        },
      ],
      userProfile: {
        name: 'Test',
        stats: {
          avgMilePace: '10:03',
          recordMilePace: '9:34',
          monthMiles: 25.2,
          lifetimeMiles: 40008.3,
          lifetimeRaces: 22,
          eventsAttended: 18,
        },
        pic: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3e78b0ee-7d21-4e35-badd-d148b5a2a5de/d4bv1o8-3fb388f6-4dcf-44b3-9fd9-be7ae75bba69.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvM2U3OGIwZWUtN2QyMS00ZTM1LWJhZGQtZDE0OGI1YTJhNWRlXC9kNGJ2MW84LTNmYjM4OGY2LTRkY2YtNDRiMy05ZmQ5LWJlN2FlNzViYmE2OS5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.vz3uHuj93dfqpwiETOYw8OUH5Bm3TtUIdflolxx8WfA',
        headerImage: 'https://i.ytimg.com/vi/3CR_Z3hs8_Y/maxresdefault.jpg',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        friendsList: [
          {
            id: '001',
            name: 'Timothy Blumpkin',
            photo: '',
          },
          {
            id: '002',
            name: 'Delvin Dunklesnap',
            photo: '',
          },
          {
            id: '003',
            name: 'Chadrick Chaplips',
            photo: '',
          },
        ],
      },
    };
  }

  render() {
    const { userProfile } = this.state;
    const {
      name, stats, pic, headerImage, bio, friendsList,
    } = userProfile;
    return (
      <div>
        <HeaderBar />
        <div className="allHeader">
          <div className="social-profile-banner">
            <img className="social-profile-banner-img" src={headerImage} />
            <img className="social-profile-banner-profile-pic profile-pic-round" src={pic} />
          </div>
          <div className="profileCard">
            <div className="profileImage" />
            <div className="userName">{name}</div>
            <button className="profileButton">
              Follow
              {name}
            </button>
          </div>
        </div>
        <div id="social-feeds">
          <div className="side-column">
            <div className="contentBox">
              <div className="boxTitle">
                {name}
                's Stats
              </div>
              <div className="statistics">
                <div className="statLine">
                  <div className="statDescriptor">AVERAGE MILE PACE: </div>
                  <div className="stat">{stats.avgMilePace}</div>
                </div>
                <div className="statLine">
                  <div className="statDescriptor">RECORD MILE PACE: </div>
                  <div className="stat">{stats.recordMilePace}</div>
                </div>
                <div className="statLine">
                  <div className="statDescriptor">THIS MONTH&apos;S MILES: </div>
                  <div className="stat">{stats.monthMiles.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</div>
                </div>
                <div className="statLine">
                  <div className="statDescriptor">LIFETIME MILES: </div>
                  <div className="stat">{stats.lifetimeMiles.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</div>
                </div>
                <div className="statLine">
                  <div className="statDescriptor">LIFETIME RACES: </div>
                  <div className="stat">{stats.lifetimeRaces.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</div>
                </div>
                <div className="statLine">
                  <div className="statDescriptor">EVENTS ATTENDED: </div>
                  <div className="stat">{stats.eventsAttended.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</div>
                </div>
              </div>
            </div>
            <div className="contentBox">
              <div className="boxTitle">
                {name}
                's Events
              </div>
              <div className="eventsFeed" />
            </div>
            <div className="contentBox">
              <div className="boxTitle">
                {name}
                &apos;s Recent Activities
              </div>
              <div className="recentActivityFeed" />
            </div>
          </div>
          <div id="center-column">
            <div>
              {name}
              's Feed
            </div>
            <div id="social-feed-buttons">
              <button className="profileButton">+ New Post</button>
              <button className="profileButton">+ Create Daily Run</button>
            </div>
            <div className="contentBox">
              <SocialFeed posts={this.state.userPosts} />
            </div>
          </div>
          <div className="side-column">
            <div className="contentBox">
              <div className="boxTitle">
                {name}
                &apos;s Bio
              </div>
              <div className="userBio">{bio}</div>
            </div>
            <div className="contentBox">
              <div className="boxTitle">
                {name}
                &apos;s Friends
              </div>
              <div className="friendsList">
                {friendsList.map((friend) => friendCard(friend))}
              </div>
            </div>
            <div className="contentBox">
              <div className="boxTitle">
                {name}
                &apos;s Friends Updates
              </div>
              <div className="friendFeed" />
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Profile;
