import React from 'react';

const friendCard = (friend) => (
  <div key={friend.id}>
    <img className="friendCardProfileImg" src={friend.photo !== '' ? friend.photo : './defaultProf.png'} alt="default" />
    <div className="friendCardName">{friend.name}</div>
  </div>
);

export default friendCard;
