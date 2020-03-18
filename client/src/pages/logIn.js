import React, { useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';
import UserContext from '../components/context/userContext';
import API from '../utils/API';
import useValidate from '../components/useValidate';
import Title from '../components/title/title';
import { HomeNav } from '../components/navbar';
import { CardHeader } from '../components/card';
import { Label, Input, FormBtn, useForm } from '../components/form';
import { Col } from '../components/grid';

const LogIn = () => {

    const [values, handleChange] = useForm({ 
        email: '', 
        password: '' 
    });

    const errors = useValidate(values);
    
    const { isValidEmail, isValidPassword } = errors;

    const { email, password } = values;

    const { user, setUser } = useContext(UserContext);

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const [submitError, setSubmitError] = useState({
        message: ""
    });

    const handleFormSubmit = ev => {
        ev.preventDefault();
        if (email && password) {
            API.logIn({ email, password })
                .then(res => loadUser(res.data))
                .then(() => userSet())
                .catch(err => {
                    console.log(err);
                    setSubmitError({
                        message: "Incorrect email or password..."
                    });
                });
        }
    };

    const { message } = submitError;

    const loadUser = async () => {
        API.getUser()
            .then(res => setUser(res.data))
            .catch(err => console.log(err))
        return {
            user
        }
    };

    const userSet = async () => {
        await user;
        setTimeout(() => setIsLoggedIn(true), 1000);
    };

    if (isLoggedIn === true) {
        return <Redirect to="/portal" />
    }

    return (

        <div>
            <HomeNav />
            <Title />
            <Col id="loginTitle">
                <div className="card">
                    <div className="card-header">
                        <CardHeader>
                            Enter log in info
                        </CardHeader>
                    </div>
                    <form className="text-left mt-3" onSubmit={handleFormSubmit}>
                        <Label
                            htmlFor="email">
                            Email Address
                        </Label>
                        <Input
                            name="email"
                            type="email"
                            placeholder="Enter Email"
                            value={email}
                            onChange={handleChange}
                            required
                            />
                        <Label
                            htmlFor="password">
                            Password
                        </Label>
                        <Input
                            name="password"
                            type="password"
                            placeholder="Enter Password"
                            value={password}
                            onChange={handleChange}
                            minLength="6"
                            required
                        />
                        <div id="submitError" className="text-danger">
                            {message}
                        </div>
                        <div className="text-right">
                            <FormBtn
                                type="submit"
                                disabled={
                                    (!isValidEmail && !isValidPassword)}>
                                <i className="fas fa-sign-in-alt"></i> Login
                            </FormBtn>
                        </div>
                    </form>
                </div>
            </Col>
        </div>
    );
};

export default LogIn;