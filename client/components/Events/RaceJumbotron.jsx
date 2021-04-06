import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
// import data from '../../resources/dummydata';
// import EventInfoModal from './EventInfoModal.jsx';
// import runnerImage from './images/leeds_runner.jpg';

class RaceJumbotron extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      races: this.props.races,
    };
  }

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

  render() {
    const { races } = this.state;
    return (
      <div>
        <Carousel>
          {races.map((race) => (
            <Carousel.Item className="carousel-img" key={race.id}>
              <img
                className="d-block w-100"
                src="./images/leeds_runner.jpg"
                alt="First slide"
              />
              <Carousel.Caption key={race.id}>
                <div className="carousel-caption">
                  <div className="race-description">
                    <h1>{race.name}</h1>
                    <div>
                      <span className="registration-text">Register at: <a href={race.link} target="blank">{race.link}</a></span>
                    </div>
                    <br></br>
                    <div><span className="race-description-text">{race.description}</span></div>
                  </div>
                  <div className="race-details">
                    <div>
                      <span className="race-date-text">
                        <i style={{'color': 'var(--white)'}} className="fas fa-clock"></i>
                        &nbsp;{new Intl.DateTimeFormat('en-GB', { dateStyle: 'full', timeStyle: 'short' }).format(new Date(race.start_time))}
                      </span>
                    </div>
                    <div>
                      <span className="race-location-text">
                        <i style={{'color': 'var(--white)'}} className="fas fa-globe-americas"></i>
                        &nbsp;{race.start_location}
                      </span>
                    </div>
                  </div>
                  <div className="race-map">
                    <img src="https://i2.wp.com/vincegray2014.com/wp-content/uploads/2020/01/printable-map-of-nashville-tn.jpg"></img>
                  </div>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
        {/* <EventInfoModal/> */}
      </div>
    );
  }
}

export default RaceJumbotron;
