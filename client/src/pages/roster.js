import React from 'react';
import Title from '../components/title/title';
import { PortalNav } from '../components/navbar';
import Users from '../components/users';
import Header from '../components/header';

const Roster = () => {

    return (
        <div>
            <PortalNav />
            <Title />
            <div className="users mb-5">
                <Users />
            </div>
        </div>
    );
};

export default Roster;