import React from 'react';
import { useNavigate } from 'react-router-dom';

const Input = () => {

    const navigate = useNavigate();

    return (
        <div>
            <h1 style={{color: 'red'}}>Input</h1>
            <button onClick={()=> navigate("/lorem")}>Next</button>
        </div>
    );
}

export default Input;