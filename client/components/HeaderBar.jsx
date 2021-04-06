import React from 'react';

const HeaderBar = () => {
  return(
    <div id="header-bar">
      <div className='header-item'>
        <button className="header-btn"></button>
        <div className="header-text company-title"><i>RUN</i>ashville</div>
      </div>
      <div className='header-item'>
        <div className="header-text">Log In</div>
        <button className="header-btn"></button>
      </div>
    </div>
  );
}

export default HeaderBar;
