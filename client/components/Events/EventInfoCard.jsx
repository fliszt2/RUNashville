import React from 'react';

const EventInfoCard = ({ event }) => (
  <>
    <div className="event-info-card">
      <img className="event-info-card-photo" height="180" width="290" src="./images/nashville.jpeg" alt="photo"></img>
      <span>{event.name}</span>
      <br></br>
      <span>{new Intl.DateTimeFormat('en-GB', { dateStyle: 'full', timeStyle: 'short' }).format(new Date(event.start_time))}</span>
      <span>&nbsp;{event.running_distance}</span>
      <span>&nbsp;{event.difficulty_level}</span>
      <br></br>
      <span>{event.description}</span>
      <br></br>
      <span>{event.start_location}</span>
      <span>&nbsp;Hosted by: {event.leader}</span>
    </div>
    <br></br>
  </>
);

export default EventInfoCard;
