import React from 'react';
import Modal from 'react-bootstrap/Modal';
import ModalBody from 'react-bootstrap/ModalBody';
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";
import Button from 'react-bootstrap/Button';

const EventInfoModal = ({race}) => {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


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
      <h1
      onClick={handleShow}
      >
        <div>Hilltop</div>
      </h1>

      <Modal show={show} onHide={handleClose}>
        <div>
          {/* left column */}
          <div>
            <h3>Name</h3>
            <img src={race.thumbnail_photo}></img>
            <h3>Route</h3>
            <img src={race.map_url}></img>
          </div>
          {/* right column */}
          <div>
            <h3>Details</h3>
            <div>When:
              <span>{race.start_time}</span>
            </div>
            <div>Where:
              <span>{race.start_location}</span>
            </div>
            {/* is meetup a different place */}
            <div>
              Length:
              <span>{race.running_distance}</span>
            </div>
            <div>Level:
              <span>{race.difficulty_level}</span>
            </div>
            <div>Host:
              <span>{race.leader}</span>
            </div>
            <div>Description:
              <span>{race.description}</span>
            </div>
          </div>
        </div>
        <div>
          <h3>{race.name}</h3>
          <div>
            <span>Register at: {race.link}</span>
          </div>
          <div></div>
        </div>
        <div>Details</div>
        <div></div>
       </Modal>
    </>
  );
};

export default EventInfoModal;
