import React from 'react';
import Modal from 'react-bootstrap/Modal';
import ModalBody from 'react-bootstrap/ModalBody';
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";
import Button from 'react-bootstrap/Button';
import FriendList from './FriendList.jsx';
import moment from 'moment';

// class EventInfoModal extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       formName1: '',
//       formName2: '',
//     };

//     this.handleInputChange = this.handleInputChange.bind(this);
//     this.handleSubmitLinks = this.handleSubmitLinks.bind(this);
//   }

//   handleInputChange(event) {
//     const target = event.target;
//     const value = target.value;
//     const name = target.name;

//     this.setState({ [name]: value });
//   }

//   handleSubmitLinks(event) {

//     event.preventDefault();
//     // var body = {
//     //   "formName1": this.state.formName1,
//     //   "formName2": this.state.formName2
//     // };
//     // return axios.post('/endpoint', body)
//     //   .then(() => {
//     //     alert('Record has been Added!');
//     //   })
//     //   .then(() => {
//     //     this.setState({
//     //       formName1: '',
//     //       formName2: ''
//     //     })
//     //   })
//     //   .catch(err => {
//     //     console.log(err);
//     //   })
//   }

//   render() {
//     return (

//       <div className="form-modal-wrapper">
//         <div className="form-modal-backdrop" onClick={this.props.onModalOpen} />
//         <div className="form-modal-box">
//           <i className="far fa-times-circle fa-2x" onClick={this.props.onModalOpen}></i>
//           <br></br>
//           <form>
//             <label>Form Name 1:
//                 <input name="formName1" type="text" value={this.state.formName1} onChange={this.handleInputChange} />
//             </label>
//             <br />
//             <label>
//               Form Name 2:
//                 <input name="formName2" type="text" value={this.state.formName2} onChange={this.handleInputChange} />
//             </label>
//             {/* <button onClick={this.handleSubmitLinks}>Add URL</button> */}
//           </form>
//         </div>
//       </div>

//     );
//   }
// }

// export default EventInfoModal;



const EventInfoModal = ({event, handleClose, show}) => {



  // {
  //   name: 'Hilltop Half-Marathon',
  //   description: 'Test your endurance in the hills of Nashville',
  //   event_type: '',
  //   start_time: '',
  //   end_time: '',
  //   start_location: '',
  //   end_location: '',
  //   image_url: '',
  //   thumbnail_photo: '',
  //   difficulty_level: 'intermediate',
  //   running_distance: 13.5,
  //   leader: '',
  //   link: '',
  //   attendees: '',
  //   promoted: true,
  //   created_at: '',
  //   updated_at: '',
  //   numAttending: 532,
  //   map_url: ''
  // },

  return (
    <>
      {/* <h1
      onClick={handleShow}
      >
        <div>Hilltop</div>
      </h1> */}

      <Modal show={show} onHide={handleClose}>
        <div style={{display: "flex", flexDirection: "row"}}>
          {/* left column */}
          <div style={{flexGrow: 1}}>
            <h3>Name</h3>
            <img className="thumbnail" src={event.thumbnail_photo}></img>
            <h3>Route</h3>
            <img className="thumbnail" src={event.map_url}></img>
          </div>
          {/* right column */}
          <div style={{flexGrow: 1}}>
            <h3>Details</h3>
            <div>
              <i style={{'color': 'var(--black)'}} className="fas fa-clock"></i>
              When:

              <span>{moment(event.start_time).format('dddd, MMMM Do YYYY, h:mm a')}</span>
            </div>
            <div>
              <i style={{'color': 'var(--black)'}} className="fas fa-globe-americas"></i>
             Where:

              <span>{event.start_location}</span>
            </div>
            {/* is meetup a different place */}
            <div>
              Length:
              <span>{event.running_distance}</span>
            </div>
            <div>Level:
              <span>{event.difficulty_level}</span>
            </div>
            <div>Host:

              <span>{event.leader}</span>
            </div>
            <div>Description:
              <span>{event.description}</span>
            </div>
            <h3>Attending</h3>
            <button style={{width: "100px"}}>RSVP </button>
            <div>8
              <span> of your friends are attending</span>
            </div>
            <FriendList/>

          </div>
        </div>

       </Modal>
    </>
  );
};

export default EventInfoModal;
