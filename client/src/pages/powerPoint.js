import React, { useContext, useEffect, useCallback } from 'react';
import PowerPointContext from '../components/context/powerPointContext';
import UserContext from '../components/context/userContext';
import API from '../utils/API';
import Title from '../components/title/title';
import { PortalNav } from '../components/navbar';
import { Col } from '../components/grid';
import { CardHeader, CardItem, CardSpan, DeleteBtn, ConfirmBtn } from '../components/card';


const PowerPoint = () => {

    const { user } = useContext(UserContext);
    
    const { powerPoints, setPowerPoints } = useContext(PowerPointContext);

    const adminInlineStyle = {
        ...user.permissions
            === 'Admin'
            ? { display: 'inline' }
            : { display: 'none' }
    };

    const loadPowerPoints = useCallback(
        () => {
            API.getPowerPoints()
            .then(res => setPowerPoints(res.data))
            .catch(err => console.log(err))
        },
        [setPowerPoints],
    );

    const deletePowerPoint = id => {
        API.deletePowerPoint(id)
            .then(res => loadPowerPoints())
            .catch(err => console.log(err));
    };

    useEffect(() => {
        loadPowerPoints();
    }, [loadPowerPoints]);

    return (
        <div>
            <PortalNav />
            <Title />
            {powerPoints && (
                <Col>
                    {powerPoints.map(ppt => (
                        <div className="card" key={ppt._id}>
                            <div className="card-header">
                                <CardHeader>
                                    {ppt.title}
                                </CardHeader>
                            </div>
                            <div className="card-body text-left">
                                <CardItem>
                                    Link:
                                        <CardSpan>
                                        &nbsp;<a href={ppt.url} rel="noopener noreferrer" target="_blank">{ppt.title}</a>
                                    </CardSpan>
                                </CardItem>
                                <div className="text-right">
                                    <DeleteBtn
                                        style={adminInlineStyle}
                                        data-toggle="modal"
                                        data-target={`#exampleModalCenter${ppt._id}`}
                                        ><i className="fas fa-trash-alt"></i> Delete
                                    </DeleteBtn>
                                </div>
                                <div className="modal fade" id={`exampleModalCenter${ppt._id}`} tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                    <div className="modal-dialog modal-dialog-centered" role="document">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h4 className="modal-title" id="exampleModalCenterTitle">Confirm Delete</h4>
                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                    <span style={{ color: "yellow" }} aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div className="modal-body">
                                                <strong>Are you sure you want to delete {ppt.title}?</strong>
                                            </div>
                                            <div className="modal-footer">
                                                <DeleteBtn data-dismiss="modal"><i className="fas fa-times fa-fw"></i></DeleteBtn>
                                                <ConfirmBtn data-dismiss="modal" onClick={() => deletePowerPoint(ppt._id)}><i className="fas fa-check fa-fw"></i></ConfirmBtn>
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

export default PowerPoint;