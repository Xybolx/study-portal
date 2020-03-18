import React, { useState, useMemo, useEffect } from 'react';
import { Switch, Route, Redirect, BrowserRouter as Router } from 'react-router-dom';
import UserContext from './components/context/userContext';
import PowerPointContext from './components/context/powerPointContext';
import EditUserContext from './components/context/editUserContext';
import useIdleTimer from './components/windowEvents/useIdleTimer';
import Home from './pages/home';
import Entry from './pages/entry';
import PowerEntry from './pages/powerEntry';
import PowerPoint from './pages/powerPoint';
import LogOut from './pages/logOut';
import Portal from './pages/portal';
import Roster from './pages/roster';
import Edit from './pages/edit';
import LogIn from './pages/logIn';
import Modal from './components/modal';
import './App.css';

const App = () => {

  const [user, setUser] = useState(null);

  const value = useMemo(() => ({ user, setUser }), [user, setUser]);

  const [powerPoints, setPowerPoints] = useState([]);

  const powerPointValue = useMemo(() => ({ powerPoints, setPowerPoints }), [powerPoints, setPowerPoints]);

  const [editUser, setEditUser] = useState(null);

  const editValue = useMemo(() => ({ editUser, setEditUser }), [editUser, setEditUser]);

  const idleTimer = useIdleTimer(600);

  useEffect(() => {
    if (idleTimer === 0) {
      window.location = "/logout";
    }
  }, [idleTimer]);

  return (
    <Router>
      <div className="App">
        <Modal />
        <Switch>
          <Route exact path='/' component={Home} />
          <PowerPointContext.Provider value={powerPointValue}>
          <UserContext.Provider value={value}>
            <Route exact path='/login' component={LogIn} />

            <Route exact path="/portal" render={() => (
              value.user === null ? (
                <Redirect to="/logout" />
                ) : (
                  <Portal />
              ))} 
            />

            <EditUserContext.Provider value={editValue}>
            <Route exact path="/roster" render={() => (
              value.user === null ? (
                <Redirect to="/logout" />
                ) : (
                  <Roster />
              ))} 
            />

            <Route exact path="/powerpoint" component={PowerPoint} />

            <Route exact path="/powerentry" render={() => (
              value.user === null ? (
                <Redirect to="/logout" />
                ) : value.user.permissions === "Student" ? (
                  <Portal />
                ) : value.user.permissions === "Admin" ? (
                  <PowerEntry />
                ) : (
                  <Redirect to="/logout" />
              ))} 
            />

            <Route exact path='/logout' component={LogOut} />
            
            <Route exact path="/entry" render={() => (
              value.user === null ? (
                <Redirect to="/logout" />
                ) : value.user.permissions === "Student" ? (
                  <Portal />
                ) : value.user.permissions === "Admin" ? (
                  <Entry />
                ) : (
                  <Redirect to="/logout" />
              ))} 
            />

            <Route exact path="/edit" render={() => (
              value.user === null ? (
                <Redirect to="/logout" />
                ) : value.user.permissions === "Student" ? (
                  <Portal />
                ) : value.user.permissions === "Admin" ? (
                  <Edit />
                ) : (
                  <Redirect to="/logout" />
              ))} 
            />
            </EditUserContext.Provider>
          </UserContext.Provider>
          </PowerPointContext.Provider>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
