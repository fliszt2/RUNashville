import React from 'react';

const HeaderBar = () => (
    <div id="header-bar">
      <div className='header-item'>
        <i class="fas fa-align-right fa-2x" style={{'transform': 'rotate(180deg)', 'color': 'white'}}></i>
        <div className="header-text company-title" style={{'margin-left': '2rem'}}><i>RUN</i>ashville</div>
      </div>
      <div className='header-item'>
        <div className="header-text" style={{'margin-right': '1.5rem'}}>Log In</div>
        <i class="fas fa-user-circle fa-2x" style={{'color': 'white'}}></i>
      </div>
    <div className="header-item">
      <div className="header-text">Log In</div>
      <button className="header-btn" />
    </div>
  </div>
);

export default HeaderBar;
