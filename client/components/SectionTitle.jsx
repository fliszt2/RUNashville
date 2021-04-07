import React from 'react';

const SectionTitle = (props) => {
    return(
        <div class="section-title">
            <div class="section-title-text">{props.text}</div>
            <div class="section-title-divider"></div>
        </div>
    );
}

export default SectionTitle;