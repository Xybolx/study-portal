import React from 'react';
import Title from '../components/title/title';
import { HomeNav } from '../components/navbar';
import { Col } from '../components/grid';
import Header from '../components/header';

const Home = () => {

    return (
        <>
            <HomeNav />
            <Title />
            <div className="container">
                <Header
                    headerText="I.C.U. Study Portal"
                    subText=""
                    subLink="/login"
                    subLinkText="LogIn"
                    icon={<i className="fas fa-sign-in-alt" />}
                />
            </div>
        </>
    );
};

export default Home;