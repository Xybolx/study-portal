import React from 'react';
import Title from '../components/title/title';
import { PortalNav } from '../components/navbar';
import Users from '../components/users';

const Roster = () => {

    return (
        <div>
            <PortalNav />
            <Title />
            <div className="users">
                <Users />
            </div>
        </div>
    );
};

export default Roster;