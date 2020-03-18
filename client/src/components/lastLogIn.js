import React, { useState, useEffect } from 'react';
import moment from 'moment';

const LastLogIn = props => {

    const [difference, setDifference] = useState("");
    
    const [now] = useState(new Date())
    
    useEffect(() => {
        const last = moment(props.lastLog);
        setDifference(last.from(now));
    }, [now, props.lastLog])

    return (
        <div>
            
        </div>
    );
};

export default LastLogIn;
