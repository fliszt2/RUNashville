import React from 'react';

const HeaderBar = () => (
  <div id="header-bar">
    <div className='header-item'>
      <i className="fas fa-align-right fa-2x" style={{ 'transform': 'rotate(180deg)', 'color': 'white' }}></i>
      <div className="header-text company-title" style={{ 'marginLeft': '2rem' }}><i>RUN</i>ashville</div>
    </div>
    <div className='header-item'>
      <div className="header-text" style={{ 'marginRight': '1.5rem' }}>Log In</div>
      <i className="fas fa-user-circle fa-2x" style={{ 'color': 'white' }}></i>
    </div>
  </div>
);

export default HeaderBar;
