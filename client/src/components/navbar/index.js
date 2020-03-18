import React, { useContext } from 'react';
import UserContext from '../context/userContext';
import { NavLink } from 'react-router-dom';
import Clock from '../clock/clock';
import './navbar.css';

export const PortalNav = () => {

    const { user } = useContext(UserContext);

    const adminBlockStyle = {
        ...user !== null && 
        user.permissions === 'Admin' ? 
        { display: 'block' } : 
        { display: 'none' }
    };

    return (
        <nav className="navbar navbar-expand-lg">
            <img src="mihs.png" width="60" height="60" className="d-inline-block align-top" alt="" />
            <NavLink className="navbar-brand" to="/portal">
                {
                    window.location.pathname ===
                    "/portal" ?
                    "Dashboard" :
                    window.location.pathname ===
                    "/entry" ?
                    "New Roster Entry" :
                    window.location.pathname ===
                    "/roster" ?
                    "Roster" :
                    window.location.pathname ===
                    "/powerpoint" ?
                    "Powerpoints" :
                    window.location.pathname ===
                    "/powerentry" ?
                    "New Powerpoint" :
                    "Study Portal"
                }
                <Clock />
            </NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon fas fa-bars d-inline-block align-top"></span>
            </button>
            <div className="collapse navbar-collapse text-left" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <NavLink
                        className={
                            window.location.pathname === "/portal"
                                ? "nav-item nav-link active"
                                : "nav-item nav-link"
                        }
                        to="/portal">
                        <i className="fas fa-tachometer-alt" /> Dashboard
                    </NavLink>
                    <NavLink
                        className={
                            window.location.pathname === "/entry"
                                ? "nav-item nav-link active"
                                : "nav-item nav-link"
                        }
                        style={adminBlockStyle}
                        to="/entry"
                    ><i className="far fa-id-card"></i> Roster Entry
                        </NavLink>
                    <NavLink
                        className={
                            window.location.pathname === "/roster"
                                ? "nav-item nav-link active"
                                : "nav-item nav-link"
                        }
                        to="/roster"
                    ><i className="far fa-list-alt"></i> Roster
                        </NavLink>
                    <NavLink
                        className={
                            window.location.pathname === "/powerpoint"
                                ? "nav-item nav-link active"
                                : "nav-item nav-link"
                        }
                        to="/powerpoint"
                    ><i className="far fa-file-powerpoint"></i> Powerpoints
                        </NavLink>
                    <NavLink
                        className={
                            window.location.pathname === "/powerentry"
                                ? "nav-item nav-link active"
                                : "nav-item nav-link"
                        }
                        style={adminBlockStyle}
                        to="/powerentry"
                    ><i className="far fa-edit"></i> Power Entry
                        </NavLink>
                    <NavLink
                        className={
                            window.location.pathname === "/logout"
                                ? "nav-item nav-link active"
                                : "nav-item nav-link"
                        }
                        to="/logout"
                    ><i className="fas fa-sign-out-alt"></i> Logout
                        </NavLink>
                </div>
            </div>
        </nav>
    );
};

export const EditNav = () => {

    const { user } = useContext(UserContext);

    const adminBlockStyle = {
        ...user !== null && 
        user.permissions === 'Admin' ? 
        { display: 'block' } : 
        { display: 'none' }
    };

    return (
        <nav className="navbar navbar-expand-lg">
            <img src="mihs.png" width="60" height="60" className="d-inline-block align-top" alt="" />
            <NavLink className="navbar-brand" to="/logout">
                Edit
                <Clock />
            </NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon fas fa-bars d-inline-block align-top"></span>
            </button>
            <div className="collapse navbar-collapse text-left" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <NavLink
                        className={
                            window.location.pathname === "/portal"
                                ? "nav-item nav-link active"
                                : "nav-item nav-link"
                        }
                        to="/portal">
                        <i className="fas fa-tachometer-alt" /> Dashboard
                    </NavLink>
                    <NavLink
                        className={
                            window.location.pathname === "/entry"
                                ? "nav-item nav-link active"
                                : "nav-item nav-link"
                        }
                        style={adminBlockStyle}
                        to="/entry"
                    ><i className="far fa-id-card"></i> Roster Entry
                        </NavLink>
                    <NavLink
                        className={
                            window.location.pathname === "/roster"
                                ? "nav-item nav-link active"
                                : "nav-item nav-link"
                        }
                        to="/roster"
                    ><i className="far fa-list-alt"></i> Roster
                        </NavLink>
                    <NavLink
                        className={
                            window.location.pathname === "/edit"
                                ? "nav-item nav-link active"
                                : "nav-item nav-link"
                        }
                        to="/roster"
                    ><i className="fas fa-user-edit"></i> Edit
                        </NavLink>
                    <NavLink
                        className={
                            window.location.pathname === "/powerpoint"
                                ? "nav-item nav-link active"
                                : "nav-item nav-link"
                        }
                        to="/powerpoint"
                    ><i className="far fa-file-powerpoint"></i> Powerpoints
                        </NavLink>
                    <NavLink
                        className={
                            window.location.pathname === "/powerentry"
                                ? "nav-item nav-link active"
                                : "nav-item nav-link"
                        }
                        style={adminBlockStyle}
                        to="/powerentry"
                    ><i className="far fa-edit"></i> Power Entry
                        </NavLink>
                    <NavLink
                        className={
                            window.location.pathname === "/logout"
                                ? "nav-item nav-link active"
                                : "nav-item nav-link"
                        }
                        to="/logout"
                    ><i className="fas fa-sign-out-alt"></i> Logout
                        </NavLink>
                </div>
            </div>
        </nav>
    );
};

export const LogOutNav = () => {

    return (
        <nav className="navbar navbar-expand-lg">
            <img src="mihs.png" width="60" height="60" className="d-inline-block align-top" alt="" />
            <NavLink className="navbar-brand" to="/logout">
                Log Out
                <Clock />
            </NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon fas fa-bars d-inline-block align-top"></span>
            </button>
            <div className="collapse navbar-collapse text-left" id="navbarNavAltMarkup">
                <div className="navbar-nav"></div>
            </div>
        </nav>
    );
};

export const HomeNav = props => {

    return (
        <nav className="navbar navbar-expand-lg">
            <img src="mihs.png" width="60" height="60" className="d-inline-block align-top" alt="" />
            <NavLink className="navbar-brand text-light" to="/">
                {
                    window.location.pathname ===
                    "/login" ?
                    "Log In" :
                    "Study Portal"
                }
                <Clock />
            </NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span width="50" height="50" className="navbar-toggler-icon fas fa-bars d-inline-block align-top"></span>
            </button>
            <div className="collapse navbar-collapse text-left" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <NavLink
                        exact to="/"
                        className="nav-item nav-link"
                        activeClassName="active"
                    ><i className="fas fa-home"></i> Home
                        </NavLink>
                    <NavLink
                        className="nav-item nav-link"
                        activeClassName="active"
                        to="/login"
                    ><i className="fas fa-sign-in-alt"></i> Log In
                        </NavLink>
                </div>
            </div>
        </nav>
    );
};