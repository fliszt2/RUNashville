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



const EventInfoModal = ({event, onModalOpen}) => {
  return (

    <div className="form-modal-wrapper">
    <div className="form-modal-backdrop" onClick={onModalOpen} />
    <div className="form-modal-box">
      <i className="far fa-times-circle fa-2x" onClick={onModalOpen}></i>
      <br></br>
      <div style={{display: "flex", flexDirection: "row"}}>
          {/* left column */}
          <div style={{flexGrow: 1}}>
          <div class="mytextdiv">
            <div class="mytexttitle">
              {event.name}
            </div>
            <div class="divider"></div>
          </div>
            <img className="thumbnail" src={event.thumbnail_photo}></img>
            <div class="mytextdiv">
            <div class="mytexttitle">
              Route
            </div>
            <div class="divider"></div>
          </div>
            <img className="thumbnail" src={event.map_url}></img>
          </div>
          {/* right column */}
          <div style={{flexGrow: 1}}>
          <div class="mytextdiv">
            <div class="mytexttitle">
              Details
            </div>
            <div class="divider"></div>
          </div>
            <div>
              <i style={{'color': 'var(--black)'}} className="fas fa-clock"></i>
               When:

              <span> {moment(event.start_time).format('dddd, MMMM Do YYYY, h:mm a')}</span>
            </div>
            <div>
              <i style={{'color': 'var(--black)'}} className="fas fa-globe-americas"></i>
              Where:

              <span> {event.start_location}</span>
            </div>
            {/* is meetup a different place */}
            <div>
              Length:
              <span> {event.running_distance}</span>
            </div>
            <div>Level:
              <span> {event.difficulty_level}</span>
            </div>
            <div>Host:

              <span>{event.leader}</span>
            </div>
            <div>Description:
              <span> {event.description}</span>
            </div>
            <div class="mytextdiv">
            <div class="mytexttitle">
              Attending
            </div>
            <div class="divider"></div>
          </div>
            <button style={{width: "100px"}}>RSVP </button>
            <div>8
              <span> of your friends are attending</span>
            </div>
            <FriendList/>

          </div>
        </div>



    </div>
  </div>


    // <>
    //   <Modal show={show} onHide={handleClose}>
    //     <div style={{display: "flex", flexDirection: "row"}}>
    //       {/* left column */}
    //       <div style={{flexGrow: 1}}>
    //       <div class="mytextdiv">
    //         <div class="mytexttitle">
    //           {event.name}
    //         </div>
    //         <div class="divider"></div>
    //       </div>
    //         <img className="thumbnail" src={event.thumbnail_photo}></img>
    //         <div class="mytextdiv">
    //         <div class="mytexttitle">
    //           Route
    //         </div>
    //         <div class="divider"></div>
    //       </div>
    //         <img className="thumbnail" src={event.map_url}></img>
    //       </div>
    //       {/* right column */}
    //       <div style={{flexGrow: 1}}>
    //       <div class="mytextdiv">
    //         <div class="mytexttitle">
    //           Details
    //         </div>
    //         <div class="divider"></div>
    //       </div>
    //         <div>
    //           <i style={{'color': 'var(--black)'}} className="fas fa-clock"></i>
    //            When:

    //           <span> {moment(event.start_time).format('dddd, MMMM Do YYYY, h:mm a')}</span>
    //         </div>
    //         <div>
    //           <i style={{'color': 'var(--black)'}} className="fas fa-globe-americas"></i>
    //           Where:

    //           <span> {event.start_location}</span>
    //         </div>
    //         {/* is meetup a different place */}
    //         <div>
    //           Length:
    //           <span> {event.running_distance}</span>
    //         </div>
    //         <div>Level:
    //           <span> {event.difficulty_level}</span>
    //         </div>
    //         <div>Host:

    //           <span>{event.leader}</span>
    //         </div>
    //         <div>Description:
    //           <span> {event.description}</span>
    //         </div>
    //         <div class="mytextdiv">
    //         <div class="mytexttitle">
    //           Attending
    //         </div>
    //         <div class="divider"></div>
    //       </div>
    //         <button style={{width: "100px"}}>RSVP </button>
    //         <div>8
    //           <span> of your friends are attending</span>
    //         </div>
    //         <FriendList/>

    //       </div>
    //     </div>

    //    </Modal>
    // </>
  );
};

export default EventInfoModal;
