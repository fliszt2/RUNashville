import React from 'react';

const SectionTitle = (props) => {
    return(
        <div className="section-title">
            <div className="section-title-text">{props.text}</div>
            <div className="section-title-divider"></div>
        </div>
    );
}

export default SectionTitle;