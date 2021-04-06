import React from 'react';

const EventInfoCard = ({ event }) => (
  <>
    <div className="event-info-card">
      <img className="event-info-card-photo" height="180" width="290" src="./images/nashville.jpeg" alt="photo"></img>
      <span>{event.name}</span>
      <br></br>
      <i style={{'color': 'var(--black)'}} class="fas fa-clock"></i>
      <span className="low-priority-text">&nbsp;{new Intl.DateTimeFormat('en-GB', { dateStyle: 'full', timeStyle: 'short' }).format(new Date(event.start_time))}</span>
      <span className="low-priority-text">&nbsp;{event.running_distance}</span>
      <span className="low-priority-text">&nbsp;{event.difficulty_level}</span>
      <br></br>
      <span className="low-priority-text">{event.description}</span>
      <br></br>
      <i style={{'color': 'var(--black)'}} class="fas fa-globe-americas"></i>
      <span className="low-priority-text">&nbsp;{event.start_location}</span>
      <span className="low-priority-text">&nbsp;Hosted by: {event.leader}</span>
    </div>
    <br></br>
  </>
);

export default EventInfoCard;
