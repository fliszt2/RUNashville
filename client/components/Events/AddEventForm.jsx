import React from 'react';
// import Modal from 'react-bootstrap/Modal';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';

class AddEventForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      event_name: '',
      event_type: '',
      link: '',
      start_time: 'MMDDYYYY',
      start_date: new Date(),
      start_location: '',
      map_url: '',
      description: '',
      image_url: '',
      running_distance: 0,
      difficulty_level: 'beginner',

    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
  }

  handleInputChange(event) {
    const { target } = event;
    const { value } = target;
    const { name } = target;

    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    // if any field is empty, alert
    const { event_name, event_type, link, start_time, start_date, start_location, map_url, description, image_url, running_distance, difficulty_level } = this.state;
    // start_date = start_date.toUTCString();
    // console.log('typeof start_date:', typeof start_date);
    const stateValues = [event_name, event_type, link, start_time, start_date, start_location, map_url, description, image_url, running_distance, difficulty_level];

    for (let value of stateValues) {
      if (value === null) {
        value = '';
      }
      let valueAsString = value.toString();
      if (valueAsString.length === 0 || valueAsString === 'Select' || valueAsString === 'MMDDYYYY') {
        return alert('Please fill in all fields.');
      }
      // also check that running distance is a number??
    }

    const data = {
      event_name: event_name,
      event_type: event_type,
      link: link,
      start_time: start_time,
      start_date: start_date,
      start_location: start_location,
      map_url: map_url,
      description: description,
      image_url: image_url,
      running_distance: running_distance,
      difficulty_level: difficulty_level,
    };

    axios.post('/events', data)
      .then(() => {
        console.log('submitted');
        this.setState({
          event_name: '',
          event_type: '',
          link: '',
          start_time: 'MMDDYYYY',
          start_date: new Date(),
          start_location: '',
          map_url: '',
          description: '',
          image_url: '',
          running_distance: null,
          difficulty_level: 'beginner',
        });
        // also close the modal
      })
      .catch((err) => {
        console.log(err);
      });
  }

  createMap(e) {
    e.preventDefault();
    const url = 'https://onthegomap.com/#/create';
    window.open(url, '_blank');
  }
  handleDateChange(date) {
    this.setState({
      start_date: date
    })
  }

  render() {
    const { event_name, event_type, link, start_time, start_location, map_url, image_url, running_distance, difficulty_level } = this.state;
    return (
      <div className="form-modal-wrapper">
        <div className="form-modal-backdrop" onClick={this.props.onModalOpen} />
        <div className="form-modal-box" style={{ fontSize: '1.6rem' }}>
          <i className="far fa-times-circle fa-2x" onClick={this.props.onModalOpen}></i>
          <br></br>
          <form>
            <label>Event Name:
              <input name="event_name" type="text" placeholder="Text goes here..." value={event_name} onChange={this.handleInputChange} />
            </label>
            <br />
            <label>
              Type of Event:
              <select name="event_type" value={event_type} onChange={this.handleInputChange}>
                <option value="Select">Select</option>
                <option value="Race">Race</option>
                <option value="Daily Group Run">Daily Group Run</option>
                <option value="Announcement">Announcement</option>
             </select>
            </label>
            <br />
            <label>
              Registration Page:
              <input name="link" type="text" placeholder="http://www.example-url.com" value={link} onChange={this.handleInputChange} />
            </label>
            <br />
            <label>
              Event Time:
              {/* <input name="start_time" type="text" value={start_time} onChange={this.handleInputChange} /> */}
              <input type="time"  name="start_time" min="00:00" max="23:55" onChange={this.handleInputChange}></input>
            </label>
            <br />
            <label>
              Date:
              {/* <input name="start_time" type="text" placeholer="MMDDYYY" value={start_time} onChange={this.handleInputChange} /> */}
              <DatePicker
              selected={ this.state.start_date }
              onChange={ this.handleDateChange }
              name="start_date"
              dateFormat="MM/dd/yyyy"
          />
            </label>
            <br />
            <label>
              Event Address:
              <input name="start_location" type="text" placeholder="Address, Street, City, Zip" value={start_location} onChange={this.handleInputChange} />
            </label>
            <br />
            <label>
              Add Map:&nbsp;
              <button onClick={this.createMap.bind(this)}>Create a map</button>
              <input name="map_url" type="text" placeholder="paste map embed here" value={map_url} onChange={this.handleInputChange} />
            </label>
            <br />
            <label>
              Event Description:
              <textarea name="description" type="textarea" placeholder="Text goes here..." rows={5}
              cols={5} value={this.state.description} onChange={this.handleInputChange} />
            </label>
            <br />
            <label>
              Banner Image:
              <input name="image_url" type="text" placeholder="Add image url here" value={image_url} onChange={this.handleInputChange} />
            </label>
            <br />
            <label>
              Run Length:
              <input name="running_distance" type="text" value={running_distance} onChange={this.handleInputChange} />
            </label>
            <label>
              Run Difficulty:
              <select name="difficulty_level" value={difficulty_level} onChange={this.handleInputChange}>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate Group Run</option>
                <option value="Expert">Expert</option>
             </select>
            </label>
            <br />
            <button style={{width: "100px"}}onClick={this.handleSubmit}>SUBMIT</button>
          </form>
        </div>
      </div>
    );
  }
}

export default AddEventForm;
