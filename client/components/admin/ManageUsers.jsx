/* eslint-disable react/destructuring-assignment */
import React from 'react';
import axios from 'axios';

class ManageUsers extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      allUsers: [],
      reportedUsers: [],
    };
    this.getAllUsers = this.getAllUsers.bind(this);
    this.handleChange = this.handleChange.bind(this);

  }

  componentDidMount() {
    this.getAllUsers();
  }


  getAllUsers() {
    axios.get('api/users')
      .then((res) => {
        this.setState({ allUsers: res.data });
      })
      .catch((err) => console.log('ERROR GETTING Users: ', err));
  }

  handleChange(event) {
    const value = event.target.value;
    let tempArr = this.state.reportedUsers;

    if (tempArr.indexOf(value) === -1) {
      tempArr.push(value);
    } else {
      tempArr.splice(tempArr.indexOf(value), 1);
    }
    this.setState({ reportedUsers: tempArr });
  }

  render() {
    const allUsers = this.state.allUsers;
    console.log('ALL Users', allUsers, 'REPORTED Users', this.state.reportedUsers);

    return (
      <div>
        <div className="manage-heading">MANAGE Users</div>

        <div className="listItems">
          {/* <ul className="no-bullets">
            {allUsers.map((user) => (
            <li key={user.id}>

              <div className="mytextdiv">
                <div className="mytexttitle manage-mytext">
                  {user.name_user + " " + user.last_name}&nbsp;</div>
                <div className="divider"></div>
              </div>
                <input id={user.id} type="checkbox" value={user.id} onChange={this.handleChange} />
                <label htmlFor={user.id}>&nbsp;<span className="span-label">Hide user?</span></label>
              <br></br>
              user: {user.message_user}
              <br></br>
              user Name: {user.name}
              <br></br>
              Created: {user.created_at}
              <br></br>
              Location: {user.location_user}
              <br></br>

              {user.image_url}
              {user.run}
            </li>
            ))}
          </ul> */}
        </div>
      </div>
    );
  }
}

export default ManageUsers;
