import React from 'react';
import { Redirect } from 'react-router-dom';
import SuccessAlert from '../components/alert/successAlert';
import useUserCRUD from '../components/useUserCRUD';
import { Label, Input, Select, FormBtn, useForm } from '../components/form';
import { Col } from '../components/grid';
import Title from '../components/title/title';
import { CardHeader } from '../components/card';
import { PortalNav } from '../components/navbar';

const Entry = () => {

    const { saveUser, isSubmitted } = useUserCRUD();

    const [values, handleChange] = useForm({
        name: '',
        email: '',
        password: '',
        permissions: '',
        lastLogIn: Date.now()
    });

    const { name, email, password, permissions, lastLogIn } = values;

    const handleFormSubmit = ev => {
        ev.preventDefault();
        const newUser = {
            name,
            email,
            password,
            permissions,
            lastLogIn
        }
        if (name && email && password && permissions) {
            saveUser(newUser);
        };
    };

    if (isSubmitted === true) {
        return <Redirect to="/roster" />
    }

    return (
        <div>
            <PortalNav />
            <Title />
            <div className="container">
                <Col>
                <SuccessAlert />
                    <div className="card fadeIn">
                        <div className="card-header">
                            <CardHeader>
                                New Roster Entry
                            </CardHeader>
                        </div>
                        <form className="text-left mt-3" onSubmit={handleFormSubmit}>
                            <Label
                                htmlFor="name">
                                Name
                            </Label>
                            <Input
                                name="name"
                                type="text"
                                placeholder="Name"
                                value={name}
                                onChange={handleChange}
                                required
                                />
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
                                htmlFor="password"
                                >Password
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
                            <Label
                                htmlFor="permissions">
                                    Choose Permissions
                            </Label>
                            <Select
                                name="permissions"
                                placeholder="Choose Permissions"
                                value={permissions}
                                onChange={handleChange}
                                option1="Student"
                                option2="Admin"
                                required
                                />
                            <FormBtn
                                type="submit"
                                disabled={
                                    !(  name &&
                                        email &&
                                        password &&
                                        permissions
                                        )}>
                                    <i className="far fa-id-card"></i> Create Profile
                                </FormBtn>
                            </form>
                        </div>
                    </Col>
                </div>
            </div>
        );
    };

export default Entry;