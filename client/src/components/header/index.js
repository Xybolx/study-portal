import React from 'react';
import { Link } from 'react-router-dom';
import { Col } from '../grid';

const Header = props => {
    return (
        <div className="container">
            <Col className="home-img">
                <img src="mihs.png" width="100%" height="100%" className="d-inline-block align-top img-fluid" alt="" />
                <h3 className="titleHeader">{props.icon} {props.headerText}</h3>
            </Col>
        </div>
    );
};

export default Header;
