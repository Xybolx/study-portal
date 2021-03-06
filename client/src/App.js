import React, { useState, useMemo } from 'react';
import { Switch, Route, Redirect, BrowserRouter as Router } from 'react-router-dom';
import UserContext from './components/context/userContext';
import PowerPointContext from './components/context/powerPointContext';
import EditUserContext from './components/context/editUserContext';
import SuccessContext from './components/context/successContext';
import useArray from './components/useArray';
import Home from './pages/home';
import Entry from './pages/entry';
import PowerEntry from './pages/powerEntry';
import PowerPoint from './pages/powerPoint';
import LogOut from './pages/logOut';
import Portal from './pages/portal';
import Roster from './pages/roster';
import Edit from './pages/edit';
import LogIn from './pages/logIn';
import WarningModal from './components/modal/warningModal';
import './App.css';

const App = () => {

  const [user, setUser] = useState(null);

  const value = useMemo(() => ({ user, setUser }), [user, setUser]);

  const [powerPoints, setPowerPoints, addPowerPoint, removePowerPoint, clearPowerPoints] = useArray([]);

  const powerPointValue = useMemo(() => ({ powerPoints, setPowerPoints, addPowerPoint, removePowerPoint, clearPowerPoints }), [powerPoints, setPowerPoints, addPowerPoint, removePowerPoint, clearPowerPoints]);

  const [editUser, setEditUser] = useState(null);

  const editValue = useMemo(() => ({ editUser, setEditUser }), [editUser, setEditUser]);

  const [success, setSuccess] = useState({
    failure: false,
    message: ""
  });

  const successValue = useMemo(() => ({ success, setSuccess }), [success, setSuccess]);

  return (
    <Router>
      <div className="App">
          <WarningModal />
          <Switch>
            <Route exact path='/' component={Home} />
            <SuccessContext.Provider value={successValue}>
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
            </SuccessContext.Provider>
          </Switch>
      </div>
    </Router>
  );
};

export default App;
