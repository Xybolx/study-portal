import { useEffect, useState } from 'react';
import WEL from './WEL';

const useIdleTimer = initial => {

    const [idleTimer, setIdleTimer] = useState(initial);

    useEffect(() => {
        const idleInterval = setInterval(() => {
            setIdleTimer(idleTimer - 1)
        }, 1000);
        return () => clearInterval(idleInterval);
    }, [idleTimer]);

    WEL.useMouseMove(ev => setIdleTimer(initial));

    WEL.useKeyUp(ev => setIdleTimer(initial));

    WEL.useWheel(ev => setIdleTimer(initial));

    WEL.useInput(ev => setIdleTimer(initial));

    WEL.useScroll(ev => setIdleTimer(initial));

    WEL.useTouchEnd(ev => setIdleTimer(initial));

    return idleTimer;
};

export default useIdleTimer;