import React from 'react';

const EventInfoCard = ({ dailyRun }) => (
  <>
    <div className="event-info-card">
      <img className="event-info-card-photo" src="./images/nashville.jpeg" alt="photo"></img>
      <span>{dailyRun.name}</span>
      <br></br>
      <span>{new Intl.DateTimeFormat('en-GB', { dateStyle: 'full', timeStyle: 'short' }).format(new Date(dailyRun.start_time))}</span>
      <span>&nbsp;{dailyRun.running_distance}</span>
      <span>&nbsp;{dailyRun.difficulty_level}</span>
      <br></br>
      <span>{dailyRun.description}</span>
      <br></br>
      <span>{dailyRun.start_location}</span>
      <span>&nbsp;Hosted by: {dailyRun.leader}</span>
    </div>
    <br></br>
  </>
);

export default EventInfoCard;
