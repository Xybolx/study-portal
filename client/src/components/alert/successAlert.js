import React, { useContext } from 'react';
import SuccessContext from '../context/successContext';

const SuccessAlert = props => {

    const { success } = useContext(SuccessContext);

    return (
        <div style={ success.message ? { display: "block" } : { display: "none" } } 
            className={
            !success.failure ? 
            "alert alert-success alert-dismissible fade show" :
            "alert alert-danger alert-dismissible fade show"
        } 
        role="alert">
            {success.message}
            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    );
};

export default SuccessAlert;
