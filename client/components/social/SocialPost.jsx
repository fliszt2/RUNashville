import React from 'react';
import RunDetails from './RunDetails.jsx';

const SocialPost = (props) => {
  let runDetails = <div></div>;
  if (props.run) {
    runDetails = <RunDetails name={props.name} run={props.run}></RunDetails>;
  }
  return (
    <div className="social-feed-post">
      <div className='social-feed-post-header'>
        <div className='social-feed-post-profile'>
          <img className='profile-pic-round' alt='Profile' src={props.propic} />
          <span style={{'margin-left': '5px', 'align-self': 'flex-start'}}>{props.name}</span>
        </div>
        <div style={{float: 'right', 'align-self': 'center'}}>
          <div className='feed-event-info' style={{'margin-bottom': '0.5rem'}}>
            <i class="fas fa-clock feed-icon"></i>
            <span className='low-priority-text'>{props.date}</span>
          </div>
          <div>
            <div className='feed-event-info'>
              <i class="fas fa-globe-americas feed-icon"></i>
              <span className='low-priority-text'>{props.location}</span>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      {runDetails}
      <span>{props.post}</span>
      <div className='social-post-reactions'>
        <i class="fas fa-comment-dots feed-icon"></i>
        <i class="fas fa-plus-circle feed-icon"></i>
        <i class="fas fa-heartbeat feed-icon"></i>
        {/* {props.emotes.map((emote)=>{
          <img className='emote' src={emote}/>
        })} */}
        <span style={{'float': 'right', 'text-decoration': 'underline'}} className='low-priority-text'>Report</span>
      </div>
    </div>
  );
}

export default SocialPost;
