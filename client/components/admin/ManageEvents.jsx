/* eslint-disable react/destructuring-assignment */
import React from 'react';
import axios from 'axios';

class ManageEvents extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      allEvents: [],
      reportedEvents: [],
    };
    this.getAllEvents = this.getAllEvents.bind(this);
    this.handleChange = this.handleChange.bind(this);

  }

  componentDidMount() {
    this.getAllEvents();
  }


  getAllEvents() {
    axios.get('http://54.173.19.52:3000/api/events/reported')
      .then((res) => {
        this.setState({ allEvents: res.data });
      })
      .catch((err) => console.log('ERROR GETTING Events: ', err));
  }

  handleChange(event) {
    const value = event.target.value;
    let tempArr = this.state.reportedEvents;

    if (tempArr.indexOf(value) === -1) {
      tempArr.push(value);
    } else {
      tempArr.splice(tempArr.indexOf(value), 1);
    }
    this.setState({ reportedEvents: tempArr });
  }

  render() {
    const allEvents = this.state.allEvents;
    console.log('ALL Events', allEvents, 'REPORTED Events', this.state.reportedEvents);

    return (
      <div>
        <div className="manage-heading">MANAGE Events</div>

        <div className="listItems">
          {/* <ul className="no-bullets">
            {allEvents.map((event) => (
            <li key={event.id}>

              <div className="mytextdiv">
                <div className="mytexttitle manage-mytext">
                  {event.name_user + " " + event.last_name}&nbsp;</div>
                <div className="divider"></div>
              </div>
                <input id={event.id} type="checkbox" value={event.id} onChange={this.handleChange} />
                <label htmlFor={event.id}>&nbsp;<span className="span-label">Hide event?</span></label>
              <br></br>
              event: {event.message_event}
              <br></br>
              event Name: {event.name}
              <br></br>
              Created: {event.created_at}
              <br></br>
              Location: {event.location_event}
              <br></br>

              {event.image_url}
              {event.run}
            </li>
            ))}
          </ul> */}
        </div>
      </div>
    );
  }
}

export default ManageEvents;
