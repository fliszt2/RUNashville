import React from 'react';
import moment from 'moment';

const formatAMPM = (date) => {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime;
};

const EventInfoCard = ({ event }) => {
  if (event.event_type === 'daily_run') {

    var difficultyLevel;
    var difficultyStyle;
    if (event.difficulty_level === 'beginner') {
      difficultyLevel = 'Beginner';
      difficultyStyle = 'difficulty-beginner';
    } else if (event.difficulty_level === 'intermediate') {
      difficultyLevel = 'Intermediate';
      difficultyStyle = 'difficulty-intermediate';
    } else {
      difficultyLevel = 'Advanced';
      difficultyStyle = 'difficulty-advanced';
    }

    return (
      <>
        <div className="event-info-card">
          <img className="event-info-card-photo" height="180" width="290" src="./images/nashville.jpeg" alt="photo"></img>
          <span className="event-title">{event.name}</span>
          <br></br>
          <div className="event-card-details-container">
            <span className="low-priority-text">
              <i style={{ 'color': 'var(--black)' }} className="fas fa-clock"></i>
              &nbsp;{moment(event.start_time).format('dddd, MMMM Do YYYY, h:mm a')}
              {/* &nbsp;{new Intl.DateTimeFormat('en-GB', { dateStyle: 'full', timeStyle: 'short' }).format(new Date(event.start_time))} */}
            </span>
            <span className="low-priority-text">
              <i style={{ 'color': 'var(--black)' }} className="fas fa-running"></i>
              &nbsp;{event.running_distance}
            </span>
            <span className={difficultyStyle}>&nbsp;&nbsp;{difficultyLevel}&nbsp;&nbsp;</span>
          </div>
          <br></br>
          <span className="event-description">{event.description}</span>
          <br></br>
          <br></br>
          <div className="event-card-details-container">
            <div>
              <span className="low-priority-text">
                <i style={{ 'color': 'var(--black)' }} className="fas fa-globe-americas"></i>
                &nbsp;{event.start_location}
              </span>
            </div>
            <div>
              <span className="low-priority-text">
                <i style={{ 'color': 'var(--black)' }} className="fas fa-user-circle fa-2x"></i>
                &nbsp;Hosted by: {event.leader}
              </span>
            </div>
          </div>
        </div>
        <br></br>
      </>
    );
  } else {
    return (
      <>
        <div className="event-info-card">
          <img className="event-info-card-photo" height="180" width="290" src="./images/nashville.jpeg" alt="photo"></img>
          <span className="event-title">{event.name}</span>
          <br></br>
          <br></br>
          <span className="event-description">{event.description}</span>
        </div>
        <br></br>
      </>
    );
  }
};

export default EventInfoCard;
