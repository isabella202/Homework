import React, {useState} from "react";
import {useCounter} from '../hooks/useCounter'
import { Small } from "./Small";

export const Memorize = () => {
    const {counter, increment} = useCounter(1);
    const [first, setFirst] = useState(10);

    return(
        <>
            <h1>Memorizw {first}</h1>
            <h1> Small: <Small value={counter}/> </h1>
            <hr />

            <button
                className="btn btn-primary"
                onClick={() => increment()}
            >
                +1
            </button>

            
            <button
                className="btn btn-primary"
                onClick={() => setFirst( first +1 )}
            >
                set Memorize State
            </button>
        </>
    )
}