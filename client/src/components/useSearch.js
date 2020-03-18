import { useEffect } from 'react';
import useArray from './useArray';

const useSearch = (users, search) => {

    // state lives in the useArray custom hook
    const [results, setResults] = useArray([]);

    // if search bar isn't empty setResults
    useEffect(() => {
        if (search) {
            setResults(users.filter(user =>
                user.name === search.toLowerCase()));
        }
    }, [users, search, setResults]);

    // return users array and results array
    return [results];
};

export default useSearch;