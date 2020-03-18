import { useState, useEffect } from "react";

const useValidate = values => {

    const [errors, setErrors] = useState({
        isValidEmail: false,
        isValidPassword: false,
    });

    useEffect(() => {
        const emailRegEx = /w+@.+\..+/;
        const emailMatch = emailRegEx.test(values.email);
        const passwordRegEx = /^(?=[0-9a-zA-Z#@$?]{6,}$).*/;
        const passwordMatch = passwordRegEx.test(values.password);

        if (values.email && emailMatch) {
            setErrors((errors => ({ ...errors, isValidEmail: true })))
        } else if (!emailMatch) {
            setErrors((errors => ({ ...errors, isValidEmail: false })))            
        }

        if (values.password && passwordMatch) {
            setErrors((errors => ({ ...errors, isValidPassword: true })))            
        } else if (!passwordMatch) {
            setErrors((errors => ({ ...errors, isValidPassword: false })))                        
        }

    }, [values]);

    return errors;

};

export default useValidate;