import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import EventInfoModal from './EventInfoModal';

const CarouselItem = ({ race }) => (

  // const [show, setShow] = React.useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);




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
  // },

  <Carousel.Item className="carousel-img">
    <img
      className="d-block w-100"
      src="./images/leeds_runner.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <EventInfoModal/>
      <div className="carousel-caption">
        <div>
          <h3>{race.name}</h3>
          <div>
            <span>Register at: {race.link}</span>
          </div>
          <div>{race.description}</div>
        </div>
        <div>
          <div>{race.start_time}</div>
          <div>{race.start_location}</div>
        </div>
      </div>
    </Carousel.Caption>
  </Carousel.Item>
);

export default CarouselItem;
