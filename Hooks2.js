import React,{useState} from 'react';

export default function Hooks2(){
    const [numero, setNumero]= useState(0)

    function incrementar(){
        setNumero(numero +3)
    }

    return(
        <div>
            <h1>{numero}</h1>
            <button onClick={incrementar}>+</button>
        </div>
    )
}
