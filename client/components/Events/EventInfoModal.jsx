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

  var difficultyLevel;
  var difficultyStyle;
  if (event.difficulty_level === 'beginner') {
    difficultyLevel = 'Beginner';
    difficultyStyle = 'difficulty-beginner-big';
  } else if (event.difficulty_level === 'intermediate') {
    difficultyLevel = 'Intermediate';
    difficultyStyle = 'difficulty-intermediate-big';
  } else {
    difficultyLevel = 'Advanced';
    difficultyStyle = 'difficulty-advanced-big';
  }

  return (

    <div className="form-modal-wrapper">
    <div className="form-modal-backdrop" onClick={onModalOpen} />
    <div className="form-modal-box" style={{width: "1200px"}}>
    <i className="far fa-times-circle fa-2x" onClick={onModalOpen}></i>
      <div style={{display: "flex", flexDirection: "row", marginTop: "0px"}}>
          {/* left column */}
          <div style={{flexBasis: "50%", marginRight: "10px"}}>
          <div className="mytextdiv">
            <div className="mytexttitle">
              {event.name}
            </div>
            <div className="divider"></div>
          </div>
            {/* <img className="thumbnail" src={event.thumbnail_photo}></img>
            <div className="mytextdiv">
            <div className="mytexttitle">
              Route
            </div>
            <div className="divider"></div>
          </div> */}
            <img className="thumbnail" src={event.map_url}></img>&nbsp;
          </div>
          {/* right column */}
          <div style={{flexBasis: "50%", marginLeft: "10px", fontSize: "1.6rem", lineHeight: "3rem"}}>
          <div className="mytextdiv">
            <div className="mytexttitle">
              Details
            </div>
            <div className="divider"></div>
          </div>
            <div>
              <i style={{'color': 'var(--black)'}} className="fas fa-clock"></i>&nbsp;
               When:&nbsp;

              <span> {moment(event.start_time).format('dddd, MMMM Do YYYY, h:mm a')}</span>
            </div>
            <div>
              <i style={{'color': 'var(--black)'}} className="fas fa-globe-americas"></i>&nbsp;
              Where:&nbsp;

              <span> {event.start_location}</span>
            </div>
            {/* is meetup a different place */}
            {event.event_type === 'other' ? (
              <>
              </>
            ) : (
                <>
                  <div>  <i style={{ 'color': 'var(--black)' }} className="fas fa-running"></i>&nbsp;
              Length:&nbsp;
              <span> {event.running_distance}</span>
                  </div>
                  <div>Level:&nbsp;
                <span className={difficultyStyle}>&nbsp;{difficultyLevel}&nbsp;</span>
                  </div>
                </>
            )}

            <div><i style={{ 'color': 'var(--black)' }} className="fas fa-user-circle"></i>&nbsp;
              Host:&nbsp;
              <span>{event.leader}</span>
            </div>
            <div>Description:&nbsp;
              <span> {event.description}</span>
            </div>
            {/* <div className="mytextdiv">
              <div className="mytexttitle">
              Attending
            </div>
            <div className="divider"></div>
            </div>
            <button style={{width: "100px"}}>RSVP </button>
            <div>8
              <span> of your friends are attending</span>
            </div>
            <FriendList/> */}
          </div>
        </div>
    </div>
  </div>
  );
};

export default EventInfoModal;
