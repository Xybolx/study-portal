import React from 'react';
import { DeleteBtn } from '../card';
import './modal.css';

const IframeModal = props => {

    return (
        <div>
            <div className="modal fade" id={`ModalCenterIframe${props.pptId}`} tabIndex="-1" role="dialog" aria-labelledby="ModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title" id="ModalCenterTitle">{props.title}</h4>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span style={{ color: "yellow" }} aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body embed-responsive embed-responsive-16by9">
                            {props.children}
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

export default IframeModal;
