import React from 'react';

// Post:
// {
// Profile Pic
// Name
// Timestamp
// Location
// Post
// Image
// Comment
// Emote
// Heart
// Array of emotes
// Run info {
// }
// }
const SocialPost = (props) => {
  let runDetails = <div></div>;
  if (props.run) {
    runDetails = <RunDetails run={props.run}></RunDetails>
  }
  return (
    <div className="social-feed-post">
      <div className='social-feed-post-header'>
        <img className='profile-pic-round' alt='Profile' src={props.propic} />
        <div className='social-feed-post-profile'>
          <span style={{'margin-left': '5px'}}>{props.name}</span>
        </div>
        <div style={{float: 'right'}}>
          <span className='low-priority-text'>{props.date}</span>
          <br></br>
          <div>
            <i style={{'color': 'red'}} class="fas fa-globe-americas"></i>
            <span className='low-priority-text'>{props.location}</span>
          </div>
        </div>
      </div>
      <br></br>
      <span>{props.post}</span>
      {runDetails}
      <div className='social-post-reactions'>
        <span>comment</span>
        <span>emote</span>
        <span>heart</span>
        {/* {props.emotes.map((emote)=>{
          <img className='emote' src={emote}/>
        })} */}
        <span style={{'float': 'right', 'text-decoration': 'underline'}} className='low-priority-text'>Report</span>
      </div>
    </div>
  );
}

export default SocialPost;
