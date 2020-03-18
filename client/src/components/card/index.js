import React from 'react';
import './card.css';

export const CardHeader = ({ children }) => {
    return (
        <h4>{children}</h4>
    );
};

export const CardItem = ({ children }) => {
    return (
        <h6
            className="card-title">
            {children}
        </h6>
    );
};

export const CardSpan = ({ children }) => {
    return (
        <span>
            {children}
        </span>
    );
};

export const DeleteBtn = props => {
    return (
        <button
            className="btn btn-outline-danger btn-sm text-light"
            {...props}
        />
    );
};

export const ConfirmBtn = props => {
    return (
        <button
            className="btn btn-outline-success btn-sm text-light"
            {...props}
        />
    );
};

export const EditBtn = props => {
    return (
        <button
            className="btn btn-outline-info btn-sm text-light"
            {...props}
        />
    );
};