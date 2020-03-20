import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../components/context/userContext';
import Title from '../components/title/title';
import { PortalNav } from '../components/navbar';
import { Col } from '../components/grid';
import Header from '../components/header';

const Portal = () => {

    const { user } = useContext(UserContext);

    const adminBlockStyle = {
        ...user.permissions
            === 'Admin'
            ? { display: 'block' }
            : { display: 'none' }
    };

    return (
        <div>
            <PortalNav />
            <Title />
            <Header
                headerText={`${user.permissions} Dashboard`}
                subText=""
                subLink="/roster"
                subLinkText="Roster"
                icon={<span className="fas fa-user-md" />}
            />
            <Col id="portalTitle">
                <div className="card">
                    <Col className="text-left">
                        <h4 className="ml-2 my-3" style={adminBlockStyle}>
                            <Link
                                to="/entry">
                                <span className="far fa-id-card fa-fw"></span>
                                New Roster Entry
                            </Link>
                        </h4>
                        <h4 className="ml-2 my-3">
                            <Link 
                                to="/roster">
                                <span className="fas fa-user-md" />
                                View Roster
                            </Link>
                        </h4>
                        <h4 className="ml-2 my-3">
                            <Link 
                                to="/powerpoint">
                                <span className="far fa-list-alt fa-fw"></span>
                                View Powerpoints
                            </Link>
                        </h4>
                        <h4 className="ml-2 my-3" style={adminBlockStyle}>
                            <Link
                                to="/powerentry">
                                <span className="far fa-edit fa-fw"></span>
                                New Powerpoint
                            </Link>
                        </h4>
                    </Col>
                </div>
            </Col>
        </div>
    );
}

export default Portal;