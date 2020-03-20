import { useEffect, useCallback, useState, useContext } from 'react';
import EditUserContext from './context/editUserContext';
import SuccessContext from './context/successContext';
import useArray from './useArray';
import API from '../utils/API';

const useUserCRUD = () => {

    const { setEditUser } = useContext(EditUserContext);

    const { success, setSuccess } = useContext(SuccessContext);

    const [toEdit, setToEdit] = useState(false);
    
    const [users, setUsers] = useArray([]);

    const [isSubmitted, setIsSubmitted] = useState(false);

    const getUsers = useCallback(
        () => {
            API.getUsers()
            .then(res => setUsers(res.data))
            .catch(err => console.log(err))
        },
        [setUsers],
    );
 
    useEffect(() => {
        getUsers();
    }, [getUsers]);

    const saveUser = userData => {
        API.saveUser(userData)
            .then(res => setSuccess({
                failure: false,
                message: "User was created!"
            }))
            .then(() => setTimeout(() => 
            setIsSubmitted(true), 2000))
            .catch(err => {
                if (err) {
                    setSuccess({
                        failure: true,
                        message: "Error: Duplicate email!"
                    });
                    console.log(err)
                } 
            });
    };

    const deleteUser = id => {
        API.deleteUser(id)
            .then(res => setSuccess({
                failure: false,
                message: "User was deleted!"
            }))
            .then(() => getUsers())
            .catch(err => {
                if (err) {
                    setSuccess({
                        failure: true,
                        message: "Error: Something went wrong..."
                    });
                    console.log(err)
                } 
            });
    };

    const reviseUser = roster => {
        setEditUser(roster);
        setTimeout(() => setToEdit(true), 2000);
    };

    const editUserValues = (id, userData) => {
        API.deleteUser(id)
        .then(res => setSuccess({
            failure: false,
            message: "User was edited!"
        }))
        .then(() => API.saveUser(userData))
        .then(() => setTimeout(() => setIsSubmitted(true), 2000))
        .catch(err => {
            if (err) {
                setSuccess({
                    failure: true,
                    message: "Error: Something went wrong..."
                });
                console.log(err)
            } 
        });
    };

    return {
        users,
        getUsers,
        deleteUser,
        reviseUser,
        editUserValues,
        saveUser,
        isSubmitted,
        toEdit
    }

};

export default useUserCRUD;
