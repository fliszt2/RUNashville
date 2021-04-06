import React from 'react';
import Profile from './Profile';

const Main = class extends React.Component {
  constructor() {
    super();
    this.state = {
      userType: 'admin',
      adminToggleOn: false,
      isAdmin: true,
      isModalOpen: false,
    };
    this.onAdminToggleClick = this.onAdminToggleClick.bind(this);
    this.onModalOpen = this.onModalOpen.bind(this);
  }

  onAdminToggleClick() {
    this.setState({ adminToggleOn: !this.state.adminToggleOn });
  }

  onModalOpen() {
    this.setState({ isModalOpen: !this.state.isModalOpen });
  }

  render() {
    return (
      <div>
        <div className="with-sidebar">
          <div>
            {/* <!-- intermediary wrapper --> */}
            {this.state.isAdmin ? (
              <div className="sidebar">
                <br />
                {this.state.adminToggleOn ? <i className="fas fa-toggle-on fa-3x" onClick={this.onAdminToggleClick} /> : <i className="fas fa-toggle-off fa-3x" onClick={this.onAdminToggleClick} />}
                <div className="sidebarText">Edit Page Items</div>
                <i className="fas fa-exclamation-triangle fa-3x" />
                <div className="sidebarText">Report Posts</div>
                <i className="fas fa-running fa-3x" />
                <div className="sidebarText">Manage Users</div>
                <i className="fas fa-clipboard-list fa-3x" />
                <div className="sidebarText">Manage Events</div>
                <i className="fas fa-envelope-open-text fa-3x future" />
                <div className="sidebarText future">Email Members</div>
              </div>
            ) : null}

            <div className="not-sidebar">
              <Profile />
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Main;
