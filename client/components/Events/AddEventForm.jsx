import React from 'react';
import Modal from 'react-bootstrap/Modal';

class AddEventForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      event_name: 'Text goes here...',
      event_type: 'Select',
      link: 'http://www.example-url.com',
      start_time: 'MMDDYYYY',
      start_location:'',
      map_url: '',
      description: '',
      image_url: '',
      running_distance: null,
      difficulty_level: '',

    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({ [name]: value });
  }

  createMap(){
    const url = 'https://onthegomap.com/#/create';
    window.open(url, '_blank');
}

  handleSubmit(event) {

    event.preventDefault();
    // var body = {
    //   "formName1": this.state.formName1,
    //   "formName2": this.state.formName2
    // };
    // return axios.post('/endpoint', body)
    //   .then(() => {
    //     alert('Record has been Added!');
    //   })
    //   .then(() => {
    //     this.setState({
    //       formName1: '',
    //       formName2: ''
    //     })
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   })
  }

  render() {
    return (


      <div  className="form-modal-wrapper">
        <div className="form-modal-backdrop" onClick={this.props.onModalOpen} />
        <div className="form-modal-box" style={{fontSize: "1.6rem"}}>
          <i className="far fa-times-circle fa-2x" onClick={this.props.onModalOpen}></i>
          <br></br>
          <form>
            <label>Event Name:
                <input name="event_name" type="text" value={this.state.event_name} onChange={this.handleInputChange} />
            </label>
            <br />
            <label>
              Type of Event:
              <select name="event_type" value={this.state.event_type} onChange={this.handleInputChange}>
                <option value="Race">Race</option>
                <option value="Daily Group Run">Daily Group Run</option>
                <option value="Announcement">Announcement</option>
             </select>
            </label>
            <br />
            <label>
              Registration Page:
              <input name="link" type="text" value={this.state.link} onChange={this.handleInputChange} />
            </label>
            <br />
            <label>
              Event Time:
              <input name="start_time" type="text" value={this.state.start_time} onChange={this.handleInputChange} />
            </label>
            <br />
            <label>
              Event Address:
              <input name="start_location" type="text" placeholder="Address, Street, City, Zip" value={this.state.start_location} onChange={this.handleInputChange} />
            </label>
            <br />
            <label>
              Add Map:&nbsp;
              <button onClick={this.createMap.bind(this)}>Create a map</button>
              <input name="map_url" type="text" placeholder="paste map url here" value={this.state.map_url} onChange={this.handleInputChange} />
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
              <input name="image_url" type="text" placeholder="Add image url here" value={this.state.image_url} onChange={this.handleInputChange} />
            </label>
            <br />
            <label>
              Run Length:
              <input name="running_distance" type="text" value={this.state.running_distance} onChange={this.handleInputChange} />
            </label>
            <label>
              Run Difficulty:
              <select name="difficulty_level" value={this.state.difficulty_level} onChange={this.handleInputChange}>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate Group Run</option>
                <option value="Expert">Expert</option>
             </select>
            </label>
            <br/>
            <button style={{width: "100px"}}onClick={this.handleSubmit}>SUBMIT</button>
          </form>
        </div>
      </div>


    );
  }
}

export default AddEventForm;
