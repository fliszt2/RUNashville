import React from 'react';
import axios from 'axios';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        message: null,
        image: null,
        location: null,
        runDistance: null,
        runPace: null,
        runTime: null,
        runSteps: null,
        runHeartRate: null,
        runCalories: null,
        addRun: false,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmitLinks = this.handleSubmitLinks.bind(this);
  }
  
  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({ [name]: value });
  }

  // handleSubmitLinks(event) {

  //   event.preventDefault();
  //   var body = {
  //     "formName1": this.state.formName1,
  //     "formName2": this.state.formName2,
  //   };
  //   return axios.post('/endpoint', body)
  //     .then(() => {
  //       alert('Record has been Added!');
  //     })
  //     .then(() => {
  //       this.setState({
  //         formName1: '',
  //         formName2: '',
  //       });
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // }

  render() {
    let runPane = <div></div>
    if(this.state.addRun){
      runPane = <div id='run-details-pane'>
        <div>
          <span className='add-run-tag'>Distance:</span>
          <input type='text' className='add-run-data' name='runDistance'></input>
          <span className='add-run-tag'>Avg. Pace:</span>
          <input type='text' className='add-run-data' name='runPace'></input>
          <span className='add-run-tag'>Heart Rate:</span>
          <input type='text' className='add-run-data' name='runHeartRate'></input>
        </div>
        <div>
          <span className='add-run-tag'>Time:</span>
          <input type='text' className='add-run-data' name='runTime'></input>
          <span className='add-run-tag'>Steps:</span>
          <input type='text' className='add-run-data' name='runSteps'></input>
          <span className='add-run-tag'> Calories Burned:</span>
          <input type='text' className='add-run-data' name='runCalories'></input>
        </div>
      </div>
    }
    return (
      <div className="form-modal-wrapper">
        <div className="form-modal-backdrop" onClick={this.props.onModalOpen} />
        <div className="form-modal-box">
          <i className="far fa-times-circle fa-2x" onClick={this.props.onModalOpen}></i>
          <br></br>
          <div id='add-social-post'>
            <div className='add-social-post-options'>
              <input type='checkbox' name='addRun'></input>
              <label for='addRun'>Add Run Details</label>
              <i className="fas fa-globe-americas feed-icon" name='location'></i>
              <span>Add Location</span>
            </div>
            <i className="fas fa-camera"></i>
            {runPane}
            <textarea name='message' placeholder='Tell us how you feel!'></textarea>
            <button>Submit</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;