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
        </>
    );
};

export default Home;