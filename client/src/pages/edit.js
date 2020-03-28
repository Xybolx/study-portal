import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import useUserCRUD from '../components/useUserCRUD';
import { Label, Input, Select, FormBtn, useForm } from '../components/form';
import { Col } from '../components/grid';
import EditUserContext from '../components/context/editUserContext';
import Title from '../components/title/title';
import { EditNav } from '../components/navbar';
import { CardHeader } from '../components/card';

const Edit = () => {

    const { editUser } = useContext(EditUserContext);

    const { editUserValues, isSubmitted } = useUserCRUD();

    const [values, handleChange] = useForm({
        name: editUser.name,
        email: editUser.email,
        password: '',
        permissions: editUser.permissions,
        lastLogin: ''
    });

    const { name, email, password, permissions, lastLogIn } = values;

    const handleFormSubmit = ev => {
        let id = editUser._id
        ev.preventDefault();
        const userData = {
            name,
            email,
            password,
            permissions,
            lastLogIn: Date.now()
        };
        if (name
            && email
            && password
            && permissions) {
            editUserValues(id, userData);
        };
    };

    if (isSubmitted === true) {
        return <Redirect to="/roster" />
    };

    return (
        <div>
            <EditNav />
            <Title />
            <div className="container mb-5 fadeIn">
                <Col>
                <div className="card">
                    <div className="card-header">
                        <CardHeader>
                            Edit Roster Entry
                        </CardHeader>
                    </div>
                    <h6 className="mt-2">(Must enter a new password)</h6>
                        <form className="text-left" onSubmit={handleFormSubmit}>
                            <Label htmlFor="name">Name</Label>
                            <Input name="name" placeholder="Enter Name" value={values.name} onChange={handleChange} required />
                            <Label htmlFor="email">Email Address</Label>
                            <Input name="email" type="email" placeholder="Enter Email" value={values.email} onChange={handleChange} required />
                            <Label htmlFor="password">Password</Label>
                            <Input name="password" type="password" placeholder="Enter Password" value={values.password} onChange={handleChange} minLength="6" required />
                            <Label htmlFor="permissions">Choose Permissions</Label>
                            <Select name="permissions" placeholder="Choose Permissions" option1="Student" option2="Admin" value={values.permissions} onChange={handleChange} required />
                            <FormBtn
                                type="submit"
                                disabled={
                                    !(  values.name
                                        && values.email
                                        && values.password
                                        && values.permissions
                                        )}>
                                <i className="far fa-id-card"></i> Update Roster Entry
                            </FormBtn>
                        </form>
                    </div>
                </Col>
            </div>
        </div>
    );
};

export default Edit;