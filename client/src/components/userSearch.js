import React from 'react';
import { useForm, InputGroup } from './form';
import useSearch from './useSearch';

const UserSearch = props => {

    const [values, handleChange] = useForm();

    const { search } = values;

    const [results] = useSearch(search, props.users);

    return (
        <div>
            <InputGroup
                name='search'
                value={search}
                onChange={handleChange}

             />
        </div>
    );
};

export default UserSearch;
