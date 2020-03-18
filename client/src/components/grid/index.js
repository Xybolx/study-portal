import React from 'react';

export const Col = ({ children, className }) => {
    return (
        <div className={`col-md-6 offset-md-3 ${className}`}>
            {children}
        </div>
    );
};