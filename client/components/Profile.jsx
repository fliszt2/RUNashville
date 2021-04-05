import React from 'react';

const Profile = class extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      userProfile: 'Name',
    };
  }

  render() {
    const { userProfile } = this.state;
    return (
      <div>
        <div className="allHeader">
          <div className="headerBar">
            <div className="headerInfo leftItem">RUNashville</div>
            <div className="headerInfo rightItem">Edit My Page</div>
          </div>
          <div className="headerImage"></div>
          <div className="profileCard">
            <div className="profileImage"></div>
            <div className="userName">{userProfile}</div>
            <button className="profileButton">Follow {userProfile}</button>
          </div>
        </div>
        <div className="profileBody">
          <div className="thirdsColumn">
            <div className="contentBox">
              <div className="boxTitle">{userProfile}'s Stats</div>
              <div className="statistics"></div>
            </div>
            <div className="contentBox">
              <div className="boxTitle">{userProfile}'s Events</div>
              <div className="eventsFeed"></div>
            </div>
            <div className="contentBox">
              <div className="boxTitle">{userProfile}'s Recent Activities</div>
              <div className="recentActivityFeed"></div>
            </div>
          </div>
          <div className="thirdsColumn">
            <button className="profileButton">+ New Post</button>
            <button className="profileButton">+ Create Daily Run</button>
            <div className="contentBox">
              <div className="boxTitle">{userProfile}'s Feed</div>
              <div className="profileFeed"></div>
            </div>
          </div>
          <div className="thirdsColumn">
            <div className="contentBox">
              <div className="boxTitle">{userProfile}'s Bio</div>
              <div className="userBio"></div>
            </div>
            <div className="contentBox">
              <div className="boxTitle">{userProfile}'s Friends</div>
              <div className="friendsList"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Profile;
