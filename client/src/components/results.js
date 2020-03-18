import React, { useContext } from 'react';
import moment from 'moment';
import UserContext from '../components/context/userContext';
import useSearch from './useSearch';
import { Col } from './grid';
import { CardHeader, CardItem, CardSpan, DeleteBtn, ConfirmBtn, EditBtn } from '../components/card';

const Results = props => {

    const { user } = useContext(UserContext);

    const adminInlineStyle = {
        ...user.permissions
            === 'Admin'
            ? { display: 'inline' }
            : { display: 'none' }
    };

    return (
        <div>
            {props.results && (
                <Col>
                    <h2>Roster</h2>
                    {props.results.map(roster => (
                        <div className="card" key={roster._id}>
                            <div className="card-header">
                                <CardHeader>
                                    {roster.name}
                                </CardHeader>
                            </div>
                            <div className="card-body text-left">
                                <CardItem>
                                    Email:
                                        <CardSpan>
                                            &nbsp;
                                            {roster.email}
                                        </CardSpan>
                                </CardItem>
                                <CardItem>
                                    Permissions:
                                        <CardSpan>
                                        &nbsp;{roster.permissions}
                                    </CardSpan>
                                </CardItem>
                                <CardItem>
                                    Last Log In:
                                        <CardSpan>
                                        &nbsp;{
                                            roster.lastLogIn !== null ? 
                                            moment(roster.lastLogIn).fromNow() :
                                            "No Log In Data"
                                        }
                                    </CardSpan>
                                </CardItem>
                                <div className="text-right">
                                    <DeleteBtn
                                        style={adminInlineStyle}
                                        data-toggle="modal"
                                        data-target={`#exampleModalCenter${roster._id}`}
                                        ><i className="fas fa-trash-alt"></i> Delete
                                    </DeleteBtn>
                                    &nbsp;
                                    <EditBtn
                                        style={adminInlineStyle}
                                        onClick={() => props.reviseUser(roster)}
                                        ><i className="fas fa-user-edit"></i> Edit
                                    </EditBtn>
                                </div>
                                <div className="modal fade" id={`exampleModalCenter${roster._id}`} tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                    <div className="modal-dialog modal-dialog-centered" role="document">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h4 className="modal-title" id="exampleModalCenterTitle">Confirm Delete</h4>
                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                    <span style={{ color: "yellow" }} aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div className="modal-body">
                                                <strong>Are you sure you want to delete {roster.name}?</strong>
                                            </div>
                                            <div className="modal-footer">
                                                <DeleteBtn data-dismiss="modal">
                                                    <i className="fas fa-times fa-fw" />No</DeleteBtn>
                                                <ConfirmBtn data-dismiss="modal" onClick={() => props.deleteUser(roster._id)}><i className="fas fa-check fa-fw" />Yes</ConfirmBtn>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Col>
            )}
        </div>
    );
};

export default Results;
