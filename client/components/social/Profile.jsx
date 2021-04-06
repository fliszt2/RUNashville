import React from 'react';
import HeaderBar from '../HeaderBar';
import friendCard from './friendCard';

const Profile = class extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
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
        pic: '',
        headerImage: '',
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
        <div className="allHeader">
          <HeaderBar />
          <div className="profileCard">
            <div className="profileImage">{pic}</div>
            <div className="userName">{name}</div>
            <button className="profileButton" type="button">
              Follow {name}
            </button>
          </div>
        </div>
        <div className="profileBody">
          <div className="thirdsColumn">
            <div className="contentBox">
              <div className="boxTitle">
                {name}
                &apos;s Stats
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
                &apos;s Events
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
          <div className="thirdsColumn">

            <div className="contentBox">
              <div className="boxTitle">
                {name}
                &apos;s Feed
              </div>
              <button className="profileButton leftItem" type="button">+ New Post</button>
              <button className="profileButton rightItem" type="button">+ Create Daily Run</button>
              <div className="profileFeed" />
            </div>
          </div>
          <div className="thirdsColumn">
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
