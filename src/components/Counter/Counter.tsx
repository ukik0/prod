import {useState} from "react";
import cl from './Counter.module.scss';

export function Counter() {
    const [counter, setCounter] = useState<number>(0);

    return (
        <>
            {counter}
            <button className={cl.button} onClick={() => setCounter(prev => prev + 1)}>click</button>
        </>
    )
}