import React from 'react';
import { Link } from 'react-router-dom';
import Title from '../components/title/title';
import { HomeNav } from '../components/navbar';
import { Col } from '../components/grid';

const Home = () => {

    return (
        <>
            <HomeNav />
            <div className="content">
                <Title />
                <Col className="home-img container border border-info">
                    <img src="mihs.png" width="400" height="200" className="d-inline-block align-top img-fluid" alt="" />
                    <h2>I.C.U. Study Portal</h2>
                    <h3>Log in <Link to="/login"><i className="fas fa-sign-in-alt" /> Here</Link></h3>
                </Col>
            </div>
        </>
    );
};

export default Home;