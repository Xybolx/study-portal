import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import API from '../utils/API';
import { Label, Input, Select, FormBtn, useForm } from '../components/form';
import { Col } from '../components/grid';
import Title from '../components/title/title';
import { PortalNav } from '../components/navbar';
import useIdleTimer from '../components/windowEvents/useIdleTimer';

const Register = () => {

    const [isSubmitted, setIsSubmitted] = useState(false);

    const [values, handleChange] = useForm({
        name: '',
        email: '',
        password: '',
        permissions: ''
    });

    const handleFormSubmit = ev => {
        ev.preventDefault();
        if (values.name
            && values.email
            && values.password
            && values.permissions) {
            API.saveUser({
                name: values.name,
                email: values.email,
                password: values.password,
                permissions: values.permissions
            })
                .then(res => setTimeout(() => setIsSubmitted(true), 2000))
                .catch(err => console.log(err))
        };
    };

    const idleTimer = useIdleTimer(600);

    useEffect(() => {
        if (idleTimer === 0) {
            window.location = "/logout";
        }
    }, [idleTimer]);

    if (isSubmitted === true) {
        return <Redirect to="/roster" />
    }

    return (
        <div>
            <PortalNav />
            <Col>
                <Title />
                <h3>Enter Employee Info</h3>
                <form className="text-left" onSubmit={handleFormSubmit}>
                    <Label
                        htmlFor="name"
                    >Name
                    </Label>
                    <Input
                        name="name"
                        type="text"
                        placeholder="Name"
                        value={values.name}
                        onChange={handleChange}
                        required
                    />
                    <Label
                        htmlFor="email"
                    >Email Address
                    </Label>
                    <Input
                        name="email"
                        type="email"
                        placeholder="Enter Email"
                        value={values.email}
                        onChange={handleChange}
                        required
                    />
                    <Label
                        htmlFor="password"
                    >Password
                    </Label>
                    <Input
                        name="password"
                        type="password"
                        placeholder="Enter Password"
                        value={values.password}
                        onChange={handleChange}
                        required
                    />
                    <Label
                        htmlFor="permissions"
                    >Choose Permissions
                    </Label>
                    <Select
                        name="permissions"
                        placeholder="Choose Permissions"
                        value={values.permissions}
                        onChange={handleChange}
                        required
                    />
                    <FormBtn
                        type="submit"
                        disabled={
                            !(  values.name
                                && values.email
                                && values.password
                                && values.permissions
                            )}
                    >
                        <i className="far fa-id-card"></i> Create Profile
                    </FormBtn>
                </form>
            </Col>
        </div>
    );
};

export default Register;