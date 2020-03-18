import React from 'react';

const Iframe = props => {
    return (
        <div className="iframe container">
            <iframe 
                className="embed-responsive-item" 
                title={props.title} 
                src={props.src} 
                gesture="media" 
                allow="encrypted-media" 
                allowFullScreen
            />
        </div>
    );
};

export default Iframe;
