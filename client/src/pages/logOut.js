import React, { useContext, useEffect } from 'react';
import UserContext from '../components/context/userContext';
import Title from '../components/title/title';
import { LogOutNav } from '../components/navbar';
import API from '../utils/API';

const LogOut = () => {

    const { setUser } = useContext(UserContext);

    const logOut = () => {
        API.logOut()
        .then(res => window.location = "/")
        .catch(err => console.log(err))
      };

    useEffect(() => {
        setUser(null);
        logOut();
    }, [setUser]);

        return (
            <div>
                <LogOutNav />
                <Title />
            </div>
        );
    };

export default LogOut;