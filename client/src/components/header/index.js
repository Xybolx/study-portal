import React from 'react';
import { Link } from 'react-router-dom';
import { Col } from '../grid';

const Header = props => {
    return (
        <Col className="home-img container">
            <img src="mihs.png" width="100%" height="75%" className="d-inline-block align-top img-fluid" alt="" />
            <h3 className="titleHeader">{props.headerText}</h3>
            <h3 className="titleSubHeader">{props.subText} <Link to={props.subLink}>{props.icon} {props.subLinkText}</Link></h3>
        </Col>
    );
};

export default Header;
