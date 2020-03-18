import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import API from '../utils/API';
import { Label, Input, FormBtn, useForm } from '../components/form';
import { Col } from '../components/grid';
import Title from '../components/title/title';
import { CardHeader } from '../components/card';
import { PortalNav } from '../components/navbar';

const PowerEntry = () => {

    const [isSubmitted, setIsSubmitted] = useState(false);

    const [values, handleChange] = useForm({
        title: '',
        url: '',
    });

    const handleFormSubmit = ev => {
        ev.preventDefault();
        if (values.title && values.url) {
            API.savePowerPoint({
                title: values.title,
                url: values.url,
            })
                .then(res => setTimeout(() => setIsSubmitted(true), 2000))
                .catch(err => console.log(err))
        };
    };

    if (isSubmitted === true) {
        return <Redirect to="/powerpoint" />
    }

    return (
        <div>
            <PortalNav />
            <Title />
            <Col>
                <div className="card">
                    <div className="card-header">
                        <CardHeader>
                            New Powerpoint
                        </CardHeader>
                    </div>
                    <form className="text-left" onSubmit={handleFormSubmit}>
                        <Label
                            htmlFor="title">
                            Title
                        </Label>
                        <Input
                            name="title"
                            type="text"
                            placeholder="Title"
                            value={values.title}
                            onChange={handleChange}
                            required
                            />
                        <Label
                            htmlFor="url">
                            Powerpoint URL
                        </Label>
                        <Input
                            name="url"
                            type="url"
                            placeholder="Enter A URL"
                            value={values.url}
                            onChange={handleChange}
                            required
                            />
                        <FormBtn
                            type="submit"
                            disabled={!(values.title && values.url)}>
                            <i className="far fa-id-card"></i> Create Link
                        </FormBtn>
                    </form>
                </div>
            </Col>
        </div>
    );
};

export default PowerEntry;