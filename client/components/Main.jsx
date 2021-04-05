import React from 'react';

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
            {this.state.isAdmin ? (<div className="sidebar">
              <br></br>
              {this.state.adminToggleOn ? <i className="fas fa-toggle-on fa-3x" onClick={this.onAdminToggleClick}></i> : <i className="fas fa-toggle-off fa-3x" onClick={this.onAdminToggleClick}></i>}
              <div className="sidebarText">Edit Page Items</div>
              <i className="fas fa-exclamation-triangle fa-3x"></i>
              <div className="sidebarText">Report Posts</div>
              <i class="fas fa-running fa-3x"></i>
              <div className="sidebarText">Manage Users</div>
              <i class="fas fa-clipboard-list fa-3x"></i>
              <div className="sidebarText">Manage Events</div>
              <i class="fas fa-envelope-open-text fa-3x future"></i>
              <div className="sidebarText future">Email Members</div>
            </div>) : null}

            <div className="not-sidebar">...</div>
          </div>
        </div>
      </div>
    );
  }
};

export default Main;
