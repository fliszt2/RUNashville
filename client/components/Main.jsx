import React from 'react';
import Profile from './social/Profile';
import Modal from './Modal';
import HeaderBar from './HeaderBar';

const Main = class extends React.Component {
  constructor() {
    super();
    this.state = {
      userType: 'admin',
      adminToggleOn: true,
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
        <HeaderBar />
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
            <div>
              <button style={{ display: "inline" }} onClick={this.onModalOpen}>OPEN MODAL</button>
              {this.state.isModalOpen ? (<Modal onModalOpen={this.onModalOpen} />) : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Main;
