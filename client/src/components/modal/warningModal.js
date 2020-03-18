import React, { useEffect } from 'react';
import { DeleteBtn } from '../card';
import useIdleTimer from '../windowEvents/useIdleTimer';
import './modal.css';

const WarningModal = () => {

    const idleTimer = useIdleTimer(600);

    useEffect(() => {
        if (idleTimer === 0) {
            window.location = "/logout";
        }

        if (idleTimer === 40) {
            const modalButton = document.getElementById("modalButton");
            modalButton.click();
        }
    }, [idleTimer]);

    return (
        <div>
            <button style={{ display: "none" }} id="modalButton" data-toggle="modal" data-target="#exampleModalCenterIdleTimer" className="btn btn-primary">Open</button>
            <div className="modal fade" id={`exampleModalCenterIdleTimer`} tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title" id="exampleModalCenterTitle">Log Out Warning</h4>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span style={{ color: "yellow" }} aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <strong>You will be logged out in <span className="text-danger">{idleTimer}</span> seconds</strong>
                        </div>
                        <div className="modal-footer">
                            <DeleteBtn data-dismiss="modal">
                                <i className="fas fa-times fa-fw" />
                                Cancel
                            </DeleteBtn>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WarningModal;
