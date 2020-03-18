import { useEffect, useCallback, useState, useContext } from 'react';
import PowerPointContext from '../components/context/powerPointContext';
import API from '../utils/API';

const usePptCRUD = () => {

    const [isSubmitted, setIsSubmitted] = useState(false);

    const { powerPoints, setPowerPoints, addPowerPoint, removePowerPoint, clearPowerPoints } = useContext(PowerPointContext);

    const getPpts = useCallback(
        () => {
            API.getPowerPoints()
            .then(res => setPowerPoints(res.data))
            .catch(err => console.log(err))
        },
        [setPowerPoints],
    );
 
    useEffect(() => {
        getPpts();
    }, [getPpts]);

    const savePpt = pptData => {
        API.savePowerPoint(pptData)
            .then(res => console.log(res.data))
            .then(() => setTimeout(() => setIsSubmitted(true), 2000))
            .catch(err => console.log(err));
    };

    const deletePpt = id => {
        API.deletePowerPoint(id)
            .then(res => getPpts())
            .catch(err => console.log(err));
    };

    return {
        powerPoints,
        isSubmitted,
        getPpts,
        deletePpt,
        savePpt
    }

};

export default usePptCRUD;
