import React from 'react';

const Profile = class extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      userProfile: {
        name: 'Test',
        stats: {
          avgMilePace: '',
          recordMilePace: '',
          lifetimeMiles: '',
          lifetimeRaces: '',
          eventsAttended: '',
        },
        pic: '',
        headerImage: '',
        bio:''
      },
    };
  }

  render() {
    const { userProfile } = this.state;
    const { name, stats, pic, headerImage } = userProfile;
    return (
      <div>
        <div className="allHeader">
          <div className="headerBar">
            <div className="headerInfo leftItem">RUNashville</div>
            <div className="headerInfo rightItem">Edit My Page</div>
          </div>
          <div className="headerImage">{headerImage}</div>
          <div className="profileCard">
            <div className="profileImage">{pic}</div>
            <div className="userName">{name}</div>
            <button className="profileButton">Follow {name}</button>
          </div>
        </div>
        <div className="profileBody">
          <div className="thirdsColumn">
            <div className="contentBox">
              <div className="boxTitle">{name}'s Stats</div>
              <div className="statistics"></div>
            </div>
            <div className="contentBox">
              <div className="boxTitle">{name}'s Events</div>
              <div className="eventsFeed"></div>
            </div>
            <div className="contentBox">
              <div className="boxTitle">{name}'s Recent Activities</div>
              <div className="recentActivityFeed"></div>
            </div>
          </div>
          <div className="thirdsColumn">
            <button className="profileButton">+ New Post</button>
            <button className="profileButton">+ Create Daily Run</button>
            <div className="contentBox">
              <div className="boxTitle">{name}'s Feed</div>
              <div className="profileFeed"></div>
            </div>
          </div>
          <div className="thirdsColumn">
            <div className="contentBox">
              <div className="boxTitle">{name}'s Bio</div>
              <div className="userBio"></div>
            </div>
            <div className="contentBox">
              <div className="boxTitle">{name}'s Friends</div>
              <div className="friendsList"></div>
            </div>
            <div className="contentBox">
              <div className="boxTitle">{name}'s Friends Updates</div>
              <div className="friendFeed"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Profile;
